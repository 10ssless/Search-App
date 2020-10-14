import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleError, handleSuccess } from "api/apiUtils";

import { ApplicationState } from "app/types";
import { getAllQuotes, getAllGenres } from "api/searchApi";
import initialState from "app/intialState";
import { checkForActionError, createNewAppError } from "app/helpers";

export const getAllQuotesAction = createAsyncThunk(
    "quotes/retrieveAllQuotes",
    async (_, { rejectWithValue, signal }) => {
        try {
            const response = await getAllQuotes(signal);
            return handleSuccess(response)
        } catch (error) {
            return handleError(error, rejectWithValue)
        }
    }
)

// export const getAllGenresAction = createAsyncThunk(
//     "quotes/retrieveAllGenres",
//     async (_, { rejectWithValue, signal }) => {
//         try {
//             const response = await getAllGenres(signal);
//             return handleSuccess(response)
//         } catch (error) {
//             return handleError(error, rejectWithValue)
//         }
//     }
// )

export const searchSlice = createSlice({
    name: "quotes",
    initialState: initialState.quotes,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllQuotesAction.pending, (state) => {
            state.loading = "pending";
            state.data = [];
            state.error = createNewAppError();
        });
        builder.addCase(getAllQuotesAction.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.data = action.payload.quotes; // TODO: double check response structure
        });
        builder.addCase(getAllQuotesAction.rejected, (state, action) => {
            state.loading = "failed";
            const actionError = checkForActionError(action)
            if (actionError) {
                state.error = actionError
            }
        })

    }
})

export const selectAllQuotesData = (state: ApplicationState) => {
    return state.quotes.data
}
export const selectAllQuotesLoading = (state: ApplicationState) => {
    return state.quotes.loading
}
export const selectAllQuotesError = (state: ApplicationState) => {
    return state.quotes.error
}

export default searchSlice.reducer;