/**
 * Returns the default language based on the browser's language.
 * Falls back to "en" if the language is not supported.
 * @returns The default language code (e.g. "pt", "en")
 */
export default function GetDefaultLn() {
    const DefaultLn = navigator.language.toLowerCase()

    if (DefaultLn.startsWith("pt")) {
        return "pt"
    } else if (DefaultLn.startsWith("en")) {
        return "en"
    } else {
        return "en"
    }
}
