import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

function CardComponent( {pizza} ) {
    const [size,setsize]= useState('small');
    const [quantity,setquantity]= useState(1);
    // console.log(pizza.prices[0]);
    
    const dispatch=useDispatch();
    const addtocart =() =>{
        dispatch(addToCart(pizza,quantity, size));
    }

    return (
    <div className="card shadow-lg p-3 mb-5 bg-white rounded " style={{width: "18rem",margin:"auto"}}>
        <img className="card-img-top" src={pizza.image} alt="Card cap"/>
        <div className="card-body">
            <h5 className="card-title">{pizza.name}</h5>
            <p className="card-text" style={{fontSize:'10px',minHeight:'40px'}}>{pizza.description}</p>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                  {/* <p>  size</p> */}
                <select value={size} onChange={(e)=>setsize(e.target.value)}>
                {pizza.sizes.map(size => {
                    return <option value={size}>{size}</option>
                })}
            </select>
                </div>
                <div className="col">
                   {/* <p> quantity</p> */}
                                <select value={quantity} onChange={(e)=>setquantity(e.target.value)}>
                {[...Array(5).keys()].map((x,i)=>{
                    return <option value={i+1}>{i+1}</option> 
                })}
            </select>
                </div>
            </div>
            {/* <div className="container">
            <div className="row"> */}
                <div className="col">
                    Price: 
                {pizza.prices[0][size] * quantity}
                </div>
                <div className="col">
                   <button className='btn' onClick={addtocart}>Add to Cart</button>
                </div>
                {/* </div>
            </div>   */}
        </div>
    </div>
  );
}

export default CardComponent;