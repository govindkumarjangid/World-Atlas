import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";


export const Header = () => {
    const [show, setShow] = useState(false);

    const handleButtonToggle = () => {
        return setShow(!show);
    }

    const navLinkClasses = ({ isActive }) =>
        `relative py-2 px-1 text-md font-semibold tracking-wide transition-colors duration-300 ${isActive
            ? "text-cyan-400 after:w-full"
            : "text-slate-300 hover:text-cyan-300 after:w-0"
        } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full`;

    return <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1 sm:px-6 lg:px-8 relative z-50">
            <div>
                <NavLink to="/" className="font-display text-2xl font-bold tracking-wide text-white">
                    <img src="logo.svg" alt="logo-image" className="h-16 w-16" />
                </NavLink>
            </div>
            <nav className="hidden md:block">
                <ul className="flex items-center gap-6">
                    <li><NavLink to="/" className={navLinkClasses}>Home</NavLink></li>
                    <li><NavLink to="/about" className={navLinkClasses}>About</NavLink></li>
                    <li><NavLink to="/country" className={navLinkClasses}>Country</NavLink></li>
                    <li><NavLink to="/map" className={navLinkClasses}>Live Map</NavLink></li>
                    <li><NavLink to="/contact" className={navLinkClasses}>Contact</NavLink></li>
                </ul>
            </nav>
            <button
                className="inline-flex items-center justify-center text-slate-100 md:hidden  hover:text-cyan-400"
                onClick={handleButtonToggle}
                aria-label="Toggle Menu"
            >
                {show ? <X size={22} className="text-cyan-400" /> : <Menu size={22} />}
            </button>
        </div>
        <AnimatePresence>
            {show && (
                <motion.nav
                    initial={{ opacity: 0, y: -20, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -20, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute top-full left-0 w-full border-t border-white/10 bg-[#0C1325] overflow-hidden md:hidden shadow-2xl rounded-b-xl z-40"
                >
                    <ul className="flex flex-col gap-6 px-6 border-b border-t border-white/5 py-8">
                        <li><NavLink to="/" className={navLinkClasses} onClick={() => setShow(false)}>Home</NavLink></li>
                        <li><NavLink to="/about" className={navLinkClasses} onClick={() => setShow(false)}>About</NavLink></li>
                        <li><NavLink to="/country" className={navLinkClasses} onClick={() => setShow(false)}>Country</NavLink></li>
                        <li><NavLink to="/map" className={navLinkClasses} onClick={() => setShow(false)}>Live Map</NavLink></li>
                        <li><NavLink to="/contact" className={navLinkClasses} onClick={() => setShow(false)}>Contact</NavLink></li>
                    </ul>
                </motion.nav>
            )}
        </AnimatePresence>
    </header>
}