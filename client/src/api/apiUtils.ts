import { AxiosError, AxiosResponse } from "axios";

export const handleSuccess = (response: AxiosResponse) => {
    return response.data
}

export const handleError = (
    error: AxiosError,
    rejectWithValue: (value: any) => any
) => {
    if (error.toString() === "Cancel") {
        throw error;
    }

    if (error.response) {
        console.log("Data", error.response.data)
        console.log("Status", error.response.status)
        console.log("Headers", error.response.headers)
    } else if (error.request) {
        console.log("Request", error.request)
        return rejectWithValue({
            error_description: "No response was received for this request",
        })
    }

    console.log("Error", error.message);
    return rejectWithValue({ error_description: error.message })
}