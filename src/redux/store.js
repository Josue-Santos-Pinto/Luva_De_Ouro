import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeReducer";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer
    }
})