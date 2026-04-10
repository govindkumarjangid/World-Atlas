import FooterData from "../../API/Footerapi.json";
import { Mail, MapPin, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Footer = () => {
    const footerIcon = {
        MdOutlinePlace: <MapPin className="h-5 w-5" />,
        IoCallSharp: <Phone className="h-5 w-5" />,
        TbMailPlus: <Mail className="h-5 w-5" />
    }

    return <footer className="mt-20 border-t border-white/10 bg-slate-950/70 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
                {
                    FooterData.map((CurElem, index) => {
                        const { icon, title, deatils } = CurElem;

                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ delay: index * 0.1, duration: 0.35 }}
                                className="rounded-xl border border-cyan-300/20 bg-slate-900/60 p-4"
                                key={index}
                            >
                                <div className="mb-2 inline-flex rounded-xl bg-cyan-400/15 p-2 text-cyan-300">
                                    {footerIcon[icon]}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-cyan-200">{title}</p>
                                    <p className="text-sm text-slate-300">{deatils}</p>
                                </div>
                            </motion.div>
                        )
                    })
                }
        </div>

        <div className="border-t border-white/10">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-sm text-slate-400 sm:px-6 md:flex-row lg:px-8">
                <p>
                    Copyright &copy; 2026. Built for explorers.
                    <NavLink to="/" className="ml-2 font-semibold text-cyan-300 hover:text-cyan-200">
                        World Atlas
                    </NavLink>
                </p>
                <ul className="flex items-center gap-4">
                    <li><NavLink to="/" className="hover:text-cyan-200">Home</NavLink></li>
                    <li><NavLink to="/about" className="hover:text-cyan-200">About</NavLink></li>
                    <li><NavLink to="/country" className="hover:text-cyan-200">Country</NavLink></li>
                    <li><NavLink to="/contact" className="hover:text-cyan-200">Contact</NavLink></li>
                </ul>
            </div>
        </div>
    </footer>
}