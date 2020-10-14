import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "pages/SearchPage/searchPageSlice";

const rootReducer = combineReducers({
    quotes: searchReducer,
});

export default rootReducer;