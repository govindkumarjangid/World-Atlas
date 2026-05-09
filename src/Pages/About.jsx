import CountryData from "../API/CountryData.json";
import { motion } from "framer-motion";
import { AboutCard } from "../Components/Layout/AboutCard";

export const About = () => {

    return <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
            viewport={{ once: true, amount: 0.1 }}
            className="mb-14 text-center">
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
                World's Top 10 Economies
            </h2>
            <p className="mt-4 text-lg text-slate-400">
                Global Leaders by Nominal GDP and Economic Influence
            </p>
        </motion.div>

        <motion.div
            variants={{
                hidden: {},
                show: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.05, }
                },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
            {
                CountryData.map((CurElem) => {
                    return <AboutCard data={CurElem} key={CurElem.id} />
                })
            }
        </motion.div>
    </section>
}