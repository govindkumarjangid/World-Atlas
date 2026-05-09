import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../API/postApi.jsx";
import { ChevronLeft, ChevronRight, Loader } from "lucide-react";
import { CountryCard } from "../Components/Layout/CountryCard.jsx";
import { SearchFilter } from "../Components/UI/SearchFilter.jsx";
import { motion } from "framer-motion";
import LoadingFallback from '../Components/UI/LoadingFallback.jsx'

export const Country = () => {

  const [isPending, startTrasition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(8);

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


  const generatePagination = (totalPages, currentPageIndex) => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 0; i < totalPages; i++) pages.push(i);
    } else if (currentPageIndex < 3) {
      pages.push(0, 1, 2, '...', totalPages - 3, totalPages - 2, totalPages - 1);
    } else if (currentPageIndex > totalPages - 4) {
      pages.push(0, 1, 2, '...', totalPages - 3, totalPages - 2, totalPages - 1);
    } else {
      pages.push(0, '...', currentPageIndex - 1, currentPageIndex, currentPageIndex + 1, '...', totalPages - 1);
    }
    return pages;
  }

  const pages = generatePagination(totalPages, currentPageIndex);


  const handleLeft = () => {
    setCurrentPageIndex((prev) => prev - 1);
  };

  const handleRight = () => {
    setCurrentPageIndex((prev) => prev + 1);
  };


  useEffect(() => {
    startTrasition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);


  if (isPending) return <LoadingFallback />;


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

      <div className="mb-6 flex justify-end">
        <label className="flex items-center gap-2 text-sm text-slate-300">
          Items per page:
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPageIndex(0);
            }}
            className="cursor-pointer rounded-lg border border-cyan-500/30 bg-slate-800/85 px-4 py-2 text-cyan-100 outline-none backdrop-blur-md transition-colors hover:border-cyan-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
          >
            <option value={8}>8</option>
            <option value={16}>16</option>
            <option value={24}>24</option>
            <option value={32}>32</option>
            <option value={filterCountries.length || 100}>All</option>
          </select>
        </label>
      </div>

      <motion.ul
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
        }}
        initial="hidden"
        animate="show"
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {filterCountries.slice(start, end).map((curCountry, index) => {
          return <CountryCard Country={curCountry} key={curCountry.name.common ?? index} />;
        })}
      </motion.ul>

      <div className="mt-14 mb-8 flex w-full max-w-3xl flex-col items-center justify-center gap-4 mx-auto sm:flex-row sm:flex-wrap sm:gap-5">
        <motion.button
          whileHover={{ scale: 1.03, x: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleLeft}
          disabled={currentPageIndex === 0}
          className="inline-flex items-center justify-center shrink-0 rounded-full border border-cyan-500/30 bg-slate-800/85 p-2.5 sm:p-5 text-sm font-semibold text-cyan-200 backdrop-blur-md transition-colors hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-800/85"
        >
          <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
        </motion.button>
        <div className="flex w-full max-w-full items-center justify-center gap-1.5 overflow-x-auto pb-2 sm:w-auto sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-2 sm:overflow-visible sm:pb-0">
          {
            pages.map((page, index) => (
              <button
                key={index}
                disabled={page === "..."}
                className={`inline-flex flex-none items-center justify-center min-w-[2.25rem] sm:min-w-[3rem] rounded-full px-2.5 py-2 sm:px-4 md:px-6 sm:py-3 text-xs sm:text-base transition-colors ${page === "..." ? "bg-transparent cursor-default text-white/50 !min-w-0 !px-1" : currentPageIndex === page ? 'bg-cyan-500/50 font-bold text-white shadow-[0_0_10px_rgba(34,211,238,0.4)]' : 'border border-cyan-500/20 bg-slate-800/85 font-semibold text-cyan-100 backdrop-blur-md hover:bg-slate-700'}`}
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
          className="inline-flex items-center justify-center shrink-0 rounded-full border border-cyan-500/30 bg-slate-800/85 p-2.5 sm:p-5 text-sm font-semibold text-cyan-200 backdrop-blur-md transition-colors hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-800/85"
        >
          <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
        </motion.button>
      </div>

    </section>
  );
};
