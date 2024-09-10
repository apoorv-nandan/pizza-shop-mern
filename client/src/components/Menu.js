import React , {useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
// import pizzas from "../data";
import CardComponent from "./CardComponent";
import Loading from "../helpers/loading";
import Error from "../helpers/error";
import { getAllPizza } from "../actions/pizzaActions";
// import { getAllPizzaReducer } from "../reducers/pizzaReducer";

function Menu(){
    const dispatch = useDispatch();

    const pizzaState = useSelector(state => state.getAllPizzaReducer);
    const {pizzas,error,loading} = pizzaState;
    
    useEffect(()=>{
        console.log('**');
        dispatch(getAllPizza());
    },[]);
    
    return(
        <div className="container">
            <div className="row justify-content-center" >

                {loading ? (<Loading/>) : error? (<Error error='Something went wrong'/>):
                    (pizzas.map((pizza)=>{
                        return (<div key={pizzas._id} className="col-md-3 m-3 mt-5" >
                                    <CardComponent pizza={pizza}/>
                            </div>);
                        })
                    )
                }
                
            </div>
        </div>
    );
}

export default Menu;