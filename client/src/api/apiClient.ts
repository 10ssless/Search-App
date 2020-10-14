import axios from "axios";

const apiConfig = {
    baseURL: "http://quote-garden.herokuapp.com/api/v2",
    timeout: 10_000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
}

export default axios.create(apiConfig)