import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../API/postApi.jsx";
import { Loader } from "../Components/UI/loader";
import { CountryCard } from "../Components/Layout/CountryCard.jsx";
import { SearchFilter } from "../Components/UI/SearchFilter.jsx";

export const Country = () => {
  const [isPending, startTrasition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
   
  // console.log(search, filter);
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
    startTrasition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  return (
    <section className="country-section container">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <h1 className="country-title">Our Contries In The World</h1>
      <ul className="grid grid-four-cols country-section-grid">
        {filterCountries.map((curCountry, index) => {
          return <CountryCard Country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};
