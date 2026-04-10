import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../API/postApi.jsx";
import { Loader } from "../Components/UI/Loader";
import { CountryCard } from "../Components/Layout/CountryCard.jsx";
import { SearchFilter } from "../Components/UI/SearchFilter.jsx";
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";

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
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {displayedCountries.map((curCountry, index) => {
          return <CountryCard Country={curCountry} key={index} />;
        })}
      </ul>

      {visibleCount < filterCountries.length && (
        <div className="mt-14 mb-8 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLoadMore}
            disabled={isLoadingMore}
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/40 bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-80"
          >
            {isLoadingMore ? (
              <>
                <LoaderCircle className="h-5 w-5 animate-spin" /> Loading
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
