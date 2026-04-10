import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../API/postApi";
import { Loader } from "../UI/Loader";
import { useEffect, useState, useTransition } from "react";
import { ArrowLeft, Volume2 } from "lucide-react";
import { motion } from "framer-motion";

const MotionNavLink = motion(NavLink);

const pageVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.08,
        },
    },
};

const blockVariants = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
    },
};

const HELLO_AUDIO_MAP = {
    Arabic: { hello: "Marhaban", lang: "ar-SA" },
    Bengali: { hello: "Nomoskar", lang: "bn-BD" },
    Chinese: { hello: "Ni hao", lang: "zh-CN" },
    Dutch: { hello: "Hallo", lang: "nl-NL" },
    English: { hello: "Hello", lang: "en-US" },
    French: { hello: "Bonjour", lang: "fr-FR" },
    German: { hello: "Hallo", lang: "de-DE" },
    Greek: { hello: "Yassas", lang: "el-GR" },
    Hindi: { hello: "Namaste", lang: "hi-IN" },
    Indonesian: { hello: "Halo", lang: "id-ID" },
    Italian: { hello: "Ciao", lang: "it-IT" },
    Japanese: { hello: "Konnichiwa", lang: "ja-JP" },
    Korean: { hello: "Annyeonghaseyo", lang: "ko-KR" },
    Persian: { hello: "Salaam", lang: "fa-IR" },
    Polish: { hello: "Czesc", lang: "pl-PL" },
    Portuguese: { hello: "Ola", lang: "pt-PT" },
    Punjabi: { hello: "Sat Sri Akal", lang: "pa-IN" },
    Russian: { hello: "Privet", lang: "ru-RU" },
    Spanish: { hello: "Hola", lang: "es-ES" },
    Swedish: { hello: "Hej", lang: "sv-SE" },
    Tamil: { hello: "Vanakkam", lang: "ta-IN" },
    Thai: { hello: "Sawasdee", lang: "th-TH" },
    Turkish: { hello: "Merhaba", lang: "tr-TR" },
    Ukrainian: { hello: "Pryvit", lang: "uk-UA" },
    Urdu: { hello: "Assalamualaikum", lang: "ur-PK" },
    Vietnamese: { hello: "Xin chao", lang: "vi-VN" },
};

const getHelloAudioList = (country) => {
    const languageValues = country?.languages ? Object.values(country.languages) : [];
    return languageValues.slice(0, 3).map((languageName) => {
        const matched = HELLO_AUDIO_MAP[languageName];
        return {
            language: languageName,
            hello: matched?.hello || "Hello",
            lang: matched?.lang || "en-US",
        };
    });
};

export const CountryDetails = () => {
    const params = useParams();
    const [isPending, startTrasition] = useTransition();
    const [country, setCountry] = useState(null);

    const playHelloAudio = (helloText, languageCode) => {
        if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
        const utterance = new SpeechSynthesisUtterance(helloText);
        utterance.lang = languageCode;
        utterance.rate = 0.95;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    };

    useEffect(() => {
        startTrasition(async () => {
            const res = await getCountryIndData(params.id);
            if (res.status === 200) {
                setCountry(res.data[0]);
            }
        });
    }, [params.id]);

    if (isPending) return <Loader />;

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

    const borders = country?.borders ? country.borders.join(", ") : "No borders/Islands";

    const idd = country?.idd?.root
        ? `${country.idd.root}${country.idd.suffixes?.[0] || ""}`
        : "N/A";

    const coords = country?.latlng ? country.latlng.map((c) => c.toFixed(2)).join(", ") : "N/A";
    const carSigns = country?.car?.signs?.join(", ") || "N/A";
    const demonym = country?.demonyms?.eng?.m || "N/A";
    const altSpellings = country?.altSpellings?.slice(0, 3).join(", ") || "N/A";
    const giniEntries = country?.gini ? Object.entries(country.gini) : [];
    const latestGiniEntry = giniEntries.length ? giniEntries[giniEntries.length - 1] : null;
    const giniText = latestGiniEntry ? `${latestGiniEntry[1]} (${latestGiniEntry[0]})` : "N/A";
    const postalCodeText = country?.postalCode?.format
        ? `${country.postalCode.format}${country.postalCode.regex ? ` | ${country.postalCode.regex}` : ""}`
        : "N/A";

    const helloAudioList = getHelloAudioList(country);

    return (
        <section className="mx-auto max-w-7xl px-0 py-0 sm:px-6 lg:px-8 sm:py-12">
            {country && (
                <motion.article
                    variants={pageVariants}
                    initial="hidden"
                    animate="show"
                    className="relative min-h-[100dvh] overflow-hidden bg-slate-900/90 p-0 sm:min-h-0 sm:rounded-xl sm:bg-transparent sm:p-[2px]"
                >
                    <div className="relative h-full min-h-[100dvh] w-full border-0 border-white/10 p-4 backdrop-blur sm:min-h-0 sm:rounded-xl sm:border sm:bg-slate-900/90 sm:p-6">
                        <MotionNavLink
                            to="/country"
                            variants={blockVariants}
                            whileHover={{ scale: 1.03, x: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="absolute left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-800/85 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-md transition-colors hover:bg-slate-700 sm:left-6 sm:top-6"
                        >
                            <ArrowLeft size={18} />
                            Go Back
                        </MotionNavLink>

                        <div className="grid gap-8 pt-12 lg:grid-cols-[2fr_3fr] lg:items-start sm:pt-0">
                            <motion.div variants={blockVariants} className="z-10 space-y-6 lg:sticky lg:top-24">
                                <motion.img
                                    src={country.flags?.svg}
                                    alt={country.flags?.alt || country.name?.official}
                                    className="w-full rounded-xl border border-slate-700/50 object-cover shadow-lg"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.35 }}
                                />

                                {country.coatOfArms?.svg && (
                                    <motion.div variants={blockVariants} className="flex flex-col items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/30 p-6">
                                        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Coat of Arms</p>
                                        <motion.img
                                            src={country.coatOfArms.svg || country.coatOfArms.png}
                                            alt="Coat of Arms"
                                            className="h-32 object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
                                            animate={{ y: [0, -4, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                    </motion.div>
                                )}

                                <div className="grid grid-cols-2 gap-4">
                                    {country.maps?.googleMaps && (
                                        <motion.a
                                            href={country.maps.googleMaps}
                                            target="_blank"
                                            rel="noreferrer"
                                            whileHover={{ y: -3, scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/50 bg-slate-800 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-slate-700 hover:text-white"
                                        >
                                            Google Maps
                                        </motion.a>
                                    )}
                                    {country.maps?.openStreetMaps && (
                                        <motion.a
                                            href={country.maps.openStreetMaps}
                                            target="_blank"
                                            rel="noreferrer"
                                            whileHover={{ y: -3, scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700/50 bg-slate-800 py-3 text-xs font-semibold text-emerald-300 transition hover:bg-slate-700 hover:text-white"
                                        >
                                            OpenStreetMap
                                        </motion.a>
                                    )}
                                </div>
                            </motion.div>

                            <motion.div variants={blockVariants} className="relative z-10">
                                <motion.div variants={blockVariants} className="mb-6">
                                    <motion.h1
                                        variants={blockVariants}
                                        className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl"
                                    >
                                        {country.name?.official}
                                    </motion.h1>

                                    <motion.div variants={pageVariants} className="mt-3 flex flex-wrap items-center gap-3">
                                        <motion.span
                                            variants={blockVariants}
                                            whileHover={{ y: -2, scale: 1.02 }}
                                            className={`rounded-xl px-3 py-1 text-xs font-semibold uppercase tracking-wider ${country.independent ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-300" : "border border-rose-400/20 bg-rose-400/10 text-rose-300"}`}
                                        >
                                            {country.independent ? "Independent" : "Dependent Territory"}
                                        </motion.span>
                                        {country.unMember && (
                                            <motion.span variants={blockVariants} whileHover={{ y: -2, scale: 1.02 }} className="rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                                                UN Member
                                            </motion.span>
                                        )}
                                        {country.landlocked && (
                                            <motion.span variants={blockVariants} whileHover={{ y: -2, scale: 1.02 }} className="rounded-xl border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
                                                Landlocked
                                            </motion.span>
                                        )}
                                        <motion.span variants={blockVariants} whileHover={{ y: -2, scale: 1.02 }} className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-bold text-slate-300">
                                            {country.cca2} / {country.cca3}
                                        </motion.span>
                                    </motion.div>
                                </motion.div>

                                <motion.div variants={pageVariants} className="grid gap-x-6 gap-y-4 text-sm text-slate-300 sm:grid-cols-2 sm:text-base">
                                    <motion.p variants={blockVariants}><span className="font-semibold text-slate-100">Common Name :</span> {country.name?.common || "N/A"}</motion.p>
                                    <motion.p variants={blockVariants}><span className="font-semibold text-slate-100">Native Name :</span> {nativeNames}</motion.p>
                                    <motion.p variants={blockVariants}><span className="font-semibold text-slate-100">Demonym :</span> {demonym}</motion.p>
                                    <motion.p variants={blockVariants}><span className="font-semibold text-slate-100">Population :</span> {country.population?.toLocaleString() || "N/A"}</motion.p>
                                    <motion.p variants={blockVariants}><span className="font-semibold text-slate-100">Region :</span> {country.region || "N/A"}</motion.p>
                                    <motion.p variants={blockVariants}><span className="font-semibold text-slate-100">Continents :</span> {country.continents?.join(", ") || "N/A"}</motion.p>
                                    <motion.p variants={blockVariants}><span className="font-semibold text-slate-100">Sub Region :</span> {country.subregion || "N/A"}</motion.p>
                                    <motion.p variants={blockVariants}><span className="font-semibold text-slate-100">Capital :</span> {country.capital?.join(", ") || "N/A"}</motion.p>
                                    <motion.p variants={blockVariants}><span className="font-semibold text-slate-100">Area :</span> {country.area?.toLocaleString()} km²</motion.p>
                                    <motion.p variants={blockVariants}><span className="font-semibold text-slate-100">Status :</span> {country.status || "N/A"}</motion.p>
                                    <motion.p variants={blockVariants}><span className="font-semibold text-slate-100">Coordinates :</span> {coords}</motion.p>
                                    <motion.p variants={blockVariants}><span className="font-semibold text-slate-100">FIFA Code :</span> {country.fifa || "N/A"}</motion.p>
                                    <motion.p variants={blockVariants}><span className="font-semibold text-slate-100">Gini Index :</span> {giniText}</motion.p>
                                    <motion.p variants={blockVariants} className="sm:col-span-2"><span className="font-semibold text-slate-100">Borders :</span> {borders}</motion.p>

                                    <motion.div variants={blockVariants} className="col-span-1 rounded-xl border border-slate-700/50 bg-slate-800/25 p-4">
                                        <p><span className="font-semibold text-slate-100">Dial Code (IDD) :</span> {idd}</p>
                                        <p className="mt-4"><span className="font-semibold text-slate-100">Driving Side :</span> <span className="capitalize">{country.car?.side || "N/A"}</span></p>
                                        <p className="mt-4"><span className="font-semibold text-slate-100">Vehicle Signs :</span> {carSigns}</p>
                                    </motion.div>

                                    <motion.div variants={blockVariants} className="col-span-1 rounded-xl border border-slate-700/50 bg-slate-800/25 p-4">
                                        <p><span className="font-semibold text-slate-100">Top Level Domain :</span> {country.tld?.[0] || "N/A"}</p>
                                        <p className="mt-4"><span className="font-semibold text-slate-100">Start of Week :</span> <span className="capitalize">{country.startOfWeek || "N/A"}</span></p>
                                        <p className="mt-4"><span className="font-semibold text-slate-100">Currencies :</span> {currencies}</p>
                                    </motion.div>

                                    <motion.p variants={blockVariants} className="sm:col-span-2 border-t border-slate-700/50 pt-4 mt-2"><span className="font-semibold text-slate-100">Timezones :</span> {country.timezones?.join(", ") || "N/A"}</motion.p>
                                    <motion.p variants={blockVariants} className="sm:col-span-2"><span className="font-semibold text-slate-100">Postal Code Format :</span> {postalCodeText}</motion.p>
                                    <motion.p variants={blockVariants} className="sm:col-span-2"><span className="font-semibold text-slate-100">Languages :</span> {languages}</motion.p>

                                    <motion.div variants={blockVariants} className="sm:col-span-2 rounded-xl border border-slate-700/50 bg-slate-800/35 p-4">
                                        <p className="mb-3 text-sm font-semibold text-slate-100">Language Audio (Hello Pronunciation)</p>
                                        <motion.div variants={pageVariants} className="flex flex-wrap gap-2">
                                            {helloAudioList.length ? (
                                                helloAudioList.map((item, idx) => (
                                                    <motion.button
                                                        key={`${item.language}-${idx}`}
                                                        type="button"
                                                        variants={blockVariants}
                                                        whileHover={{ y: -2, scale: 1.02 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        onClick={() => playHelloAudio(item.hello, item.lang)}
                                                        className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-3 py-2 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-400/20"
                                                    >
                                                        <Volume2 size={14} /> {item.language}: {item.hello}
                                                    </motion.button>
                                                ))
                                            ) : (
                                                <p className="text-sm text-slate-400">No language audio available.</p>
                                            )}
                                        </motion.div>
                                    </motion.div>

                                    <motion.p variants={blockVariants} className="sm:col-span-2"><span className="font-semibold text-slate-100">Alt Spellings :</span> {altSpellings}</motion.p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.article>
            )}
        </section>
    );
};