import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const HeroSection = () => {
    return <main className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-16">
        <div className="space-y-6">
            <motion.p
                initial={{ y: 10, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="inline-flex rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Atlas Journey
            </motion.p>
            <motion.h1
                initial={{ y: 18, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Explore the world, one country at a time.
            </motion.h1>
            <motion.p
                initial={{ y: 18, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                className="max-w-xl text-base text-slate-300 sm:text-lg">
                Discover history, culture, and geography in a sleek interface with real-time country data, quick search, and intuitive region filters.
            </motion.p>
            <motion.div
                initial={{ y: 18, scale: 0.9, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, scale: 1, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
                className="w-fit mt-10"
            >
                <NavLink to="/country">
                    <motion.button
                        whileHover={{ scale: 1.03, x: 2 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-800/85 px-6 py-3 text-sm font-semibold text-cyan-200 backdrop-blur-md transition-colors hover:bg-slate-700">
                        Start Exploring <ArrowRight size={18} />
                    </motion.button>
                </NavLink>
            </motion.div>
        </div>
        <div className="relative flex items-center justify-center">
            <motion.img
                initial={{ scale: 0.95, opacity: 0, filter: "blur(4px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
                src="/world1.png"
                alt="World Atlas Explorer — interactive globe showing countries and continents"
                width={448}
                height={448}
                className="aspect-square w-full max-w-md rounded-full border-4 border-slate-500/60 object-cover shadow-2xl"
                fetchpriority="high"
                decoding="async"
            />
        </div>
    </main>
}