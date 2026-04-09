import CountryData from "../API/CountryData.json";
import { motion } from "framer-motion";
import { TrendingUp, Landmark, Users, Coins, Languages } from "lucide-react";

export const About = () => {
    return <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="font-display text-4xl font-bold text-white sm:text-5xl"
            >
                World's Top 10 Economies
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="mt-4 text-lg text-slate-400"
            >
                Global Leaders by Nominal GDP and Economic Influence
            </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
                CountryData.map((CurElem, index) => {

                    const { id, countryName, capital, population, gdp, currency, language, interestingFact } = CurElem;

                    return <motion.article
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
                        className="group relative flex flex-col rounded-xl border border-cyan-500/20 bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-6 shadow-2xl backdrop-blur-md transition-all hover:-translate-y-1 hover:border-cyan-400/50 "
                        key={id}
                    >
                        <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-950/50 border border-cyan-400/30 text-cyan-300 font-bold font-display shadow-inner">
                            #{id}
                        </div>

                        <div className="mb-6 pr-12">
                            <h3 className="font-display text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">{countryName}</h3>
                            <p className="flex items-center gap-1.5 mt-1 text-sm font-medium text-cyan-400/80">
                                <Landmark size={14} className="text-cyan-500" /> {capital}
                            </p>
                        </div>

                        <div className="mt-2 flex-grow space-y-4 border-t border-slate-800/60 pt-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="flex items-center gap-1.5 text-xs text-slate-400"><TrendingUp size={14} className="text-emerald-400" /> Nominal GDP</p>
                                    <p className="mt-0.5 text-sm font-bold text-slate-100">{gdp}</p>
                                </div>
                                <div>
                                    <p className="flex items-center gap-1.5 text-xs text-slate-400"><Users size={14} className="text-amber-400" /> Population</p>
                                    <p className="mt-0.5 text-sm font-semibold text-slate-100">{population.toLocaleString()}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 border-t border-slate-800/40 pt-4">
                                <div>
                                    <p className="flex items-center gap-1.5 text-xs text-slate-400"><Coins size={14} className="text-yellow-400" /> Currency</p>
                                    <p className="mt-0.5 text-sm font-medium text-slate-200">{currency}</p>
                                </div>
                                <div>
                                    <p className="flex items-center gap-1.5 text-xs text-slate-400"><Languages size={14} className="text-purple-400" /> Language</p>
                                    <p className="mt-0.5 text-sm font-medium text-slate-200">{language}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 rounded-lg bg-slate-900/50 p-4 border border-white/5">
                            <p className="text-xs leading-relaxed text-slate-400 italic">"{interestingFact}"</p>
                        </div>
                    </motion.article>
                })
            }
        </div>
    </section>
}