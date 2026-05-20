import { useEffect, useState, useTransition, useRef } from "react";
import { getCountryData } from "../API/postApi.jsx";
import { ChevronLeft, ChevronRight, Loader, List, ChevronDown } from "lucide-react";
import { CountryCard } from "../Components/Layout/CountryCard.jsx";
import { SearchFilter } from "../Components/UI/SearchFilter.jsx";
import { motion } from "framer-motion";
import { CountryPageSkeleton } from '../Components/UI/Skeletons.jsx'
import { generatePagination } from '../utils/generatePagination.js'

export const Country = () => {

  const [isPending, startTrasition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(8);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchCountry = (country) => {
    if (search) {
      return country.name.common
        .toLowerCase()
        .includes(search.toLocaleLowerCase());
    }
    return country;
  };
  const filterregion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const filterCountries = countries.filter((country) => searchCountry(country) && filterregion(country));


  const totalPages = Math.ceil(filterCountries.length / pageSize);
  const start = currentPageIndex * pageSize;
  const end = start + pageSize;

  const pages = generatePagination(totalPages, currentPageIndex);


  const handleLeft = () => {
    setCurrentPageIndex((prev) => prev - 1);
  };

  const handleRight = () => {
    setCurrentPageIndex((prev) => prev + 1);
  };

  console.log(totalPages)


  useEffect(() => {
    startTrasition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);


  if (isPending) return <CountryPageSkeleton />;


  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8 text-center font-display text-3xl font-bold text-white sm:text-4xl"
      >
        Our Countries In The World
      </motion.h1>

      <div className="relative z-10 mb-6 flex justify-end">
        <div className="flex items-center gap-3 text-sm text-slate-300">
          <span>Items per page:</span>
          <div className="relative group" ref={dropdownRef}>
            <div className="absolute inset-x-0 -bottom-px h-1 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-500 group-focus-within:opacity-100" />
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-slate-800/85 py-2 pl-3 pr-2 text-cyan-100 outline-none backdrop-blur-md transition-colors hover:border-cyan-400 focus:border-cyan-400"
            >
              <List size={16} className="text-cyan-500/70" />
              <span className="w-8 text-left">{pageSize === filterCountries.length || pageSize >= 100 ? "All" : pageSize}</span>
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
              className="absolute right-0 top-full z-50 mt-2 w-32 overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900/95 shadow-[0_10px_25px_rgba(0,0,0,0.5)] backdrop-blur-xl p-1 space-y-1 z-130"
            >
              {[8, 16, 24, 32, { label: "All", value: filterCountries.length || 100 }].map((option) => {
                const optValue = typeof option === "object" ? option.value : option;
                const optLabel = typeof option === "object" ? option.label : option;
                const isActive = pageSize === optValue;

                return (
                  <button
                    key={optLabel}
                    onClick={() => {
                      setPageSize(optValue);
                      setCurrentPageIndex(0);
                      setIsDropdownOpen(false);
                    }}
                    className={`block w-full px-4 py-2.5 text-left text-sm transition-colors rounded-xl ${isActive
                      ? "bg-cyan-500/20 text-cyan-300 font-medium"
                      : "text-slate-300 hover:bg-slate-800/80 hover:text-cyan-100"
                      }`}
                  >
                    {optLabel}
                  </button>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.ul
        key={`${currentPageIndex}-${search}-${filter}`}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
        }}
        initial="hidden"
        animate="show"
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {filterCountries.slice(start, end).map((curCountry, index) => {
          return <CountryCard Country={curCountry} key={curCountry.name.common ?? index} />;
        })}
      </motion.ul>


      {
        filterCountries.length !== 0 && (
          <div className="mt-14 mb-8 flex w-full max-w-3xl flex-col items-center justify-center gap-4 mx-auto sm:flex-row sm:flex-wrap sm:gap-5">
            <motion.button
              whileHover={{ scale: 1.03, x: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleLeft}
              disabled={currentPageIndex === 0}
              className="inline-flex items-center justify-center shrink-0 rounded-full border border-cyan-500/30 bg-slate-800/85 p-2.5 text-sm font-semibold text-cyan-200 backdrop-blur-md transition-colors hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-800/85"
            >
              <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
            </motion.button>
            <div className="flex w-full max-w-full items-center justify-center gap-1.5 overflow-x-auto pb-2 sm:w-auto sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-2 sm:overflow-visible sm:pb-0">
              {
                pages.map((page, index) => (
                  <button
                    key={index}
                    disabled={page === "..."}
                    className={`inline-flex items-center justify-center min-w-[2.25rem] rounded-full px-2.5 py-1.5 text-xs transition-colors ${page === "..." ? "bg-transparent cursor-default text-white/50 !min-w-0 !px-1" : currentPageIndex === page ? 'bg-cyan-500/50 font-bold text-white' : 'border border-cyan-500/20 bg-slate-800/85 font-semibold text-cyan-100 backdrop-blur-md hover:bg-slate-700'}`}
                    onClick={() => page !== "..." && setCurrentPageIndex(page)}
                  >
                    {page !== "..." ? page + 1 : '...'}
                  </button>
                ))
              }
            </div>
            <motion.button
              whileHover={{ scale: 1.03, x: 2 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleRight}
              disabled={currentPageIndex === totalPages - 1}
              className="inline-flex items-center justify-center shrink-0 rounded-full border border-cyan-500/30 bg-slate-800/85 p-2.5 text-sm font-semibold text-cyan-200 backdrop-blur-md transition-colors hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-800/85"
            >
              <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
            </motion.button>
          </div>
        )
      }

    </section>
  );
};
