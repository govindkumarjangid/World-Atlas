import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export const CountryCard = ({ Country }) => {
    console.log(Country);

    const { flags, name, population, region, capital } = Country;

    return <li className="country-card card">
        <div className="container-card bg-white-box">
            <img src={flags.svg} alt={flags.alt} />

            <div className="countryinfo">
                <p className="card-title">
                    { 
                        name.common.length > 10 ? name.common.slice(0, 10) + "...." : name.common
                    }
                </p>
                <p className="card-description"><span>Population : </span>
                    {population.toLocaleString()}
                </p>
                <p className="card-description"><span>Region : </span>
                    {region}
                </p>
                <p className="card-description"><span>Capital : </span>
                    {capital[0]}
                </p>
                <NavLink to={`/country/${Country.name.common}`}>
                    <button>Read More <FaArrowRightLong /></button>
                </NavLink>

            </div>

        </div>

    </li>
}