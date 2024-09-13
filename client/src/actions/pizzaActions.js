import axios from 'axios';
import { BACKEND_URL } from '../constants';

export const getAllPizza = () => async dispatch =>{
    dispatch({type:'GET_PIZZAS'});
    try{
        const res= await axios.get(`${BACKEND_URL}/api/pizzas/getPizzas`);
        console.log(res);
        dispatch({type:'GET_PIZZA_SUCCESS', payload : res.data});
    }
    catch(error){
        dispatch({type:'GET_PIZZA_ERROR',payload:error});

    }
}