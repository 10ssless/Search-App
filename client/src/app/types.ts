import { Quotes } from "pages/SearchPage/types"

export type Loading = "idle" | "pending" | "succeeded" | "failed"

export type AppError = {
    title: string;
    detail: string;
}

export type ApplicationState = {
    quotes: {
        loading: Loading;
        data: Quotes;
        error: AppError;
    };
};