
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../API/postApi";
import { Loader } from "../UI/Loader";
import { useEffect, useState, useTransition } from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export const CountryDetails = () => {

    const params = useParams();

    const [isPending, startTrasition] = useTransition();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        startTrasition(async () => {
            const res = await getCountryIndData(params.id);
            if (res.status === 200) {
                setCountry(res.data[0]);
            }
        })
    }, [params.id]);

    if (isPending) return <Loader />

    const nativeNames = country?.name?.nativeName
        ? Object.keys(country.name.nativeName)
              .map((key) => country.name.nativeName[key]?.common)
              .filter(Boolean)
              .join(", ")
        : "N/A";

    const currencies = country?.currencies
        ? Object.keys(country.currencies)
              .map((curElem) => country.currencies[curElem]?.name)
              .filter(Boolean)
              .join(", ")
        : "N/A";

    const languages = country?.languages
        ? Object.keys(country.languages)
              .map((curElem) => country.languages[curElem])
              .filter(Boolean)
              .join(", ")
        : "N/A";

    const borders = country?.borders
        ? country.borders.join(", ")
        : "No borders/Islands";

    const idd = country?.idd?.root
        ? `${country.idd.root}${country.idd.suffixes?.[0] || ""}`
        : "N/A";

    const coords = country?.latlng ? country.latlng.map(c => c.toFixed(2)).join(", ") : "N/A";
    const carSigns = country?.car?.signs?.join(", ") || "N/A";
    const demonym = country?.demonyms?.eng?.m || "N/A";
    const altSpellings = country?.altSpellings?.slice(0, 3).join(", ") || "N/A";

    return <section className="mx-auto max-w-7xl px-0 py-0 sm:px-6 lg:px-8 sm:py-12">
        {
            country && (
                <motion.article
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="relative overflow-hidden sm:rounded-md p-0 sm:p-[2px] min-h-[100dvh] sm:min-h-0 bg-slate-900/90 sm:bg-transparent"
                >
                    <div className="relative h-full w-full sm:rounded-md border-0 sm:border border-white/10 p-4 sm:bg-slate-900/90 sm:p-6 backdrop-blur min-h-[100dvh] sm:min-h-0">
                        <NavLink to="/country" className="absolute top-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-cyan-300 backdrop-blur-md border border-cyan-500/30 transition-colors hover:bg-slate-700 sm:hidden ">
                            <ArrowLeft size={20} />
                        </NavLink>
                        <div className="grid gap-8 lg:grid-cols-[2fr_3fr] lg:items-start pt-12 sm:pt-0">
                            <div className="space-y-6 z-10 lg:sticky lg:top-24">
                                <img src={country.flags?.png} alt={country.flags?.alt || country.name?.official} className="w-full rounded-md object-cover shadow-lg border border-slate-700/50" />
                                {country.coatOfArms?.png && (
                                    <div className="flex flex-col items-center justify-center p-6 bg-slate-800/30 rounded-md border border-slate-700/50">
                                        <p className="text-slate-400 text-sm font-semibold mb-4 tracking-wider uppercase">Coat of Arms</p>
                                        <img src={country.coatOfArms.png} alt="Coat of Arms" className="h-32 object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]" />
                                    </div>
                                )}
                                <div className="grid grid-cols-2 gap-4">
                                    {country.maps?.googleMaps && (
                                        <a
                                            href={country.maps.googleMaps}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center justify-center w-full gap-2 rounded-md bg-slate-800 py-3 text-xs font-semibold text-cyan-300 transition hover:bg-slate-700 hover:text-white border border-slate-700/50"
                                        >
                                            Google Maps
                                        </a>
                                    )}
                                    {country.maps?.openStreetMaps && (
                                        <a
                                            href={country.maps.openStreetMaps}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center justify-center w-full gap-2 rounded-md bg-slate-800 py-3 text-xs font-semibold text-emerald-300 transition hover:bg-slate-700 hover:text-white border border-slate-700/50"
                                        >
                                            OpenStreetMap
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="relative z-10">
                                <div className="mb-6">
                                    <h1 className="font-display text-4xl font-bold text-white tracking-tight sm:text-5xl">
                                        {country.name?.official}
                                    </h1>
                                    <div className="mt-3 flex flex-wrap items-center gap-3">
                                        <span className={`px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider ${country.independent ? "bg-emerald-400/10 text-emerald-300 border border-emerald-400/20" : "bg-rose-400/10 text-rose-300 border border-rose-400/20"}`}>
                                            {country.independent ? "Independent" : "Dependent Territory"}
                                        </span>
                                        {country.unMember && <span className="px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">UN Member</span>}
                                        {country.landlocked && <span className="px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/20">Landlocked</span>}
                                        <span className="px-3 py-1 rounded-md text-xs font-bold text-slate-300 bg-slate-800 border border-slate-700">{country.cca2} / {country.cca3}</span>
                                    </div>
                                </div>

                                <div className="grid gap-x-6 gap-y-4 text-sm text-slate-300 sm:grid-cols-2 sm:text-base">
                                    <p><span className="font-semibold text-slate-100">Common Name :</span> {country.name?.common || "N/A"}</p>
                                    <p><span className="font-semibold text-slate-100">Native Name :</span> {nativeNames}</p>
                                    <p><span className="font-semibold text-slate-100">Demonym :</span> {demonym}</p>
                                    <p><span className="font-semibold text-slate-100">Population :</span> {country.population?.toLocaleString() || "N/A"}</p>
                                    <p><span className="font-semibold text-slate-100">Region :</span> {country.region || "N/A"}</p>
                                    <p><span className="font-semibold text-slate-100">Continents :</span> {country.continents?.join(", ") || "N/A"}</p>
                                    <p><span className="font-semibold text-slate-100">Sub Region :</span> {country.subregion || "N/A"}</p>
                                    <p><span className="font-semibold text-slate-100">Capital :</span> {country.capital?.join(", ") || "N/A"}</p>
                                    <p><span className="font-semibold text-slate-100">Area :</span> {country.area?.toLocaleString()} km²</p>
                                    <p><span className="font-semibold text-slate-100">Coordinates :</span> {coords}</p>
                                    <p className="sm:col-span-2"><span className="font-semibold text-slate-100">Borders :</span> {borders}</p>

                                    <div className="col-span-1 border-t border-slate-700/50 pt-4 mt-2">
                                        <p><span className="font-semibold text-slate-100">Dial Code (IDD) :</span> {idd}</p>
                                        <p className="mt-4"><span className="font-semibold text-slate-100">Driving Side :</span> <span className="capitalize">{country.car?.side || "N/A"}</span></p>
                                        <p className="mt-4"><span className="font-semibold text-slate-100">Vehicle Signs :</span> {carSigns}</p>
                                    </div>
                                    <div className="col-span-1 border-t border-slate-700/50 pt-4 mt-2">
                                        <p><span className="font-semibold text-slate-100">Top Level Domain :</span> {country.tld?.[0] || "N/A"}</p>
                                        <p className="mt-4"><span className="font-semibold text-slate-100">Start of Week :</span> <span className="capitalize">{country.startOfWeek || "N/A"}</span></p>
                                        <p className="mt-4"><span className="font-semibold text-slate-100">Currencies :</span> {currencies}</p>
                                    </div>

                                    <p className="sm:col-span-2 border-t border-slate-700/50 pt-4 mt-2"><span className="font-semibold text-slate-100">Timezones :</span> {country.timezones?.join(", ") || "N/A"}</p>
                                    <p className="sm:col-span-2"><span className="font-semibold text-slate-100">Languages :</span> {languages}</p>
                                    <p className="sm:col-span-2"><span className="font-semibold text-slate-100">Alt Spellings :</span> {altSpellings}</p>
                                </div>
                                <NavLink to="/country">
                                    <motion.button
                                        whileHover={{ x: -4 }}
                                        className="mt-8 inline-flex items-center gap-2 rounded-md border border-cyan-300/40 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
                                    >
                                        <ArrowLeft size={16} /> Go Back
                                    </motion.button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </motion.article>
            )
        }
    </section>
}