import { configureStore } from "@reduxjs/toolkit";
import { homeSlice } from "./homeSlice";
export const store=configure({
    reducer:{
        home:homeSlice
    },
})