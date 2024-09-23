export const userReducer = (state={},action) =>{

    switch(action.type){

        case 'USER_REGISTER': return{
            loading:true,
        }
        case 'USER_REGISTER_SUCCESS':return{
            loading:false,
            success:true,
        }
        case 'USER_REGISTER_ERROR':return{
            loading:false,
            error:action.payload
        }
        default : return state
    }
}

export const loginReducer = (state={},action) =>{

    switch(action.type){

        case 'USER_LOGIN': return{
            loading:true,
        }
        case 'USER_LOGIN_SUCCESS':return{
            loading:false,
            success:true,
            currentUser:action.payload
        }
        case 'USER_LOGIN_ERROR':return{
            loading:false,
            error:action.payload
        }
        case 'USER_LOGOUT':return{
            currentUser:action.payload
        } 
        default : return state
    }
}