import axios from "axios";

const apiConfig = {
    baseURL: "http://localhost:9000/api",
    timeout: 10_000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
}

export default axios.create(apiConfig)