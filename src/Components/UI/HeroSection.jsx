import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
    return <main className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-16">
        <div className="space-y-6">
            <p className="inline-flex rounded-xl border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Atlas Journey
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Explore the world, one country at a time.
            </h1>
            <p className="max-w-xl text-base text-slate-300 sm:text-lg">
                Discover history, culture, and geography in a sleek interface with real-time country data, quick search, and intuitive region filters.
            </p>
            <div>
                <NavLink to="/country">
                    <button className="mt-10 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-800/85 px-6 py-3 text-sm font-semibold text-cyan-200 backdrop-blur-md transition-colors hover:bg-slate-700">
                        Start Exploring <ArrowRight size={18} />
                    </button>
                </NavLink>
            </div>
        </div>
        <div className="relative flex items-center justify-center">
            <img
                src="/world1.png"
                alt="World Beauty"
                className="aspect-square w-full max-w-md rounded-full border-4 border-slate-500/60 object-cover shadow-2xl"
                fetchpriority="high"
                loading="eager"
            />
        </div>
    </main>
}