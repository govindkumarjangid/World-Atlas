import { useNavigate, useRouteError } from "react-router-dom"
import { motion } from "framer-motion";
import { AlertOctagon, RotateCcw, Home } from "lucide-react";

export const Errorpage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <section className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 py-20 text-center sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 p-10  backdrop-blur-2xl"
            >
                {/* Decorative background glow */}
                <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[100px]" />

                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative z-10 mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 "
                >
                    <AlertOctagon size={48} strokeWidth={1.5} />
                </motion.div>

                <div className="relative z-10 space-y-4">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="font-display text-7xl font-extrabold tracking-tight text-white sm:text-8xl md:text-9xl drop-shadow-lg"
                    >
                        4<span className="text-cyan-400">0</span>4
                    </motion.h1>

                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-2xl font-bold tracking-wide text-slate-200 sm:text-3xl"
                    >
                        Route Not Found
                    </motion.h2>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mx-auto max-w-md text-base leading-relaxed text-slate-400"
                    >
                        {error?.data || "The destination you're looking for doesn't exist on our map. It might have been moved, renamed, or evaporated into cyberspace."}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="relative z-10 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <button
                        onClick={() => navigate(-1)}
                        className="group flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:bg-slate-700 hover:text-white sm:w-auto"
                    >
                        <RotateCcw size={18} className="transition-transform group-hover:-rotate-180" />
                        Go Back
                    </button>
                    <button
                        onClick={() => navigate('/')}
                        className="group flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/50 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-300 transition-all hover:bg-cyan-500/20 sm:w-auto"
                    >
                        <Home size={18} className="transition-transform group-hover:scale-110" />
                        Return Home
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}