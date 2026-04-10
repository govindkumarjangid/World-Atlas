import { LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Loader = () => {
    return <div className="flex min-h-[60vh] items-center justify-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-slate-900/70 px-8 py-7 backdrop-blur"
        >
            <LoaderCircle className="h-10 w-10 animate-spin text-cyan-300" />

            <p className="text-sm font-medium tracking-wide text-slate-300">Loading countries...</p>
        </motion.div>
    </div>
}