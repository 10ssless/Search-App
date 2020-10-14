import { AppError } from "./types"

export const createNewAppError = (): AppError => {
    return { title: "", detail: "" }
}

export const checkForActionError = (action: AppError | any) => {
    if (!action.payload) {
        return {
            title: "Unknown Error",
            detail: "An unexpected error occured while processing your request."
        }
    }
    const error = action.payload as AppError
    if (error.title !== undefined && error.detail !== undefined) {
        return {
            title: error.title,
            detail: error.detail
        }
    }
}