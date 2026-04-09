import axios from "axios";
import toast from "react-hot-toast";

const API = axios.create({
    baseURL: "https://restcountries.com/v3.1",
});

export const getCountryData = async () => {
    try {
        const response = await API.get("/all?fields=name,population,region,capital,flags");
        toast.success("Country data loaded successfully!");
        return response;
    } catch (error) {
        console.error("API Error (All Countries):", error);
        toast.error("Failed to fetch country data. Please try again.");
        throw error;
    }
};

export const getCountryIndData = async (name) => {
    try {
        const response = await API.get(
            `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags,area,timezones,continents,maps,startOfWeek,idd,cca2,cca3,independent,unMember,landlocked,latlng,altSpellings,demonyms,car,coatOfArms`
        );
        toast.success(`${name} details loaded successfully!`);
        return response;
    } catch (error) {
        console.error(`API Error (${name}):`, error);
        toast.error(`Fail to fetch data for ${name}.`);
        throw error;
    }
};