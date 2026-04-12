import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
      hidden: { opacity: 0, y: 24, scale: 0.98 },
      show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.45, ease: 'easeOut' },
      },
};

export const WonderCard = ({ data, index }) => {
      const { img, title, p1, p2, p3, p4, p5 } = data;

      return (
            <motion.article
                  variants={cardVariants}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className='group overflow-hidden rounded-xl border border-white/10 bg-slate-900/65 shadow-lg backdrop-blur group-hover:bg-slate-900/80 transition-colors'
            >
                  <div className='relative overflow-hidden'>
                        <motion.img
                              src={img}
                              alt={title}
                              loading='lazy'
                              className='h-80 w-full object-cover group-hover:scale-105 transition-transform duration-300'
                        />
                        <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent px-4 py-3 text-sm font-semibold text-cyan-100'>
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
                              whileHover={{ scale: 1.03, x: 2 }}
                              whileTap={{ scale: 0.97 }}
                              className='mx-5 mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition-colors hover:bg-cyan-400/20'
                        >
                              Read More <ArrowRight size={16} />
                        </motion.button>
                  </NavLink>
            </motion.article>
      );
};
