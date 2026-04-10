import wondersData from '../../API/wondersData.json'
import { NavLink } from 'react-router-dom';
import { ArrowRight, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const wondersGridVariants = {
      hidden: {},
      show: {
            transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.04,
            },
      },
};

const wonderCardVariants = {
      hidden: { opacity: 0, y: 24, scale: 0.98 },
      show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.45, ease: 'easeOut' },
      },
};

const Wonderspage = () => {
      return (
            <section className='mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8'>
                  <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className='mb-10 flex items-center justify-center gap-4 font-display text-2xl font-bold text-white sm:text-4xl'
                  >
                        <Landmark className='text-cyan-300 ' size={40}/> The Seven Wonders of the World
                  </motion.h2>
                  <motion.div
                        variants={wondersGridVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.15 }}
                        className='grid gap-14 md:grid-cols-2 lg:gap-16 lg:px-10'
                  >
                        {
                              wondersData.map((data, index) => {
                                    const { img, title, p1, p2, p3, p4, p5, visit } = data;

                                    return <motion.article
                                          variants={wonderCardVariants}
                                          whileHover={{ y: -6, scale: 1.02 }}
                                          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                                          className='group overflow-hidden rounded-xl border border-white/10 bg-slate-900/65 shadow-lg backdrop-blur will-change-transform'
                                          key={title}
                                    >
                                          <div className='relative overflow-hidden'>
                                                <motion.img
                                                      src={img}
                                                      alt={title}
                                                      loading="lazy"
                                                      className="h-80 w-full object-cover"
                                                      whileHover={{ scale: 1.06 }}
                                                      transition={{ duration: 0.35, ease: 'easeOut' }}
                                                />
                                                <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent px-4 py-3 text-sm font-semibold text-cyan-100'>
                                                      {title}
                                                </div>
                                          </div>
                                          <div className='space-y-2 p-5 text-sm text-slate-300'>
                                                <h3 className='font-display text-xl font-semibold text-white'>{title}</h3>
                                                <p>{p1}</p>
                                                <p>{p2}</p>
                                                <p>{p3}</p>
                                                <p>{p4}</p>
                                                <p>{p5}</p>
                                          </div>
                                          <NavLink to={`/wonders/${index}`}>
                                                <motion.button
                                                      whileHover={{ x: 3 }}
                                                      whileTap={{ scale: 0.98 }}
                                                      className='mx-5 mb-5 inline-flex items-center gap-2 rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition-all duration-150 active:scale-95 hover:bg-cyan-400/20'
                                                >
                                                      Read More <ArrowRight size={16} />
                                                </motion.button>
                                          </NavLink>
                                    </motion.article>
                              })
                        }
                  </motion.div>
            </section>
      )
}

export default Wonderspage