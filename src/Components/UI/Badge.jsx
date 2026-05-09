import { motion } from "framer-motion";

export const Badge = ({ children, color = "cyan" }) => {
    const colors = {
        cyan: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
        emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
        rose: "border-rose-400/20 bg-rose-400/10 text-rose-300",
        amber: "border-amber-400/20 bg-amber-400/10 text-amber-300",
        purple: "border-purple-400/20 bg-purple-400/10 text-purple-300",
        slate: "border-slate-600 bg-slate-800 text-slate-300",
    };
    return (
        <motion.span
            whileHover={{ y: -2, scale: 1.03 }}
            className={`inline-flex items-center rounded-xl border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${colors[color]}`}
        >
            {children}
        </motion.span>
    );
};
