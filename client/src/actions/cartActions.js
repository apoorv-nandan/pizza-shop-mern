export const addToCart =(pizza, quantity, size) => (dispatch,getState) => {

    var cartItem = {
        name : pizza.name,
        _id : pizza._id,
        image : pizza.image,
        size :size,
        quantity :Number(quantity),
        prices : pizza.prices,
        price : pizza.prices[0][size] * quantity
    }

    if(cartItem.quantity>5){
        alert('cannot add more than 5 quantities')
    }
    else{
        if(cartItem.quantity<1){
            dispatch({type:'DELETE_FROM_CART',payload:pizza});
        }
        else{
            dispatch({type:'ADD_TO_CART',payload:cartItem});
        }
    }
    

    const cartlocal= getState().cartReducer.cartItems;
    localStorage.setItem('cart',JSON.stringify(cartlocal));
}

export const deleteFromCart =(pizza) => (dispatch,getState) => {
    dispatch({type:'DELETE_FROM_CART',payload:pizza});

    const cartlocal= getState().cartReducer.cartItems;
    localStorage.setItem('cart',JSON.stringify(cartlocal));
}

export const clearCart = () => async dispatch =>{
   dispatch({type:'CLEAR_CART',payload:[]});
}