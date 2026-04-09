import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const HeroSection = () => {
    return <main className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-16">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
        >
            <p className="inline-flex rounded-md border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Atlas Journey
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Explore the world, one country at a time.
            </h1>
            <p className="max-w-xl text-base text-slate-300 sm:text-lg">
                Discover history, culture, and geography in a sleek interface with real-time country data, quick search, and intuitive region filters.
            </p>
            <NavLink to="/country">
                <button

                    className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition-all duration-150 hover:bg-cyan-300 mt-10 hover:scale-105 active:scale-95 "
                >
                    Start Exploring <ArrowRight size={18} />
                </button>
            </NavLink>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
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