import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsPersonFillAdd } from "react-icons/bs";
import { registerUser } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Success from "../helpers/success";
import Error from "../helpers/error";
import Loading from "../helpers/loading";

function Register (){
    const dispatch= useDispatch();
    const navigate= useNavigate();
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [phnumber,setPhoneNumber] =useState("");
    const [password,setPassword]= useState("");
    const [cpassword,setCPassword]= useState("");

    const {loading,success,error} = useSelector(state => state.userReducer);

    const handleSubmit = async () =>{
        if(password !== cpassword){
            alert("passwords don't match");
        }
        else{
            const user={name, email,phnumber, password};
            console.log(user);
            try{
                await dispatch(registerUser(user));
                navigate('/login') 
            }
            catch(error){
                console.log('register error',error);
            }
        }
    }

    return (
        <div>
            <div className="row justify-content-center m-5">
                <div className="col-md-5 m-5 shadow-lg p-3 mb-5 bg-white rounded">

                    {loading && <Loading/>}
                    {success && <Success success='User Registerd Successfully'/>}
                    {error && <Error error='User already registered'/>}

                    <h3 style={{marginBottom:'30px'}}>Register <BsPersonFillAdd /></h3>
                    <input type='text' placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/>
                    <input type='text' placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
                    <input type='text' placeholder="phone number" value={phnumber} onChange={(e)=>setPhoneNumber(e.target.value)} className="form-control"/>
                    <input type='password' placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"/>
                    <input type='password' placeholder="confirm password" value={cpassword} onChange={(e)=>setCPassword(e.target.value)} className="form-control"/>
                    <button onClick={handleSubmit} className="btn">Register</button>
                    <Link to='/login'><p>Already have an account</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Register;