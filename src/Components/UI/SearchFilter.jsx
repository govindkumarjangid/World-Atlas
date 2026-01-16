
export const SearchFilter = (props) => {

    const { search, setSearch, filter, setFilter, countries, setCountries } = props;

    const handleInputChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
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

    return <section className="section-searchfilter container">
        <div className="search-first">
            <input type="text"
                name="search"
                placeholder="Search"
                value={search}
                onChange={handleInputChange}
                className="search-input"
            />
        </div>
        <div className="search-second">
            <button className="btn search-btn" onClick={() => sortCountries("asc")}>Asc</button>
            <button className="btn search-btn" onClick={() => sortCountries("des")}>Des</button>
            <select className="select-options" value={filter} onChange={handleselectChange}>
                <option value="all" >All</option>
                <option value="Africa" >Africa</option>
                <option value="Americas" >Americas</option>
                <option value="Asia" >Asia</option>
                <option value="Europe" >Europe</option>
                <option value="Oceania" >Oceania</option>
            </select>
        </div>

    </section>
}