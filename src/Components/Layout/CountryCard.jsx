import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const CountryCard = ({ Country }) => {
    const { flags, name, population, region, capital } = Country;

    return <motion.li
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35 }}
        className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/65 shadow-lg backdrop-blur"
    >
        <img
            src={flags.svg}
            alt={flags.alt || name.common}
            className="h-44 w-full object-cover"
            loading="lazy"
        />
        <div className="space-y-2 p-5">
            <p className="font-display text-xl font-semibold text-white">
                {name.common.length > 18 ? `${name.common.slice(0, 18)}...` : name.common}
            </p>
            <p className="text-sm text-slate-300"><span className="font-semibold text-slate-100">Population:</span> {population.toLocaleString()}</p>
            <p className="text-sm text-slate-300"><span className="font-semibold text-slate-100">Region:</span> {region}</p>
            <p className="text-sm text-slate-300"><span className="font-semibold text-slate-100">Capital:</span> {capital?.[0] || "N/A"}</p>
            <NavLink to={`/country/${Country.name.common}`}>
                <motion.button
                    whileHover={{ x: 3 }}
                    className="mt-3 inline-flex items-center gap-2 rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition-all duration-150 active:scale-95 hover:bg-cyan-400/20"
                >
                    Read More <ArrowRight size={16} />
                </motion.button>
            </NavLink>
        </div>
    </motion.li>
}