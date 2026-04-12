import wondersData from '../../API/wondersData.json'
import { Landmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { WonderCard } from '../Layout/WonderCard';

const gridVariants = {
      hidden: {},
      show: {
            transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.05,
            },
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
                        <Landmark className='text-cyan-300 ' size={40} /> The Seven Wonders of the World
                  </motion.h2>
                  <motion.div
                        variants={gridVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                        className='grid gap-14 md:grid-cols-2 lg:gap-16 lg:px-10'
                  >
                        {
                              wondersData.map((data, index) => {
                                    return <WonderCard data={data} index={index} key={data.title} />
                              })
                        }
                  </motion.div>
            </section>
      )
}

export default Wonderspage