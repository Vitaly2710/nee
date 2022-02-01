import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import admin from "../pages/admin/admin";

interface typeOfState {
    login: any,
    passwordadmin: string,
    passwordUser: string,
    user: string,
    autification: boolean
}

const initialState: typeOfState = {
    login: ["admin",'user'],
    passwordadmin: 'admin',
    passwordUser: 'user',
    user: '',
    autification: false
}

export const user = createSlice({
    name: 'users',
    initialState,
    reducers: {
        log:(state, action:PayloadAction<string>) => {
            console.log(action)
            if(state.login.includes(action.payload) == true && state.passwordadmin == action.payload) {
                state.autification = true
            }

}
    }
})

export const {log} = user.actions;

export const selectName = (state: RootState) => state.reducers.login;
export const selectAutetific = (state: RootState) => state.reducers.autification;

export default user.reducer;

