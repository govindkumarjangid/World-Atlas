import axios from "axios";
import toast from "react-hot-toast";

const apiKey = import.meta.env.VITE_COUNTRIES_API_KEY || "";

const axiosInstance = axios.create({
    baseURL: "/api",
    headers: {
        Authorization: `Bearer ${apiKey}`,
    }
});

// Helper function to map REST Countries v5 API response to the legacy v3.1 structure
const mapV5ToV3 = (v5) => {
    const currencies = {};
    if (Array.isArray(v5.currencies)) {
        v5.currencies.forEach(c => {
            if (c.code) {
                currencies[c.code] = { name: c.name || "", symbol: c.symbol || "" };
            }
        });
    }

    const languages = {};
    if (Array.isArray(v5.languages)) {
        v5.languages.forEach(l => {
            const code = l.iso639_3 || l.bcp47;
            if (code) {
                languages[code] = l.name || "";
            }
        });
    }

    const idd = { root: "", suffixes: [] };
    if (Array.isArray(v5.calling_codes) && v5.calling_codes.length > 0) {
        const first = v5.calling_codes[0];
        idd.root = first.startsWith("+") ? first : "+" + first;
        if (v5.calling_codes.length > 1) {
            idd.suffixes = v5.calling_codes.slice(1);
        } else {
            idd.suffixes = [""];
        }
    }

    return {
        name: {
            common: v5.names?.common || "",
            official: v5.names?.official || "",
            nativeName: v5.names?.native || {}
        },
        tld: v5.tlds || [],
        cca2: v5.codes?.alpha_2 || "",
        ccn3: v5.codes?.ccn3 || "",
        cca3: v5.codes?.alpha_3 || "",
        cioc: v5.codes?.cioc || "",
        fifa: v5.codes?.fifa || "",
        status: v5.classification?.iso_status || "",
        independent: typeof v5.classification?.sovereign === "boolean" ? v5.classification.sovereign : (v5.classification?.independent || false),
        unMember: v5.classification?.un_member || false,
        currencies,
        idd,
        capital: Array.isArray(v5.capitals) ? v5.capitals.map(c => c.name) : [],
        capitalInfo: {
            latlng: Array.isArray(v5.capitals) && v5.capitals.length > 0 && v5.capitals[0].coordinates
                ? [v5.capitals[0].coordinates.lat, v5.capitals[0].coordinates.lng]
                : []
        },
        altSpellings: v5.names?.alternates || [],
        region: v5.region || "",
        subregion: v5.subregion || "",
        languages,
        translations: v5.names?.translations || {},
        latlng: v5.coordinates ? [v5.coordinates.lat, v5.coordinates.lng] : [],
        landlocked: v5.landlocked || false,
        borders: v5.borders || [],
        area: v5.area?.kilometers || 0,
        demonyms: v5.demonyms || {},
        flag: v5.flag?.emoji || "",
        flags: {
            png: v5.flag?.url_png || "",
            svg: v5.flag?.url_svg || "",
            alt: v5.flag?.description || ""
        },
        car: {
            side: v5.cars?.driving_side || "N/A",
            signs: v5.cars?.signs || []
        },
        postalCode: v5.postal_code || {},
        maps: {
            googleMaps: v5.links?.google_maps || "",
            openStreetMaps: v5.links?.open_street_maps || ""
        },
        population: v5.population || 0,
        continents: v5.continents || [],
        timezones: v5.timezones || [],
        gini: v5.economy?.gini_coefficient || {}
    };
};

export const getCountryData = async () => {
    try {
        let allObjects = [];
        let offset = 0;
        let limit = 100;
        let hasMore = true;

        while (hasMore) {
            const response = await axiosInstance.get(`/countries/v5`, {
                params: {
                    limit,
                    offset,
                    response_fields: "names.common,flag.emoji,flag.url_png,flag.url_svg,flag.description,population,region,capitals"
                }
            });

            const data = response.data?.data;
            if (data && Array.isArray(data.objects)) {
                allObjects = allObjects.concat(data.objects);
                // Check if there are more
                hasMore = data.meta?.more && data.objects.length === limit;
                offset += limit;
            } else {
                hasMore = false;
            }
        }

        // Map the v5 objects to v3.1 structure
        const mappedData = allObjects.map(mapV5ToV3);
        console.log("Mapped Data:", mappedData); 
        toast.success("Country data fetched");
        return { data: mappedData };
    } catch (error) {
        console.error("API Error (All Countries):", error);
        toast.error("Failed to fetch country data. Please try again.");
        throw error;
    }
};

export const getCountryIndData = async (name) => {
    try {
        const response = await axiosInstance.get(
            `/countries/v5/names.common/${name}`
        );
        const data = response.data?.data;
        if (data && Array.isArray(data.objects) && data.objects.length > 0) {
            const mapped = mapV5ToV3(data.objects[0]);
            return { status: response.status, data: [mapped] };
        } else {
            throw new Error("Country not found");
        }
    } catch (error) {
        console.error(`API Error (${name}):`, error);
        toast.error(`Fail to fetch data for ${name}.`);
        throw error;
    }
};