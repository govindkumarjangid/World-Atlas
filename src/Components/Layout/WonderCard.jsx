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

const containerVariants = {
      hidden: { opacity: 0 },
      show: {
            opacity: 1,
            transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
            }
      }
};

const itemVariants = {
      hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
      show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.5, ease: "easeOut" },
      },
}

export const WonderCard = ({ data, index, imagePosition = 'left' }) => {
      const { img, title, p1, p2, p3, p4, p5 } = data;

      const isImageLeft = imagePosition === 'left';

      return (
            <motion.article
                  initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { type: 'spring', stiffness: 80, damping: 15, mass: 0.8 } }}
                  viewport={{ once: false, amount: 0.15 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className={`group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/65 shadow-lg backdrop-blur hover:bg-slate-900/80 transition-colors flex flex-col cursor-pointer ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
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
                        <motion.div
                              initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
                              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                              className='absolute inset-x-0 -bottom-2 backdrop-blur-sm px-4 py-3 text-sm font-semibold text-cyan-100'>
                              {title}
                        </motion.div>
                  </div>
                  <div className='flex flex-col justify-between lg:w-1/2 p-5'>
                        <motion.div
                              variants={containerVariants}
                              initial="hidden"
                              whileInView="show"
                              viewport={{ once: false, amount: 0.2 }}
                              className='space-y-2 text-sm text-slate-300'>
                              <motion.h3 variants={itemVariants} className='font-display text-base font-semibold text-white'>{title}</motion.h3>
                              <motion.p variants={itemVariants} className="text-xs">{p1}</motion.p>
                              <motion.p variants={itemVariants} className="text-xs">{p2}</motion.p>
                              <motion.p variants={itemVariants} className="text-xs">{p3}</motion.p>
                              <motion.p variants={itemVariants} className="text-xs">{p4}</motion.p>
                              <motion.p variants={itemVariants} className="text-xs">{p5}</motion.p>
                        </motion.div>
                        <div className='mt-4'>
                              <NavLink to={`/wonders/${index}`}>
                                    <motion.button
                                          whileHover={{ scale: 1.02, x: 2 }}
                                          whileTap={{ scale: 0.97 }}
                                          className='inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-200 transition-colors hover:bg-cyan-400/20'
                                    >
                                          {title} <ArrowRight size={16} aria-hidden="true" />
                                    </motion.button>
                              </NavLink>
                        </div>
                  </div>
            </motion.article>
      );
};
