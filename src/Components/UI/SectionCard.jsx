import { motion } from "framer-motion";

const blockVariants = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
    },
};

export const SectionCard = ({ icon: Icon, title, children, className = "" }) => (
    <motion.div
        variants={blockVariants}
        className={`rounded-2xl border border-slate-700/40 bg-slate-800/20 p-5 sm:p-6 backdrop-blur-sm ${className}`}
    >
        <h3 className="mb-4 flex items-center gap-2.5 text-lg font-bold text-white">
            {Icon && <Icon size={20} className="text-cyan-400 shrink-0" />}
            {title}
        </h3>
        {children}
    </motion.div>
);
