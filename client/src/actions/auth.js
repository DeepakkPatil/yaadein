import { AUTH } from '../constants/actionTypes';

import * as api  from '../api/index.js' 
import {toast} from 'react-toastify'

export const signin=(formData,history)=> async (dispatch)=>{

try {
    
    const { data }= await api.signin(formData) ;
    toast('🦄 Successfully Logged in!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
    dispatch({ type: AUTH , data}) ;
    history('/');
} catch (error) {
    console.log(error)
}

}

export const signup=(formData,history)=> async (dispatch)=>{

try {
    
   const { data }= await api.singup(formData) ;
    toast('🦄 SignUp successfull!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
    dispatch({ type: AUTH , data}) ;
    history('/');
} catch (error) {
    console.log(error)
}

}
