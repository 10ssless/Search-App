import axios from "axios";
import search_api from "./apiClient";

const ALL_QUOTES_URL = "/quotes"
const ALL_GENRES_URL = "/genres"

export const getAllQuotes = (signal: AbortSignal) => {
    const source = axios.CancelToken.source();
    signal.addEventListener("abort", () => source.cancel());

    return search_api.get(ALL_QUOTES_URL, {
        params: {
            limit: 100
        },
        cancelToken: source.token,
    })
}

export const getAllGenres = (signal: AbortSignal) => {
    const source = axios.CancelToken.source();
    signal.addEventListener("abort", () => source.cancel());

    return search_api.get(ALL_GENRES_URL, {
        cancelToken: source.token,

    })
}
