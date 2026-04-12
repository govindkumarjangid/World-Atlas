import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../API/postApi.jsx";
import { Loader } from "../Components/UI/Loader";
import { CountryCard } from "../Components/Layout/CountryCard.jsx";
import { SearchFilter } from "../Components/UI/SearchFilter.jsx";
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const Country = () => {
  const [isPending, startTrasition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

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

  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterregion(country)
  );

  useEffect(() => {
    setVisibleCount(12);
  }, [search, filter]);

  useEffect(() => {
    startTrasition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  const displayedCountries = filterCountries.slice(0, visibleCount);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 8);
      setIsLoadingMore(false);
    }, 600);
  };

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
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mb-8 text-center text-sm text-slate-300 sm:text-base">
        Showing {displayedCountries.length} of {filterCountries.length} countries
        {filterCountries.length !== countries.length && (
          <span className="text-slate-400"> from {countries.length} total</span>
        )}
      </motion.p>
      <motion.ul
        variants={gridVariants}
        initial="hidden"
        animate="show"
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {displayedCountries.map((curCountry, index) => {
          return <CountryCard Country={curCountry} key={curCountry.name.common ?? index} />;
        })}
      </motion.ul>

      {visibleCount < filterCountries.length && (
        <div className="mt-14 mb-8 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.03, x: 2 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleLoadMore}
            disabled={isLoadingMore}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-800/85 px-6 py-3 text-sm font-semibold text-cyan-200 backdrop-blur-md transition-colors hover:bg-slate-700"
          >
            {isLoadingMore ? (
              <>
                <LoaderCircle className="h-5 w-5 animate-spin" /> Loading..
              </>
            ) : (
              "Load More"
            )}
          </motion.button>
        </div>
      )}
    </section>
  );
};
