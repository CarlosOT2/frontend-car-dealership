/**
 * Splits a pathname into its segments.
 * @param pathname - The pathname to split (e.g. "/pt/search")
 * @returns An array of pathname segments (e.g. ["pt", "search"])
 */
export default function GetParams(pathname: string) {
    return pathname.replace(/^\/+/, '').split('/')
}