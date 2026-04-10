import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import GlobeComponent from "../Components/Layout/GlobeComponent";

const MapPage = () => {
    return (
        <>
            <motion.section
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mx-auto w-full  max-w-7xl px-3 pt-4 sm:px-4 lg:px-6"
            >
                <div className="my-5 flex items-center gap-2">
                    <Globe2 className="h-7 w-7 text-cyan-400" />
                    <h1 className="font-display text-2xl font-bold text-white sm:text-3xl">Live HD World Map</h1>
                </div>

                <div className="relative h-[80vh] min-h-[280px] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 p-2 shadow-2xl backdrop-blur-md sm:h-[50vh] lg:h-[90vh] mb-10">
                    <iframe
                        src="https://maps.google.com/maps?t=k&q=world&ie=UTF8&iwloc=&output=embed&z=2"
                        width="100%"
                        height="100%"
                        className="h-full w-full rounded-xl border-none"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Live HD World Map"
                    />
                </div>
            </motion.section>

            <GlobeComponent />
        </>
    );
};

export default MapPage;
