import axios from "axios";
import search_api from "./apiClient";

const ALL_QUOTES_URL = "/quotes"

export const getAllQuotes = (signal: AbortSignal) => {
    const source = axios.CancelToken.source();
    signal.addEventListener("abort", () => source.cancel());

    return search_api.get(ALL_QUOTES_URL, {
        params: {
            limit: 300
        },
        cancelToken: source.token,
    })
}