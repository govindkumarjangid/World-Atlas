import CountryData from "../API/CountryData.json";
import { motion } from "framer-motion";
import { AboutCard } from "../Components/Layout/AboutCard";

const gridVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
};

export const About = () => {

    return <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
                World's Top 10 Economies
            </h2>
            <p className="mt-4 text-lg text-slate-400">
                Global Leaders by Nominal GDP and Economic Influence
            </p>
        </div>

        <motion.div
            variants={gridVariants}
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