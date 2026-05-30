import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../API/postApi";
import {
    ArrowLeft, Volume2, Globe, Users, Languages, Clock, Hash,
    Car, Mail, Flag, Map, ExternalLink,
    Coins, Earth, Navigation, Signpost, BookOpen, ChevronLeft, ChevronRight
} from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { motion } from "framer-motion";
import { generatePagination } from "../../utils/generatePagination.js";
import { getHelloAudioList } from "../../utils/helloAudio.js";
import { CountryDetailsSkeleton } from '../UI/Skeletons.jsx'
import { SectionCard } from '../UI/SectionCard.jsx';
import { DetailRow } from '../UI/DetailRow.jsx';
import { Badge } from '../UI/Badge.jsx';

const MotionNavLink = motion(NavLink);

const pageVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

const blockVariants = {
    hidden: { opacity: 0, y: 18, filter: "blur(5px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export const CountryDetails = () => {
    const params = useParams();
    const [isPending, startTrasition] = useTransition();
    const [country, setCountry] = useState(null);
    const [translationPage, setTranslationPage] = useState(0);
    const TRANSLATIONS_PER_PAGE = 9;
    // console.log(country)

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

    if (isPending) return <CountryDetailsSkeleton />;

    if (!country) return null;

    const nativeNameEntries = country?.name?.nativeName
        ? Object.entries(country.name.nativeName)
        : [];

    const currencyEntries = country?.currencies
        ? Object.entries(country.currencies)
        : [];

    const languageEntries = country?.languages
        ? Object.entries(country.languages)
        : [];

    const translationEntries = country?.translations
        ? Object.entries(country.translations)
        : [];

    const borders = country?.borders || [];

    const idd = country?.idd?.root
        ? country.idd.suffixes?.length
            ? country.idd.suffixes.map(s => `${country.idd.root}${s}`).join(", ")
            : country.idd.root
        : "N/A";

    const coords = country?.latlng ? `${country.latlng[0]}°, ${country.latlng[1]}°` : "N/A";
    const capitalCoords = country?.capitalInfo?.latlng
        ? `${country.capitalInfo.latlng[0]}°, ${country.capitalInfo.latlng[1]}°`
        : "N/A";

    const carSigns = country?.car?.signs?.join(", ") || "N/A";
    const altSpellings = country?.altSpellings?.join(", ") || "N/A";

    const giniEntries = country?.gini ? Object.entries(country.gini) : [];
    const latestGiniEntry = giniEntries.length ? giniEntries[giniEntries.length - 1] : null;
    const giniText = latestGiniEntry ? `${latestGiniEntry[1]} (${latestGiniEntry[0]})` : "N/A";

    const postalFormat = country?.postalCode?.format || "N/A";
    const postalRegex = country?.postalCode?.regex || "N/A";

    const helloAudioList = getHelloAudioList(country);

    const LANG_CODE_MAP = {
        ara: "Arabic", bre: "Breton", ces: "Czech", cym: "Welsh", deu: "German",
        est: "Estonian", fin: "Finnish", fra: "French", hrv: "Croatian", hun: "Hungarian",
        ind: "Indonesian", ita: "Italian", jpn: "Japanese", kor: "Korean", nld: "Dutch",
        per: "Persian", pol: "Polish", por: "Portuguese", rus: "Russian", slk: "Slovak",
        spa: "Spanish", srp: "Serbian", swe: "Swedish", tur: "Turkish", urd: "Urdu", zho: "Chinese"
    };


    return (
        <section className="mx-auto max-w-7xl px-0 py-0 sm:px-6 lg:px-8 sm:py-10">
            <motion.article
                variants={pageVariants}
                initial="hidden"
                animate="show"
                className="relative min-h-[100dvh] overflow-hidden bg-slate-900/90 p-0 sm:min-h-0 sm:rounded-3xl sm:bg-transparent"
            >
                <MotionNavLink
                    to="/country"
                    variants={blockVariants}
                    whileHover={{ scale: 1.03, x: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="z-50 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-800/85 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-md transition-colors hover:bg-slate-700 ml-1 my-4"
                >
                    <ArrowLeft size={18} />
                    Go Back
                </MotionNavLink>
                <div className="relative h-full min-h-[100dvh] w-full border-0 border-white/10 backdrop-blur sm:min-h-0 sm:rounded-3xl sm:border sm:bg-slate-900/90">


                    <motion.div
                        variants={blockVariants}
                        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-950/30 to-slate-900 px-4 pb-8 pt-16 sm:px-8 sm:pt-8 sm:pb-10 sm:rounded-t-2xl"
                    >


                        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
                            {/* Flag + Coat of Arms */}
                            <motion.div variants={blockVariants} className="flex flex-col items-center gap-4 lg:items-start">
                                <motion.img
                                    src={country.flags?.svg}
                                    alt={country.flags?.alt || country.name?.official}
                                    className="w-full max-w-xs rounded-3xl border border-slate-700/50 object-cover shadow-2xl sm:max-w-sm"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.35 }}
                                />
                                {country.coatOfArms?.svg && (
                                    <div className="flex items-center gap-4 rounded-3xl border border-slate-700/50 bg-slate-800/30 px-5 py-3">
                                        <motion.img
                                            src={country.coatOfArms.svg}
                                            alt="Coat of Arms"
                                            className="h-24 object-contain drop-shadow-[0_8px_12px_rgba(0,0,0,0.5)]"
                                            animate={{ y: [0, -3, 0] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        />
                                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Coat of Arms</span>
                                    </div>
                                )}
                            </motion.div>

                            {/* Name + Badges */}
                            <motion.div variants={blockVariants} className="space-y-4">
                                <div className="flex items-center gap-3">
                                    {country.flag && <span className="text-5xl sm:text-6xl">{country.flag}</span>}
                                    <div>
                                        <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                                            {country.name?.official}
                                        </h1>
                                        <p className="mt-1 text-lg text-cyan-300/80">{country.name?.common}</p>
                                    </div>
                                </div>

                                {/* Native Names */}
                                {nativeNameEntries.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {nativeNameEntries.map(([code, nameObj]) => (
                                            <span key={code} className="rounded-xl bg-slate-800/60 px-3 py-1.5 text-sm text-slate-300 border border-slate-700/40">
                                                <span className="font-semibold text-cyan-300 uppercase text-xs mr-2">{code}</span>
                                                {nameObj.official}
                                                {nameObj.common !== nameObj.official && (
                                                    <span className="text-slate-400 ml-1">({nameObj.common})</span>
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Status Badges */}
                                <div className="flex flex-wrap items-center gap-2">
                                    <Badge color={country.independent ? "emerald" : "rose"}>
                                        {country.independent ? "Independent" : "Dependent Territory"}
                                    </Badge>
                                    {country.unMember && <Badge color="cyan">UN Member</Badge>}
                                    {country.landlocked && <Badge color="amber">Landlocked</Badge>}
                                    <Badge color="slate">{country.cca2} / {country.cca3}</Badge>
                                    {country.ccn3 && <Badge color="slate">CCN3: {country.ccn3}</Badge>}
                                    {country.cioc && <Badge color="purple">CIOC: {country.cioc}</Badge>}
                                    {country.fifa && <Badge color="purple">FIFA: {country.fifa}</Badge>}
                                    {country.status && (
                                        <Badge color="slate">{country.status}</Badge>
                                    )}
                                </div>

                                {/* Map Links */}
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {country.maps?.googleMaps && (
                                        <motion.a
                                            href={country.maps.googleMaps}
                                            target="_blank"
                                            rel="noreferrer"
                                            whileHover={{ y: -3, scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="inline-flex items-center gap-2 rounded-2xl border border-slate-700/50 bg-slate-800 px-4 py-2.5 text-sm font-medium text-cyan-300 transition hover:bg-slate-700 hover:text-white"
                                        >
                                            <Map size={16} /> Google Maps <ExternalLink size={12} />
                                        </motion.a>
                                    )}
                                    {country.maps?.openStreetMaps && (
                                        <motion.a
                                            href={country.maps.openStreetMaps}
                                            target="_blank"
                                            rel="noreferrer"
                                            whileHover={{ y: -3, scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="inline-flex items-center gap-2 rounded-2xl border border-slate-700/50 bg-slate-800 px-4 py-2.5 text-sm font-medium text-emerald-300 transition hover:bg-slate-700 hover:text-white"
                                        >
                                            <Map size={16} /> OpenStreetMap <ExternalLink size={12} />
                                        </motion.a>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Sections*/}
                    <div className="space-y-5 p-4 sm:p-6 lg:p-8">

                        {/* Geography & Location */}
                        <motion.div variants={blockVariants}>
                            <SectionCard icon={Globe} title="Geography & Location">
                                <div className="grid gap-0 sm:grid-cols-2">
                                    <DetailRow label="Region" value={country.region} />
                                    <DetailRow label="Sub Region" value={country.subregion} />
                                    <DetailRow label="Continents" value={country.continents?.join(", ")} />
                                    <DetailRow label="Capital" value={country.capital?.join(", ")} />
                                    <DetailRow label="Capital Coordinates" value={capitalCoords} />
                                    <DetailRow label="Country Coordinates" value={coords} />
                                    <DetailRow label="Area" value={country.area ? `${country.area.toLocaleString()} km²` : "N/A"} />
                                    <DetailRow label="Landlocked" value={country.landlocked ? "Yes" : "No"} />
                                </div>
                            </SectionCard>
                        </motion.div>

                        {/* Population & Demographics*/}
                        <motion.div variants={blockVariants}>
                            <SectionCard icon={Users} title="Population & Demographics">
                                <div className="grid gap-0 sm:grid-cols-2">
                                    <DetailRow label="Population" value={country.population?.toLocaleString()} />
                                    <DetailRow label="Gini Index" value={giniText} />
                                    {country.demonyms && Object.entries(country.demonyms).map(([langCode, dem]) => (
                                        <DetailRow
                                            key={langCode}
                                            label={`Demonym (${langCode.toUpperCase()})`}
                                            value={`♂ ${dem.m} / ♀ ${dem.f}`}
                                        />
                                    ))}
                                </div>
                            </SectionCard>
                        </motion.div>

                        {/*Languages & Audio */}
                        <motion.div variants={blockVariants}>
                            <SectionCard icon={Languages} title="Languages">
                                <div className="grid gap-0 sm:grid-cols-2 mb-4">
                                    {languageEntries.map(([code, name]) => (
                                        <DetailRow key={code} label={code.toUpperCase()} value={name} />
                                    ))}
                                </div>

                                {helloAudioList.length > 0 && (
                                    <div className="rounded-3xl border border-slate-700/40 bg-slate-800/30 p-4">
                                        <p className="mb-3 text-sm font-semibold text-slate-100 flex items-center gap-2">
                                            <Volume2 size={16} className="text-cyan-400" />
                                            Hello Pronunciation
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {helloAudioList.map((item, idx) => (
                                                <motion.button
                                                    key={`${item.language}-${idx}`}
                                                    type="button"
                                                    whileHover={{ y: -2, scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => playHelloAudio(item.hello, item.lang)}
                                                    className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-3 py-2 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-400/20"
                                                >
                                                    <Volume2 size={14} /> {item.language}: {item.hello}
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </SectionCard>
                        </motion.div>

                        {/*Currencies */}
                        <motion.div variants={blockVariants}>
                            <SectionCard icon={Coins} title="Currencies">
                                {currencyEntries.length > 0 ? (
                                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                        {currencyEntries.map(([code, cur]) => (
                                            <div key={code} className="flex items-center gap-3 rounded-3xl border border-slate-700/40 bg-slate-800/30 p-4">
                                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-lg font-bold text-cyan-300 shrink-0">
                                                    {cur.symbol || code[0]}
                                                </span>
                                                <div>
                                                    <p className="text-sm font-semibold text-white">{cur.name}</p>
                                                    <p className="text-xs text-slate-400 font-mono">{code}{cur.symbol ? ` · ${cur.symbol}` : ""}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-slate-400">No currency data available.</p>
                                )}
                            </SectionCard>
                        </motion.div>

                        {/* Codes & Identifiers */}
                        <motion.div variants={blockVariants}>
                            <SectionCard icon={Hash} title="Codes & Identifiers">
                                <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
                                    <DetailRow label="CCA2 (ISO 3166‑1 α2)" value={country.cca2} mono />
                                    <DetailRow label="CCA3 (ISO 3166‑1 α3)" value={country.cca3} mono />
                                    <DetailRow label="CCN3 (ISO 3166‑1 №)" value={country.ccn3} mono />
                                    <DetailRow label="CIOC (Olympic)" value={country.cioc || "N/A"} mono />
                                    <DetailRow label="FIFA Code" value={country.fifa || "N/A"} mono />
                                    <DetailRow label="Status" value={country.status} />
                                    <DetailRow label="Top Level Domain" value={country.tld?.join(", ")} mono />
                                    <DetailRow label="Dial Code (IDD)" value={idd} mono />
                                </div>
                            </SectionCard>
                        </motion.div>

                        {/* Time & Calendar */}
                        <motion.div variants={blockVariants}>
                            <SectionCard icon={Clock} title="Time & Calendar">
                                <div className="grid gap-0 sm:grid-cols-2">
                                    <DetailRow label="Timezones" value={country.timezones?.join(", ")} />
                                    <DetailRow label="Start of Week" value={country.startOfWeek ? country.startOfWeek.charAt(0).toUpperCase() + country.startOfWeek.slice(1) : "N/A"} />
                                </div>
                            </SectionCard>
                        </motion.div>

                        {/* Transport */}
                        <motion.div variants={blockVariants}>
                            <SectionCard icon={Car} title="Transport & Driving">
                                <div className="grid gap-0 sm:grid-cols-2">
                                    <DetailRow label="Driving Side" value={country.car?.side ? country.car.side.charAt(0).toUpperCase() + country.car.side.slice(1) : "N/A"} />
                                    <DetailRow label="Vehicle Signs" value={carSigns} />
                                </div>
                            </SectionCard>
                        </motion.div>

                        {/* Postal */}
                        <motion.div variants={blockVariants}>
                            <SectionCard icon={Mail} title="Postal Code">
                                <div className="grid gap-0 sm:grid-cols-2">
                                    <DetailRow label="Format" value={postalFormat} mono />
                                    <DetailRow label="Regex Pattern" value={postalRegex} mono />
                                </div>
                            </SectionCard>
                        </motion.div>

                        {/*Borders  */}
                        <motion.div variants={blockVariants}>
                            <SectionCard icon={Signpost} title="Borders">
                                {borders.length > 0 ? (
                                    <div className="flex flex-wrap gap-2">
                                        {borders.map((border) => (
                                            <button
                                                key={border}
                                                className="inline-flex items-center gap-1.5 rounded-xl border border-cyan-500/20 bg-cyan-400/5 px-3 py-1.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15 hover:border-cyan-400/40"
                                            >
                                                <Navigation size={12} /> {border}
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-slate-400">No land borders (Island / Coastal nation).</p>
                                )}
                            </SectionCard>
                        </motion.div>

                        {/* Alt Spellings */}
                        <motion.div variants={blockVariants}>
                            <SectionCard icon={BookOpen} title="Alternative Spellings">
                                <div className="flex flex-wrap gap-2">
                                    {country.altSpellings?.map((spelling, idx) => (
                                        <span key={idx} className="rounded-xl border border-slate-700/40 bg-slate-800/30 px-3 py-1.5 text-sm text-slate-200">
                                            {spelling}
                                        </span>
                                    )) || <p className="text-sm text-slate-400">N/A</p>}
                                </div>
                            </SectionCard>
                        </motion.div>
                        {/*Flag Description */}
                        {country.flags?.alt && (
                            <motion.div variants={blockVariants}>
                                <SectionCard icon={Flag} title="Flag Description">
                                    <p className="text-sm leading-relaxed text-slate-300">
                                        {country.flags.alt}
                                    </p>
                                </SectionCard>
                            </motion.div>
                        )}

                        {/*  Translations */}
                        {translationEntries.length > 0 && (() => {
                            const totalTransPages = Math.ceil(translationEntries.length / TRANSLATIONS_PER_PAGE);
                            const transStart = translationPage * TRANSLATIONS_PER_PAGE;
                            const transEnd = transStart + TRANSLATIONS_PER_PAGE;
                            const visibleTranslations = translationEntries.slice(transStart, transEnd);

                            const transPages = generatePagination(totalTransPages, translationPage);

                            return (
                                <motion.div variants={blockVariants} className="w-full">
                                    <SectionCard icon={Earth} title={`Translations (${translationEntries.length} languages)`}>
                                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                            {visibleTranslations.map(([code, trans]) => (
                                                <motion.div
                                                    key={code}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="rounded-3xl border border-slate-700/30 bg-slate-800/20 p-4 transition-colors hover:bg-slate-800/40"
                                                >
                                                    <p className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                                                        {LANG_CODE_MAP[code] || code}
                                                    </p>
                                                    <p className="text-sm text-white font-medium">{trans.official}</p>
                                                    {trans.common !== trans.official && (
                                                        <p className="text-xs text-slate-400 mt-0.5">{trans.common}</p>
                                                    )}
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Pagination Controls */}
                                        {totalTransPages > 1 && (
                                            <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                                                <motion.button
                                                    whileHover={{ scale: 1.03, x: -2 }}
                                                    whileTap={{ scale: 0.97 }}
                                                    onClick={() => setTranslationPage((prev) => prev - 1)}
                                                    disabled={translationPage === 0}
                                                    className="inline-flex items-center justify-center shrink-0 rounded-full border border-cyan-500/30 bg-slate-800/85 p-2.5 text-sm font-semibold text-cyan-200 backdrop-blur-md transition-colors hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-800/85"
                                                >
                                                    <ChevronLeft className="h-5 w-5" />
                                                </motion.button>

                                                <div className="flex items-center gap-1.5">
                                                    {transPages.map((page, index) => (
                                                        <button
                                                            key={index}
                                                            disabled={page === "..."}
                                                            className={`inline-flex items-center justify-center min-w-[2.25rem] rounded-full px-2.5 py-1.5 text-xs transition-colors ${page === "..." ? "bg-transparent cursor-default text-white/50 !min-w-0 !px-1" : translationPage === page ? 'bg-cyan-500/50 font-bold text-white' : 'border border-cyan-500/20 bg-slate-800/85 font-semibold text-cyan-100 backdrop-blur-md hover:bg-slate-700'}`}
                                                            onClick={() => page !== "..." && setTranslationPage(page)}
                                                        >
                                                            {page !== "..." ? page + 1 : '...'}
                                                        </button>
                                                    ))}
                                                </div>

                                                <motion.button
                                                    whileHover={{ scale: 1.03, x: 2 }}
                                                    whileTap={{ scale: 0.97 }}
                                                    onClick={() => setTranslationPage((prev) => prev + 1)}
                                                    disabled={translationPage === totalTransPages - 1}
                                                    className="inline-flex items-center justify-center shrink-0 rounded-full border border-cyan-500/30 bg-slate-800/85 p-2.5 text-sm font-semibold text-cyan-200 backdrop-blur-md transition-colors hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-800/85"
                                                >
                                                    <ChevronRight className="h-5 w-5" />
                                                </motion.button>
                                            </div>
                                        )}
                                    </SectionCard>
                                </motion.div>
                            );
                        })()}

                    </div>
                </div>
            </motion.article>
        </section>
    );
};