import React from "react";
import './index.css';
import { useDispatch } from "react-redux";
import {backHomePage} from "../../redux/userSlice"



const Users = () => {

    const dispatch = useDispatch();
    
    function backHome() {
        dispatch(backHomePage)
    }

    return (
        <div>
            <div className="homePage" onClick = {backHome}> Home </div>
            <h2>Страница общения пользователя с ботом</h2>
            
        </div>
    )
}

export default Users