
import { ArrowDownAZ, ArrowUpAZ, Search, Map, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export const SearchFilter = (props) => {

    const { search, setSearch, filter, setFilter, countries, setCountries } = props;

    const [localSearch, setLocalSearch] = useState(search);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target))
                setIsDropdownOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearch(localSearch);
        }, 600);
        return () => clearTimeout(timer);
    }, [localSearch, setSearch]);

    const handleInputChange = (e) => {
        e.preventDefault();
        setLocalSearch(e.target.value);
    }

    const handleselectChange = (e) => {
        e.preventDefault();
        setFilter(e.target.value);

    }

    const sortCountries = (value) => {
        const sortCountry = [...countries].sort((a, b) => {
            return value === "asc" ? a.name.common.localeCompare(b.name.common) :
                b.name.common.localeCompare(a.name.common);
        });
        setCountries(sortCountry);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearch(localSearch);
        }, 600);
        return () => clearTimeout(timer);
    }, [localSearch]);


    return <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-20 mb-10 grid gap-6 rounded-3xl border border-cyan-500/20 bg-slate-900/60 p-5 shadow-lg backdrop-blur-xl md:grid-cols-[1fr_auto] md:items-center"
    >
        <div className="relative group">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500/70" />
            <input type="text"
                name="search"
                placeholder="Search country by name..."
                value={localSearch}
                onChange={handleInputChange}
                className="w-full rounded-2xl border border-slate-700/50 bg-slate-950/50 py-3 pl-11 pr-4 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-500 hover:border-slate-600 focus:border-cyan-400 focus:bg-slate-900/80 "
            />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex gap-2 rounded-2xl border border-slate-700/50 p-1 bg-slate-950/30">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-1.5 rounded-2xl border border-cyan-300/20 bg-cyan-400/5 px-4 py-2.5 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-400/20 hover:text-cyan-200"
                    onClick={() => sortCountries("asc")}
                >
                    <ArrowUpAZ size={16} /> A-Z
                </motion.button>
                <div className="w-px bg-slate-700/50 my-1" />
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-1.5 rounded-2xl border border-rose-300/20 bg-rose-400/5 px-4 py-2.5 text-sm font-medium text-rose-300 transition-colors hover:bg-rose-400/20 hover:text-rose-200"
                    onClick={() => sortCountries("des")}
                >
                    <ArrowDownAZ size={16} /> Z-A
                </motion.button>
            </div>

            <div className="relative group" ref={dropdownRef}>
                <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-500 group-focus-within:opacity-100" />
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex w-44 items-center justify-between rounded-2xl border border-slate-700/50 bg-slate-950/50 py-2.5 pl-3 pr-3 text-sm font-medium text-slate-200 outline-none transition-all hover:border-slate-600 focus:border-cyan-400 focus:bg-slate-900/80 cursor-pointer"
                >
                    <div className="flex items-center gap-2">
                        <Map size={16} className="text-cyan-500/70" />
                        <span>{filter === "all" ? "All Regions" : filter}</span>
                    </div>
                    <ChevronDown
                        size={16}
                        className={`text-cyan-500/70 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    />
                </button>

                <motion.div
                    initial="hidden"
                    animate={isDropdownOpen ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0, y: -10, scale: 0.95, pointerEvents: "none" },
                        visible: { opacity: 1, y: 0, scale: 1, pointerEvents: "auto", transition: { duration: 0.2 } },
                    }}
                    className="absolute right-0 top-full z-50 mt-2 w-full overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900 p-1 shadow-[0_10px_25px_rgba(0,0,0,0.5)] space-y-1"
                >
                    {[
                        { label: "All Regions", value: "all" },
                        { label: "Africa", value: "Africa" },
                        { label: "Americas", value: "Americas" },
                        { label: "Asia", value: "Asia" },
                        { label: "Europe", value: "Europe" },
                        { label: "Oceania", value: "Oceania" },
                    ].map((option) => (
                        <button
                            key={option.value}
                            onClick={() => {
                                setFilter(option.value);
                                setIsDropdownOpen(false);
                            }}
                            className={`block w-full px-4 py-2.5 text-left text-sm transition-colors rounded-2xl ${filter === option.value
                                    ? "bg-cyan-500/20 text-cyan-300 font-medium"
                                    : "text-slate-300 hover:bg-slate-800/80 hover:text-cyan-100"
                                }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </motion.div>
            </div>
        </div>

    </motion.section>
}