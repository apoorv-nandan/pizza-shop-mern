export const getAllPizzaReducer = (state={pizzas: []},action) =>{
    switch(action.type)
    {
        case 'GET_PIZZAS': return{
            loading:true,
            ...state
        }
        case 'GET_PIZZA_SUCCESS':return{
            loading:false,
            pizzas:action.payload
        }
        case 'GET_PIZZA_ERROR':return{
            loading:false,
            error:action.payload
        }
        default : return state
    }
}