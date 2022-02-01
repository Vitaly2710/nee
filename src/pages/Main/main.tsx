import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, addUserUrl, loginAdmin, loginUser } from "../../redux/userSlice";
import './index.css'


export default function Main() {

    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const [newUser,setNewUser] = useState('')
    const [foto,setFoto] = useState('')
    const dispatch = useDispatch()

   function logAdminorUser() {
       dispatch(loginUser(login))
       dispatch(loginAdmin(login))
       setLogin('')
   }
   function add () {
     dispatch(addUser(newUser));
     dispatch(addUserUrl(foto));
     setNewUser('');
     setFoto('')
     

   }
 return(
     <div className="wrapper">
         <h2 className="Autentification"> Авторизация</h2>
         <label> 
             <input type={"text"} placeholder={'Введите логин'} className={"login"} value={login} onChange={(e)=> setLogin( e.target.value)}/>
             Логин
         </label>
        <label> 
              <input type={"text"} placeholder={'Введите пароль'} className={'password'} value={password} onChange={(e)=>setPassword(e.target.value)}/>
              Пароль
        </label>

         <div className="button">
                <button onClick={logAdminorUser} className={'buttonAutoriz'}>Войти</button>
         </div>


         <div className="newUser">
             <label>
                 <h5>Добавление пользователя</h5>
                 <div className="inputNewUser">
                     <input type={'text'} placeholder={'Логин нового пользователя'} className={"newlogin"} value = {newUser} onChange={(e)=> setNewUser(e.target.value)}/>
                 </div>
                 <div className="inputNewUser">
                     <input type={'text'} placeholder={'url на фото пользлователя'} className={"newFoto"} value = {foto} onChange={(e)=> setFoto(e.target.value)}/>
                 </div>
                 
                 
             </label>
             <div className="wrapperToAdd">
                     <button onClick={add} className="buttonAdd" >Добавить пользователя</button>
                 </div>
            
         </div>

     </div>
 )
}