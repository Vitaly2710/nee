import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import Main from "../pages/Main/main";

interface typeOfState {
    login: any,
    passwordadmin: string,
    passwordUser: string,
    userUrl: any
    autification: 'idle' | 'administrator' | 'users'
}

const initialState: typeOfState = {
    login: ["admin",'user'],
    passwordadmin: 'admin',
    passwordUser: 'user',
    userUrl: ['https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-x750.jpg','https://img3.akspic.ru/previews/4/1/7/6/6/166714/166714-nacionalnyj_park_banf-morennoe_ozero-luk_ozero-ozero_agnes-mount_norquay-x750.jpg'], 
    autification: "idle",
}

export const user = createSlice({
    name: 'users',
    initialState,
    reducers: {
        loginAdmin:(state, action:PayloadAction<string>) => {
            console.log(action)
            if(state.login.includes(action.payload) == true && state.passwordadmin == action.payload) {
                state.autification = 'administrator'
            }

        }, 
        loginUser: (state, action: PayloadAction<string>)=>{
            console.log(action)
            if(state.login.includes(action.payload) == true) {
                state.autification = "users"
        }
        
    },
        addUser: (state, action:PayloadAction<string> ) => {
            state.login.push(action.payload)
        },

        addUserUrl: (state, action:PayloadAction<string> ) => {
            state.userUrl.push(action.payload)
        },

        backHomePage: (state) => {
            state.autification = 'idle'
        }
}})

export const {loginAdmin, loginUser,addUser,addUserUrl,backHomePage} = user.actions;

export const selectLogin = (state: RootState) => state.reducers.login;
export const selectAutetific = (state: RootState) => state.reducers.autification;

export default user.reducer;

