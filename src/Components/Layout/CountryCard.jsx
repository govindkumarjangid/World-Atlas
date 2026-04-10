import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.45, ease: "easeOut" },
    },
};

export const CountryCard = ({ Country }) => {
    const { flags, name, population, region, capital } = Country;

    return <motion.li
        variants={cardVariants}
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/65 shadow-lg backdrop-blur will-change-transform"
    >
        <motion.img
            src={flags.svg || flags.png}
            alt={flags.alt || name.common}
            className="h-44 w-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
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