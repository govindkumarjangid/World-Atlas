import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

const MapPage = () => {
      return (
            <motion.section 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 min-h-[85vh] flex flex-col"
            >
                  <div className="mb-8 flex items-center gap-3">
                        <Globe2 className="h-8 w-8 text-cyan-400 animate-spin-slow" />
                        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">Live World Map</h1>
                  </div>
                  
                  <div className="relative w-full flex-grow rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-md p-2">
                        {/* Using Google Maps Embed for High Quality Satellite View */}
                        <iframe 
                              src="https://maps.google.com/maps?t=k&q=world&ie=UTF8&iwloc=&output=embed&z=3" 
                              width="100%" 
                              height="100%" 
                              className="rounded-xl min-h-[600px] border-none"
                              allowFullScreen="" 
                              loading="lazy" 
                              referrerPolicy="no-referrer-when-downgrade"
                              title="Live HD World Map"
                        ></iframe>
                  </div>
            </motion.section>
      );
};

export default MapPage;
