
import { ArrowDownAZ, ArrowUpAZ, Search, Map, AlignLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const SearchFilter = (props) => {

    const { search, setSearch, filter, setFilter, countries, setCountries } = props;

    const [localSearch, setLocalSearch] = useState(search);

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
        className="mb-10 grid gap-6 rounded-xl border border-cyan-500/20 bg-slate-900/60 p-5 shadow-lg backdrop-blur-xl md:grid-cols-[1fr_auto] md:items-center"
    >
        <div className="relative group">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500/70" />
            <input type="text"
                name="search"
                placeholder="Search country by name..."
                value={localSearch}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-slate-700/50 bg-slate-950/50 py-3 pl-11 pr-4 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-500 hover:border-slate-600 focus:border-cyan-400 focus:bg-slate-900/80 "
            />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex gap-2 rounded-xl border border-slate-700/50 p-1 bg-slate-950/30">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-cyan-300/20 bg-cyan-400/5 px-4 py-2.5 text-sm font-medium text-cyan-300 transition-colors hover:bg-cyan-400/20 hover:text-cyan-200"
                    onClick={() => sortCountries("asc")}
                >
                    <ArrowUpAZ size={16} /> A-Z
                </motion.button>
                <div className="w-px bg-slate-700/50 my-1" />
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-rose-300/20 bg-rose-400/5 px-4 py-2.5 text-sm font-medium text-rose-300 transition-colors hover:bg-rose-400/20 hover:text-rose-200"
                    onClick={() => sortCountries("des")}
                >
                    <ArrowDownAZ size={16} /> Z-A
                </motion.button>
            </div>

            <div className="relative group">
                <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-500 group-focus-within:opacity-100" />
                <Map size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-cyan-500/70" />
                <select className="appearance-none rounded-xl border border-slate-700/50 bg-slate-950/50 py-2.5 pl-10 pr-10 text-sm font-medium text-slate-200 outline-none transition-all hover:border-slate-600 focus:border-cyan-400 focus:bg-slate-900/80 cursor-pointer" value={filter} onChange={handleselectChange}>
                    <option value="all" className="bg-slate-950/50 active:bg-cyan-400">All Regions</option>
                    <option value="Africa" className="bg-slate-950/50">Africa</option>
                    <option value="Americas" className="bg-slate-950/50">Americas</option>
                    <option value="Asia" className="bg-slate-950/50">Asia</option>
                    <option value="Europe" className="bg-slate-950/50">Europe</option>
                    <option value="Oceania" className="bg-slate-950/50 ">Oceania</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-cyan-500/70">
                    <AlignLeft size={16} />
                </div>
            </div>
        </div>

    </motion.section>
}