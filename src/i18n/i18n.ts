import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import EN from "./en.json"
import ID from "./id.json"

// the translations
const resources = {
    en: { translation: EN },
    id: { translation: ID },
}

i18n.use(initReactI18next).init({
        resources: resources,
        fallbackLng: "en",
        debug: false,
        interpolation: {
            escapeValue: false
        }
    })

export default i18n
