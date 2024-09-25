import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Error from "../helpers/error";
import Loading from "../helpers/loading";

function Login (){
    
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const {loading, error} = useSelector(state =>state.loginReducer);

    const handleLogin = async () =>{
        var em; 
        const logger=Number(email);
        if(!Number.isNaN(logger))
            em=false;  //phnumber
        else{
            em=true;   //email
        }
        const user={email, password,em};
        console.log(user);
        try{
            await dispatch(loginUser(user));
            navigate('/');
        }
        catch(error){
            console.log(error);
        }
          
    }


    return(
        <div>
            <div className="row justify-content-center m-5">
                <div className="col-md-5 m-5 shadow-lg p-3 mb-5 bg-white rounded">

                    {loading && <Loading/>}
                    {error && <Error error='Invalid Credentials'/>}

                    <h2 style={{marginBottom:'30px'}}>Login</h2>
                    <input type='text' placeholder="phone or email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
                    <input type='password' placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"/>
                    <button className="btn" onClick={handleLogin}>Login</button>
                    <Link to='/register'><p>Click here to register</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Login;