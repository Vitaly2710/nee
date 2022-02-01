import * as React from "react";
import {configureStore} from "@reduxjs/toolkit";
import {user} from "../redux/userSlice";

export const store = configureStore({
    reducer: {
        reducers: user.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;