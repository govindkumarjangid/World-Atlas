import axios from "axios";
import toast from "react-hot-toast";

const API = axios.create({
    baseURL: "https://restcountries.com/v3.1",
});

export const getCountryData = async () => {
    try {
        const response = await API.get(
            "/all?fields=name,population,region,subregion,capital,flags,continents,area,independent,unMember"
        );
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
            `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,capitalInfo,tld,currencies,languages,translations,borders,flags,flag,area,timezones,continents,maps,startOfWeek,idd,cca2,ccn3,cca3,cioc,independent,unMember,landlocked,latlng,altSpellings,demonyms,car,coatOfArms,status,fifa,postalCode,gini`
        );
        return response;
    } catch (error) {
        console.error(`API Error (${name}):`, error);
        toast.error(`Fail to fetch data for ${name}.`);
        throw error;
    }
};