import axios from 'axios';
import { BACKEND_URL } from '../constants';
// import { clearCart } from './cartActions';

export const placeOrder =(total) => async (dispatch,getState) => {

    dispatch({type:'ADD_ORDER'});
    const user = getState().loginReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems;
    const date = new Date().toLocaleDateString();
    // console.log(JSON.stringify({user,cartItems,total}));
    try{
        const res= await axios.post(`${BACKEND_URL}/api/orders/placeOrder`,{user,total,cartItems});
        console.log(res);
        dispatch({type:'ADD_ORDER_SUCCESS',payload:cartItems});
        // dispatch(clearCart());
    }
    catch(error){
        dispatch({type:'ADD_ORDER_ERROR',payload:error});
    }
    

    // const cartlocal= getState().cartReducer.cartItems;
    // localStorage.setItem('cart',JSON.stringify(cartlocal));
}

export const getOrders = (userid) => async dispatch =>{
    dispatch({type:'GET_ORDERS'});
    try{
        const res= await axios.post(`${BACKEND_URL}/api/orders/getOrders`,{userid});
        console.log(res.data);
        dispatch({type:'GET_ORDERS_SUCCESS', payload : res.data});
    }
    catch(error){
        dispatch({type:'GET_ORDERS_ERROR',payload:error});

    }
}