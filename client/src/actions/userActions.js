import axios from 'axios';
import { useNavigate } from 'react-router';
import { BACKEND_URL } from '../constants';
import Cookies from 'js-cookie'

axios.defaults.withCredentials=true;

export const registerUser= (user) => async dispatch => {
    dispatch({type:'USER_REGISTER'});
    try{
        const res= await axios.post(`${BACKEND_URL}/api/users/register`,user);
        console.log(res);
        dispatch({type:'USER_REGISTER_SUCCESS'});
    }
    catch(error){
        dispatch({type:'USER_REGISTER_ERROR',payload:error});
        throw error;
    }
}

export const loginUser= (user) => async dispatch => {
    // const navigate=useNavigate();
    dispatch({type:'USER_LOGIN'});
    try{
        const res= await axios.post(`${BACKEND_URL}/api/users/login`,user);
        console.log(res.data);
        dispatch({type:'USER_LOGIN_SUCCESS',payload:res.data});
        localStorage.setItem('currUser',JSON.stringify(res.data));
        // window.location.href='/';
        // navigate('/');
    }
    catch(error){
        console.log("*",error)
        dispatch({type:'USER_LOGIN_ERROR',payload:error});
        throw error;
    }
    
}

export const logoutUser= () => async dispatch => {
        dispatch({type:'USER_LOGOUT',payload:null});
        localStorage.removeItem('currUser');
        Cookies.remove('token');
        // window.location.href='/login';
}
