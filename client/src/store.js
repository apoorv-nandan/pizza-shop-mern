import { combineReducers } from "redux";
import { createStore,applyMiddleware,compose } from "redux";
import {thunk} from 'redux-thunk';
import { getAllPizzaReducer } from "./reducers/pizzaReducer";
import { cartReducer } from "./reducers/cartReducer";
import { userReducer,loginReducer } from "./reducers/userReducer";
import { getOrderReducer,placeOrderReducer } from './reducers/orderReducer'

const finalReducer=combineReducers({
    getAllPizzaReducer,cartReducer,userReducer,loginReducer,getOrderReducer,placeOrderReducer});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const middleware =[thunk];
const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const currUser = localStorage.getItem('currUser') ? JSON.parse(localStorage.getItem('currUser')) :null;

const initialState = {
    cartReducer:{
        cartItems:cart
    },
    loginReducer:{
        currentUser:currUser
    },
    getOrderReducer:{
        orders:[]
    }
};
const store = createStore(finalReducer,initialState,applyMiddleware(thunk));

export default store;