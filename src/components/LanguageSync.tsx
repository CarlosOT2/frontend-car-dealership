//# Libs //
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GetParams from "../shared/utils/GetParams";

export default function LanguageSync() {
    const location = useLocation();
    const { i18n } = useTranslation();

    const ln = GetParams(location.pathname)[0]
    if (ln && i18n.language !== ln) {
        i18n.changeLanguage(ln)
        document.documentElement.lang = ln
    }

    return (
        <>
        </>
    )
}