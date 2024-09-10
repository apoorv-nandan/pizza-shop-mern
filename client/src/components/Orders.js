import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getOrders } from "../actions/orderActions";
import Loading from "../helpers/loading";
import Error from "../helpers/error";

export default function Orders(){

    const dispatch= useDispatch();
    const {currentUser} = useSelector(state => state.loginReducer);
    const order = useSelector(state => state.getOrderReducer);
    const {orders,loading, error} =order;
    console.log(orders);

    useEffect(()=>{
        console.log(currentUser._id);
        dispatch(getOrders(currentUser._id));
    },[])
    
    return(
        <div className='order-page'>
            {loading ? <Loading/> : error ? <Error error='Something went wrong'/>:
            orders.length?
            (<div className="container">
            {orders && orders.map((order)=>{
                return(
                <div key={order._id} className="row shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="col-md-4 " style={{textAlign:'left'}}>
                        <div>
                            {/* <p>Order quantity: X{order.orderItems.length}</p> */}
                            <ul>
                            <p>Order Date:</p>
                            {order.orderItems.map((item)=>{
                                return (<li key={item._id}>{item.name} [{item.size}] &nbsp; X{item.quantity} </li>);
                            })}
                            <p>Order Amount: Rs.{order.orderAmount}</p>
                            </ul>
                            
                        </div>
                    </div>
                    <div className="col-md-4" style={{textAlign:'center'}}>
                        <p>Shipping Address:</p>
                        <p>Megapolis Splendour,<br/> hijewadi phase 3,<br/> Pune, Maharashtra</p>
                    </div>
                    <div className="col-md-4">
                        <p>Order Status: {order.isDelivered? 'Delivered':'Placed'}</p>
                    </div>
                </div>);

            })}
            </div>):<h3 style={{color:'white'}}>No Orders yet</h3>}
        
        </div>
    )
}