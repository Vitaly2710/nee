import React from "react";
import './index.css'
import { useAppSelector } from "../../app/hooks";


export const Admin = () => {
    const nameUser = useAppSelector(state => state.reducers.login);
    const userImage = useAppSelector (state => state.reducers.userUrl);
    console.log(nameUser,userImage)

    return (
        <div className="wrapperInAdmin">
            <h1> Страница Администратора</h1>
            <h5 className="listUsers"> Список пользователей</h5>
            <ul className="userList">
                {
                    nameUser.map((elem:any) => <li key ={elem.id}>{elem} </li>)
                }
            </ul>
            <div className="listFotoUsers">
                <h5 className="listFoto">Фото пользователей</h5>
                {
                    userImage.map((elem:any) => <img src ={elem} key ={elem.id} alt = "нет фото"/>)
                }
            </div>
        </div>
    )
}