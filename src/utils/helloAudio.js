const HELLO_AUDIO_MAP = {
    Arabic: { hello: "Marhaban", lang: "ar-SA" },
    Bengali: { hello: "Nomoskar", lang: "bn-BD" },
    Chinese: { hello: "Ni hao", lang: "zh-CN" },
    Dutch: { hello: "Hallo", lang: "nl-NL" },
    English: { hello: "Hello", lang: "en-US" },
    French: { hello: "Bonjour", lang: "fr-FR" },
    German: { hello: "Hallo", lang: "de-DE" },
    Greek: { hello: "Yassas", lang: "el-GR" },
    Hindi: { hello: "Namaste", lang: "hi-IN" },
    Indonesian: { hello: "Halo", lang: "id-ID" },
    Italian: { hello: "Ciao", lang: "it-IT" },
    Japanese: { hello: "Konnichiwa", lang: "ja-JP" },
    Korean: { hello: "Annyeonghaseyo", lang: "ko-KR" },
    Persian: { hello: "Salaam", lang: "fa-IR" },
    Polish: { hello: "Czesc", lang: "pl-PL" },
    Portuguese: { hello: "Ola", lang: "pt-PT" },
    Punjabi: { hello: "Sat Sri Akal", lang: "pa-IN" },
    Russian: { hello: "Privet", lang: "ru-RU" },
    Spanish: { hello: "Hola", lang: "es-ES" },
    Swedish: { hello: "Hej", lang: "sv-SE" },
    Tamil: { hello: "Vanakkam", lang: "ta-IN" },
    Thai: { hello: "Sawasdee", lang: "th-TH" },
    Turkish: { hello: "Merhaba", lang: "tr-TR" },
    Ukrainian: { hello: "Pryvit", lang: "uk-UA" },
    Urdu: { hello: "Assalamualaikum", lang: "ur-PK" },
    Vietnamese: { hello: "Xin chao", lang: "vi-VN" },
};

export const getHelloAudioList = (country) => {
    const languageValues = country?.languages ? Object.values(country.languages) : [];
    return languageValues.slice(0, 3).map((languageName) => {
        const matched = HELLO_AUDIO_MAP[languageName];
        return {
            language: languageName,
            hello: matched?.hello || "Hello",
            lang: matched?.lang || "en-US",
        };
    });
};
