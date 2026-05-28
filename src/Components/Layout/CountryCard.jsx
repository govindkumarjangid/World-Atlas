import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98, filter: "blur(5px)" },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export const CountryCard = ({ Country }) => {
    const { flags, name, population, region, capital } = Country;

    return <motion.li
        variants={cardVariants}
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/65 shadow-lg backdrop-blur will-change-transform group"
    >
        <img
            src={flags.svg || flags.png}
            alt={flags.alt || name.common}
            width={320}
            height={176}
            className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            decoding="async"
        />
        <div className="space-y-2 p-5 flex flex-col">
            <motion.p variants={itemVariants} className="font-display text-xl font-semibold text-white">
                {name.common.length > 18 ? `${name.common.slice(0, 18)}...` : name.common}
            </motion.p>
            <motion.p variants={itemVariants} className="text-sm text-slate-300"><span className="font-semibold text-slate-100">Population:</span> {population.toLocaleString()}</motion.p>
            <motion.p variants={itemVariants} className="text-sm text-slate-300"><span className="font-semibold text-slate-100">Region:</span> {region}</motion.p>
            <motion.p variants={itemVariants} className="text-sm text-slate-300"><span className="font-semibold text-slate-100">Capital:</span> {capital?.[0] || "N/A"}</motion.p>
            <motion.div variants={itemVariants}>
                <NavLink to={`/country/${Country.name.common}`} className="block">
                    <motion.button
                        whileHover={{ scale: 1.03, x: 2 }}
                        whileTap={{ scale: 0.97 }}
                        className="mt-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-800/85 px-4 py-2 text-xs font-semibold text-cyan-200 backdrop-blur-md transition-colors hover:bg-slate-700"
                    >
                        Explore {name.common} <ArrowRight size={16} aria-hidden="true" />
                    </motion.button>
                </NavLink>
            </motion.div>
        </div>
    </motion.li>
}