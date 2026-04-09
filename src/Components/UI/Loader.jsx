import { Globe, LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Loader = () => {
    return <div className="flex min-h-[60vh] items-center justify-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 rounded-md border border-white/10 bg-slate-900/70 px-8 py-7 backdrop-blur"
        >
            <div className="relative">
                <Globe className="h-12 w-12 text-cyan-300" />
                <LoaderCircle className="absolute -right-2 -top-2 h-5 w-5 animate-spin text-cyan-100" />
            </div>
            <p className="text-sm font-medium tracking-wide text-slate-300">Loading countries...</p>
        </motion.div>
    </div>
}