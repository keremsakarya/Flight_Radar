import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./slices/flight";

export default configureStore({
    reducer: {flightReducer},
})