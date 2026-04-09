import wondersData from '../../API/wondersData.json'
import { NavLink } from 'react-router-dom';
import { ArrowRight, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const Wonderspage = () => {
      return (
            <section className='mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8'>
                  <motion.h2
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.45 }}
                        className='mb-10 flex items-center justify-center gap-4 font-display text-2xl font-bold text-white sm:text-4xl'
                  >
                        <Landmark className='text-cyan-300 ' size={40}/> The Seven Wonders of the World
                  </motion.h2>
                  <div className='grid gap-14 md:grid-cols-2 lg:gap-16 lg:px-10'>
                        {
                              wondersData.map((data, index) => {
                                    const { img, title, p1, p2, p3, p4, p5, visit } = data;

                                    return <motion.article
                                          initial={{ opacity: 0, y: 26 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: true, amount: 0.2 }}
                                          transition={{ delay: index * 0.06, duration: 0.4 }}
                                          className='group overflow-hidden rounded-md border border-white/15 bg-slate-900/65 shadow-xl backdrop-blur'
                                          key={title}
                                    >
                                          <div className='relative overflow-hidden'>
                                                <img src={img} alt={title} loading="lazy" className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
                                                      className='mx-5 mb-5 inline-flex items-center gap-2 rounded-md border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition-all duration-150 active:scale-95 hover:bg-cyan-400/20'
                                                >
                                                      Read More <ArrowRight size={16} />
                                                </motion.button>
                                          </NavLink>
                                    </motion.article>
                              })
                        }
                  </div>
            </section>
      )
}

export default Wonderspage