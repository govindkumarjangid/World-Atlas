import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Compass, ExternalLink, Globe, Landmark, Info, Mountain, Star } from 'lucide-react';
import wondersData from '../API/wondersData.json';

export const WonderDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const wonder = wondersData[parseInt(id, 10)];

    const { img, title, p1, p2, p3, p4, p5, visit } = wonder;

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mx-auto max-w-6xl p-0 sm:px-6 lg:px-8 sm:py-8 bg-slate-900 sm:bg-transparent min-h-[100dvh] sm:min-h-0"
        >
            <motion.button
                whileHover={{ scale: 1.03, x: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/')}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-800/85 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-md transition-colors hover:bg-slate-700 sm:left-6 sm:top-6 mt-5"
            >
                <ArrowLeft size={18} /> Back
            </motion.button>

            <div className="relative overflow-hidden sm:rounded-3xl border-0 sm:border border-slate-800 bg-slate-900/40 shadow-2xl backdrop-blur-xl min-h-[100dvh] sm:min-h-0">
                {/* Header Image Section */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative h-72 w-full sm:h-96 md:h-[450px]"
                >
                    <div className="absolute inset-0 bg-slate-950/20" />
                    <img
                        src={img}
                        alt={title}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6 sm:p-10">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <div className="mb-3 flex items-center gap-2 text-cyan-400">
                                <Star className="fill-cyan-400" size={18} />
                                <span className="text-sm font-semibold uppercase tracking-wider">New 7 Wonders of the World</span>
                            </div>
                            <h1 className="font-display text-4xl font-bold text-white text-shadow-xl sm:text-5xl md:text-6xl">
                                {title.replace(/^\d+\.\s*/, '').split('(')[0].trim()}
                            </h1>
                            <div className="mt-4 flex items-center gap-2 text-slate-300">
                                <MapPin size={18} className="text-cyan-500" />
                                <span className="text-lg font-medium">
                                    {title.includes('(') ? title.split('(')[1].replace(')', '') : 'Global Heritage'}
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="p-6 sm:p-10">
                    <div className="grid gap-10 lg:grid-cols-3">
                        {/* Left Column: Main Description & Timeline */}
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="lg:col-span-2 space-y-10"
                        >
                            <section>
                                <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
                                    <Info className="text-cyan-400" /> Historical Context
                                </h2>
                                <div className="prose prose-invert max-w-none text-slate-300">
                                    <p className="text-lg leading-relaxed">
                                        Recognized globally as a masterpiece of architecture and historical preservation, this wonder stands as a testament to the ingenuity of its creators. Visitors from all over the world travel to glimpse its sheer scale and breathtaking construction.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-white">
                                    <Landmark className="text-cyan-400" /> Key Features & Facts
                                </h2>
                                <ul className="grid gap-4 sm:grid-cols-2">
                                    {[p1, p2, p3, p4, p5].map((fact, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-4 rounded-3xl border border-slate-700/40 bg-slate-800/30 p-4 transition-colors hover:bg-slate-800/50"
                                        >
                                            <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                                                {index === 0 ? <Globe size={18} /> :
                                                    index === 1 ? <Calendar size={18} /> :
                                                        index === 2 ? <Mountain size={18} /> :
                                                            <Compass size={18} />}
                                            </span>
                                            <span className="text-slate-300 leading-relaxed">{fact}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </motion.div>

                        {/* Right Column: Quick Stats & Call to Action */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="space-y-6"
                        >
                            {/* Quick Stats Card */}
                            <div className="rounded-3xl border border-cyan-500/20 bg-cyan-950/10 p-6 shadow-inner">
                                <h3 className="mb-5 text-xl font-medium text-white">Quick Overview</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between border-b border-slate-700/50 pb-3">
                                        <span className="text-slate-400">Status</span>
                                        <span className="font-medium text-cyan-300">UNESCO Site</span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-700/50 pb-3">
                                        <span className="text-slate-400">Category</span>
                                        <span className="font-medium text-white">Historical Monument</span>
                                    </div>
                                    <div className="flex justify-between border-b border-slate-700/50 pb-3">
                                        <span className="text-slate-400">Recognition</span>
                                        <span className="font-medium text-white">New 7 Wonders</span>
                                    </div>
                                </div>
                            </div>

                            {/* External Links Card */}
                            <div className="rounded-3xl border border-slate-700/50 bg-slate-800/40 p-6">
                                <h3 className="mb-4 text-lg font-medium text-white">Learn More</h3>
                                <p className="mb-6 text-sm leading-relaxed text-slate-400">
                                    Dive deeper into the architectural brilliance, cultural impact, and hidden histories recorded on Wikipedia.
                                </p>
                                <motion.a
                                    href={visit}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.03, x: 2 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="group mt-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-800/85 px-6 py-3 text-sm font-semibold text-cyan-200 backdrop-blur-md transition-colors hover:bg-slate-700"
                                >
                                    Read Wikipedia Article
                                    <ExternalLink size={16} className="transition-transform group-hover:translate-x-1" />
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};
