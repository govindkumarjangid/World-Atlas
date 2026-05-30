import wondersData from '../../API/wondersData.json'
import { Landmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { WonderCard } from '../Layout/WonderCard';
import { useRef, useState, useEffect } from 'react';

const Wonderspage = () => {
      const containerRef = useRef(null);
      const lastCardRef = useRef(null);
      const [lastCardHeight, setLastCardHeight] = useState(0);

      useEffect(() => {
            if (!lastCardRef.current) return;
            const observer = new ResizeObserver((entries) => {
                  setLastCardHeight(entries[0].target.offsetHeight);
            });
            observer.observe(lastCardRef.current);
            return () => observer.disconnect();
      }, []);

      return (
            <section className='mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8'>
                  <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className='my-10 flex items-center flex-col text-center justify-center gap-4 font-display text-2xl font-bold text-white sm:text-4xl'
                  >
                        <Landmark className='text-cyan-300 ' size={50} /> The Seven Wonders of the World
                  </motion.h2>

                  <div ref={containerRef} className='relative mx-auto mt-16 max-w-7xl'>
                        {/* Timeline Center Line */}
                        <div
                              className='absolute md:block hidden left-[17px] top-[42px] z-0 w-0.5 -translate-x-1/2 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] md:left-1/2'
                              style={{ bottom: `${lastCardHeight > 42 ? lastCardHeight - 42 : 0}px` }}
                        />
                        <div className="space-y-16 md:space-y-24 w-full">
                              {
                                    wondersData.map((data, index) => {
                                          const isEven = index % 2 === 0;
                                          const isLast = index === wondersData.length - 1;
                                          return (
                                                <div key={data.title} ref={isLast ? lastCardRef : null} className={`relative flex items-start w-full ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                                      {/* Timeline Dot */}
                                                      <div className='absolute md:block hidden left-[17px] top-8 z-10 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)] md:left-1/2' />

                                                      {/* horizontal line */}
                                                      <div className={`hidden absolute top-10 w-[10%] h-0.5 bg-cyan-400 md:block ${isEven ? 'right-[50%] md:right-[50%]' : 'left-[50%] md:left-[50%]'}`} />

                                                      {/* Empty space */}
                                                      <div className='hidden w-1/2 md:block' />

                                                      {/* Card Container */}
                                                      <div className={`w-full md:w-1/2 md:pl-0 ${isEven ? 'md:pr-12 lg:pr-14' : 'md:pl-12 lg:pl-14'}`}>
                                                            <WonderCard
                                                                  data={data}
                                                                  index={index}
                                                                  imagePosition={isEven ? 'left' : 'right'}
                                                            />
                                                      </div>
                                                </div>
                                          )
                                    })
                              }
                        </div>
                  </div>
            </section>
      )
}

export default Wonderspage