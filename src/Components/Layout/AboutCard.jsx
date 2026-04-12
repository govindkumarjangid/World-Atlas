import { motion } from "framer-motion";
import { TrendingUp, Landmark, Users, Coins, Languages } from "lucide-react";

const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

export const AboutCard = ({ data }) => {
    const { id, countryName, capital, population, gdp, currency, language, interestingFact } = data;

    return (
        <motion.article
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="group relative flex flex-col rounded-xl border border-cyan-500/20 bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-6 shadow-2xl backdrop-blur-md hover:border-cyan-400/50"
        >
            <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-950/50 font-display font-bold text-cyan-300 shadow-inner">
                #{id}
            </div>

            <div className="mb-6 pr-12">
                <h3 className="font-display text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">{countryName}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-cyan-400/80">
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

            <div className="mt-6 rounded-xl border border-white/5 bg-slate-900/50 p-4">
                <p className="text-xs italic leading-relaxed text-slate-400">"{interestingFact}"</p>
            </div>
        </motion.article>
    );
};
