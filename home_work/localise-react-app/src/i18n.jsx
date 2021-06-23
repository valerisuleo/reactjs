import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import languagedetector from "i18next-browser-languagedetector";
import en from "./locales/en/translation.json";

const options = {

    resources: {
        en: {
            common: en,
        },
    },
    // order and from where user language should be detected
    order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
    ],

    // keys or params to lookup language from
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    // cache user language on
    caches: ["localStorage", "cookie"],
    excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)
};

i18n.use(Backend)
    .use(languagedetector)
    .use(initReactI18next)
    .init(options);

export default i18n;
