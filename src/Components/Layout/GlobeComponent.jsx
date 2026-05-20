import React, { useEffect, useMemo, useRef, useState } from "react";
import Globe from "globe.gl";
import { Globe2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GlobeComponent = () => {
    const globeRef = useRef(null);
    const globeInstanceRef = useRef(null);
    const countriesRef = useRef([]);
    const majorPointsRef = useRef([]);
    const [countries, setCountries] = useState([]);
    const [selectedInfo, setSelectedInfo] = useState(null);
    const [isHd, setIsHd] = useState(true);

    const findNearestCountry = (lat, lng, sourceCountries) => {
        if (!sourceCountries.length) return null;

        const toRad = (value) => (value * Math.PI) / 180;

        const getDistanceKm = (lat1, lon1, lat2, lon2) => {
            const earthRadius = 6371;
            const dLat = toRad(lat2 - lat1);
            const dLon = toRad(lon2 - lon1);
            const a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);

            return earthRadius * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
        };

        let nearest = null;
        let minDistance = Number.POSITIVE_INFINITY;

        sourceCountries.forEach((country) => {
            if (!country.latlng || country.latlng.length < 2) return;

            const distance = getDistanceKm(lat, lng, country.latlng[0], country.latlng[1]);
            if (distance < minDistance) {
                minDistance = distance;
                nearest = country;
            }
        });

        return nearest
            ? {
                ...nearest,
                distanceKm: minDistance
            }
            : null;
    };

    const majorCountryPoints = useMemo(() => {
        return countries
            .filter((country) => country.latlng?.length >= 2)
            .sort((a, b) => (b.population || 0) - (a.population || 0))
            .slice(0, 14)
            .map((country) => ({
                lat: country.latlng[0],
                lng: country.latlng[1],
                size: 0.2,
                color: "#22d3ee",
                name: country.name?.common || "Unknown"
            }));
    }, [countries]);

    useEffect(() => {
        countriesRef.current = countries;
    }, [countries]);

    useEffect(() => {
        majorPointsRef.current = majorCountryPoints;
    }, [majorCountryPoints]);

    useEffect(() => {
        const fetchCountryData = async () => {
            try {
                const res = await fetch(
                    "https://restcountries.com/v3.1/all?fields=name,capital,population,region,subregion,flags,latlng,languages,timezones"
                );
                const data = await res.json();
                setCountries(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Failed to load country data for globe:", error);
            }
        };

        fetchCountryData();
    }, []);

    useEffect(() => {
        if (!globeRef.current || globeInstanceRef.current) return;

        const globe = Globe()(globeRef.current)
            .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
            .bumpImageUrl("https://unpkg.com/three-globe/example/img/earth-topology.png")
            .backgroundImageUrl("https://unpkg.com/three-globe/example/img/night-sky.png")
            .showAtmosphere(true)
            .atmosphereColor("#67e8f9")
            .atmosphereAltitude(0.17)
            .pointAltitude(0.02)
            .pointRadius("size")
            .pointColor("color");

        globe.controls().enableDamping = true;
        globe.controls().dampingFactor = 0.08;
        globe.controls().minDistance = 120;
        globe.controls().maxDistance = 420;
        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = 0.5;

        globe.onGlobeClick((coords) => {
            const nearestCountry = findNearestCountry(coords.lat, coords.lng, countriesRef.current);
            globe.controls().autoRotate = false;

            globe.pointsData([
                ...majorPointsRef.current,
                {
                    lat: coords.lat,
                    lng: coords.lng,
                    size: 0.45,
                    color: "#f59e0b",
                    name: "Selected Location"
                }
            ]);

            if (nearestCountry?.latlng?.length >= 2) {
                globe.pointOfView(
                    {
                        lat: nearestCountry.latlng[0],
                        lng: nearestCountry.latlng[1],
                        altitude: 1.4
                    },
                    1200
                );
            }

            setSelectedInfo({
                lat: coords.lat,
                lng: coords.lng,
                nearestCountry
            });
        });

        globeRef.current.style.cursor = "grab";

        globeInstanceRef.current = globe;

        const resizeGlobe = () => {
            if (!globeRef.current || !globeInstanceRef.current) return;

            const { clientWidth, clientHeight } = globeRef.current;
            globeInstanceRef.current.width(clientWidth).height(clientHeight);
        };

        resizeGlobe();
        window.addEventListener("resize", resizeGlobe);

        return () => {
            window.removeEventListener("resize", resizeGlobe);
            if (globeInstanceRef.current) {
                globeInstanceRef.current._destructor?.();
                globeInstanceRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (!globeInstanceRef.current) return;

        globeInstanceRef.current.pointsData(majorCountryPoints);
    }, [majorCountryPoints]);

    useEffect(() => {
        if (!globeInstanceRef.current) return;

        globeInstanceRef.current.globeImageUrl(
            isHd
                ? "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                : "https://unpkg.com/three-globe/example/img/earth-dark.jpg"
        );
    }, [isHd]);

    const languageText = selectedInfo?.nearestCountry?.languages
        ? Object.values(selectedInfo.nearestCountry.languages).join(", ")
        : "N/A";

    const timezoneText = selectedInfo?.nearestCountry?.timezones?.join(", ") || "N/A";

    return (
        <section className="w-full py-0 sm:py-3 max-w-7xl mx-auto px-3 pt-4 sm:px-4 lg:px-6">
            <div className="relative h-[calc(100vh-7rem)] min-h-[540px] w-full overflow-hidden border border-white/10 bg-slate-900/70 shadow-2xl rounded-xl">
                <div ref={globeRef} className="h-full w-full" />

                <div className="pointer-events-none absolute top-3 left-3 right-3 z-20 flex items-start justify-between gap-3">
                    <div className="hidden rounded-xl border border-white/10 bg-slate-900/75 px-4 py-2 text-white backdrop-blur-md sm:block">
                        <p className="flex items-center gap-2 font-display text-lg font-bold">
                            <Globe2 size={18} className="text-cyan-300" /> Interactive 3D Earth
                        </p>
                        <p className="text-xs text-slate-300">Tap/click globe for nearest country details</p>
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsHd((prev) => !prev)}
                        className="pointer-events-auto rounded-xl border border-cyan-300/30 bg-slate-900/75 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-md transition hover:bg-cyan-400/20"
                    >
                        {isHd ? "Night View" : "HD Day View"}
                    </button>
                </div>

                {!selectedInfo && (
                    <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 w-[92%] -translate-x-1/2 rounded-xl border border-white/10 bg-slate-900/75 px-4 py-2 text-center text-xs text-slate-300 backdrop-blur-md sm:w-auto sm:max-w-sm">
                        Earth par click kijiye, details card yahin upar open hoga.
                    </div>
                )}

                <AnimatePresence>
                    {selectedInfo && (
                        <motion.aside
                            initial={{ opacity: 0, scale: 0.95, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 40 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="absolute right-3 bottom-3 left-3 z-20 max-h-[62vh] overflow-y-auto rounded-xl border border-white/15 bg-slate-900/85 p-4 text-slate-300 shadow-2xl backdrop-blur-md sm:max-h-[58vh] lg:left-auto lg:w-[380px]"
                        >
                            <div className="mb-3 flex items-center justify-between">
                                <h3 className="font-display text-lg font-semibold text-white">Location Details</h3>
                                <button
                                    type="button"
                                    onClick={() => setSelectedInfo(null)}
                                    className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-700/60 bg-slate-800/80 text-slate-200 transition hover:bg-slate-700 hover:text-white"
                                    aria-label="Close details"
                                >
                                    <X size={16} />
                                </button>
                            </div>

                            <div className="space-y-2 text-sm">
                                <p><span className="font-semibold text-slate-100">Latitude:</span> {selectedInfo.lat.toFixed(4)}</p>
                                <p><span className="font-semibold text-slate-100">Longitude:</span> {selectedInfo.lng.toFixed(4)}</p>
                                <p><span className="font-semibold text-slate-100">Nearest Country:</span> {selectedInfo.nearestCountry?.name?.common || "N/A"}</p>
                                <p><span className="font-semibold text-slate-100">Distance:</span> {selectedInfo.nearestCountry?.distanceKm ? `${selectedInfo.nearestCountry.distanceKm.toFixed(0)} km` : "N/A"}</p>
                                <p><span className="font-semibold text-slate-100">Capital:</span> {selectedInfo.nearestCountry?.capital?.[0] || "N/A"}</p>
                                <p><span className="font-semibold text-slate-100">Region:</span> {selectedInfo.nearestCountry?.region || "N/A"}</p>
                                <p><span className="font-semibold text-slate-100">Sub Region:</span> {selectedInfo.nearestCountry?.subregion || "N/A"}</p>
                                <p><span className="font-semibold text-slate-100">Population:</span> {selectedInfo.nearestCountry?.population?.toLocaleString() || "N/A"}</p>
                                <p><span className="font-semibold text-slate-100">Languages:</span> {languageText}</p>
                                <p><span className="font-semibold text-slate-100">Timezones:</span> {timezoneText}</p>
                                {selectedInfo.nearestCountry?.flags?.png && (
                                    <img
                                        src={selectedInfo.nearestCountry.flags.png}
                                        alt={selectedInfo.nearestCountry.flags.alt || selectedInfo.nearestCountry.name?.common}
                                        className="mt-3 h-[80%] w-[80%] rounded-xl border border-slate-700/50 object-cover"
                                    />
                                )}
                            </div>
                        </motion.aside>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default GlobeComponent;