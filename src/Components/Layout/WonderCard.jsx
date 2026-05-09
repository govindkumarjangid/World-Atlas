import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const getOptimizedSrc = (src, width = 600) => {
      const trimmed = src.trim();
      if (trimmed.includes('pexels.com')) {
            const url = new URL(trimmed);
            url.searchParams.set('auto', 'compress');
            url.searchParams.set('cs', 'tinysrgb');
            url.searchParams.set('w', String(width));
            return url.toString();
      }
      return trimmed;
};

export const WonderCard = ({ data, index, imagePosition = 'left' }) => {
      const { img, title, p1, p2, p3, p4, p5 } = data;

      const isImageLeft = imagePosition === 'left';

      return (
            <motion.article
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15, mass: 0.8 } }}
                  viewport={{ once: true, amount: 0.15 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className={`group overflow-hidden rounded-xl border border-white/10 bg-slate-900/65 shadow-lg backdrop-blur hover:bg-slate-900/80 transition-colors flex flex-col cursor-pointer ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
                  <div className='relative overflow-hidden lg:w-1/2 shrink-0'>
                        <motion.img
                              src={getOptimizedSrc(img)}
                              alt={title}
                              width={600}
                              height={400}
                              loading='lazy'
                              decoding='async'
                              className='h-full min-h-[16rem] w-full min-w-[10rem] object-cover group-hover:scale-105 transition-transform duration-300'
                        />
                        <div className='absolute inset-x-0 -bottom-2 backdrop-blur-sm px-4 py-3 text-sm font-semibold text-cyan-100'>
                              {title}
                        </div>
                  </div>
                  <div className='flex flex-col justify-between lg:w-1/2 p-5'>
                        <div className='space-y-2 text-sm text-slate-300'>
                              <h3 className='font-display text-base font-semibold text-white'>{title}</h3>
                              <p className="text-xs" >{p1}</p>
                              <p className="text-xs">{p2}</p>
                              <p className="text-xs">{p3}</p>
                              <p className="text-xs">{p4}</p>
                              <p className="text-xs">{p5}</p>
                        </div>
                        <div className='mt-4'>
                              <NavLink to={`/wonders/${index}`}>
                                    <motion.button
                                          whileHover={{ scale: 1.03 }}
                                          whileTap={{ scale: 0.97 }}
                                          className='inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition-colors hover:bg-cyan-400/20'
                                    >
                                          Explore {title} <ArrowRight size={16} aria-hidden="true" />
                                    </motion.button>
                              </NavLink>
                        </div>
                  </div>
            </motion.article>
      );
};
