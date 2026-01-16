
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../API/postApi";
import { Loader } from "../UI/loader";
import { useEffect, useState, useTransition } from "react";

export const CountryDetails = () => {

    const params = useParams();

    const [isPending, startTrasition] = useTransition();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        startTrasition(async () => {
            const res = await getCountryIndData(params.id);
            console.log(res);
            if (res.status === 200) {
                setCountry(res.data[0]);
            }
        })
    }, [params.id]);

    if (isPending) return <Loader />

    console.log(country);



    return <section className="country-details-card container">
        <div className="container-card bg-white-box">

            {
                country && (
                    <div className="country-image grid grid-two-cols">
                        <img src={country.flags?.png} alt={country.flags?.alt} className="flag" />
                        <div className="country-content">
                            <p className="card-title">
                                {country.name?.official}
                            </p>
                            <div className="infoContainer">
                                <p>
                                    <span className="card-description">Native Name : </span>{
                                        Object.keys(country.name.nativeName).map((keys) => country.name.nativeName[keys].common).join(", ")
                                    }
                                </p>
                                <p>
                                    <span className="card-description">population : </span>
                                    {country.population?.toLocaleString()}
                                </p>
                                <p>
                                    <span className="card-description">Sub Region : </span>
                                    {country.subregion}
                                </p>
                                <p>
                                    <span className="card-description">Capital : </span>
                                    {country.capital}
                                </p>
                                <p>
                                    <span className="card-description">Top Level Domain : </span>
                                    {country.tld[0]}
                                </p>
                                <p>
                                    <span className="card-description">Currencies : </span>
                                    {Object.keys(country.currencies).map((curElem) => country.currencies[curElem].name).join(", ")}
                                </p>
                                <p>
                                    <span className="card-description">Languages : </span>
                                    {Object.keys(country.languages).map((curElem) => country.languages[curElem]).join(", ")}
                                </p>

                            </div>
                        </div>

                        <NavLink to="/country">
                            <button className="goback-btn">Go Back</button>
                        </NavLink>

                    </div>
                )
            }

        </div>
    </section>
}