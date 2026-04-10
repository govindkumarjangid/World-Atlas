import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const heroContentVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.08,
        },
    },
};

const heroItemVariants = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

const heroImageVariants = {
    hidden: { opacity: 0, scale: 0.94, y: 18 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 },
    },
};

export const HeroSection = () => {
    return <main className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-16">
        <motion.div
            variants={heroContentVariants}
            initial="hidden"
            animate="show"
            className="space-y-6"
        >
            <motion.p variants={heroItemVariants} className="inline-flex rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Atlas Journey
            </motion.p>
            <motion.h1 variants={heroItemVariants} className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Explore the world, one country at a time.
            </motion.h1>
            <motion.p variants={heroItemVariants} className="max-w-xl text-base text-slate-300 sm:text-lg">
                Discover history, culture, and geography in a sleek interface with real-time country data, quick search, and intuitive region filters.
            </motion.p>
            <motion.div variants={heroItemVariants}>
                <NavLink to="/country">
                    <motion.button
                        whileHover={{ scale: 1.04, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 320, damping: 22 }}
                        className="mt-10 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition-all duration-150 hover:bg-cyan-300"
                    >
                        Start Exploring <ArrowRight size={18} />
                    </motion.button>
                </NavLink>
            </motion.div>
        </motion.div>
        <motion.div
            variants={heroImageVariants}
            initial="hidden"
            animate="show"
            className="relative flex items-center justify-center"
        >
            <img
                src="/world1.png"
                alt="World Beauty"
                className="aspect-square w-full max-w-md rounded-full border-4 border-slate-500/60 object-cover shadow-2xl"
            />
        </motion.div>
    </main>
}