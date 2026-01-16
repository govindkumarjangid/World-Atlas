import CountryData from "../API/CountryData.json";

export const About = () => {
    return <section className="section-about container">
        <h2 className="container-title">
            Here are the Intersting facts <br />
            we're proud of
        </h2>
        <div className="gradient-cards">
            {
                CountryData.map((CurElem) => {

                    const { id, countryName, capital, population, interestingFact } = CurElem;

                    // console.log(CurElem);
                    return <div className="card" key={id}>
                        <div className="container-card bg-blue-box">
                            <p className="card-title">{countryName}</p>
                            <p><span className="card-description">Capital : </span>{capital}</p>
                            <p><span className="card-description">Population : </span>{population}</p>
                            <p><span className="card-description">InterstingFact : </span>{interestingFact}</p>
                        </div>
                    </div>
                })
            }
        </div>
    </section>
}