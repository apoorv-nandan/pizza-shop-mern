import { useDispatch, useSelector } from 'react-redux';
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { TbTrashXFilled } from "react-icons/tb";
import { useEffect, useState } from 'react';
import { addToCart, clearCart, deleteFromCart } from '../actions/cartActions';
import { placeOrder } from '../actions/orderActions';
import { useNavigate } from 'react-router';
import Succes from '../helpers/success';

function Cart() {
    const cartstate = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [coupon,setCoupon] = useState('');
    const [disVal,setDisVal] = useState(0);
     const [total,setTotal] = useState(0);
    const [placed,setPlaced] =useState(false);
   
    var subtotal= cartstate.cartItems.reduce((x,item) => x+item.price , 0);

   
    console.log("*");
    useEffect(()=>{
        setTotal(subtotal);
    },[subtotal])

    function getdiscount(){
        if(coupon==='GET5'){
           return (0.05*subtotal);
        }else if(coupon==='SP20'){
            return (0.2*subtotal);
        }else if(coupon==='NEW10'){
            return (0.1*subtotal);
        }
    }
    const applyDiscount =()=>{
        const discount=getdiscount();
        setDisVal(discount);
        setTotal(subtotal-discount);
        
    }

    const placeorder= () => {
        dispatch(placeOrder(Math.round(total)));
        setPlaced(true);
        setTimeout(()=>{
            dispatch(clearCart());
            navigate('/orders');
        },3000);
    }

    return (
        <div style={{marginTop:'40px'}}>
            {cartstate.cartItems.length ?
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 shadow-lg p-3 mb-5 bg-white rounded " style={{}}>
                            {cartstate.cartItems.map((cartitem) => {
                                return (
                                    <div className='row cartitem'>
                                        <div className='col-md-7' key={cartitem._id} style={{ textAlign: 'left' }}>
                                            <h5>{cartitem.name}&nbsp;[{cartitem.size}]</h5>
                                            <p>price: &nbsp;{cartitem.quantity} x {cartitem.prices[0][cartitem.size]} = {cartitem.price}</p>
                                            <p style={{ display: 'inline' }}>quantity: &nbsp;</p>
                                            <CiSquareMinus size={20} color='blue' onClick={() => dispatch(addToCart(cartitem,cartitem.quantity-1,cartitem.size))}/>
                                            <span style={{margin:'10px'}}>{cartitem.quantity}</span>
                                            <CiSquarePlus size={20} color='blue' onClick={() => dispatch(addToCart(cartitem,cartitem.quantity+1,cartitem.size))}/>
                                        </div>
                                        <div className='col-md-4'>
                                            <img src={cartitem.image} height={'100px'} width={'100px'} />
                                        </div>
                                        <div className='col-md-1'>
                                            <TbTrashXFilled size={30} color='red' onClick={() => dispatch(deleteFromCart(cartitem))}/>
                                        </div>
                                        <hr style={{ marginTop: '20px' }} />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="col-md-4" style={{padding:'40px' }}>
                            {placed && <Succes success={'Order Placed Successfully'}/>}
                            <input placeholder='Apply Coupon' value={coupon} onChange={(e)=>setCoupon(e.target.value)} />
                            <button onClick={applyDiscount}>Apply</button>
                            <h5>Subtotal: {subtotal}</h5>
                            {disVal>0 && <h5>Discount: {disVal}</h5>}
                            <hr/>
                            <h5>Total: {Math.round(total)}</h5>
                            <button className='btn' onClick={placeorder}>Place Order</button>
                        </div>
                    </div>
                </div>
                : <h2>Cart Empty</h2>}
        </div>
    )

}

export default Cart;