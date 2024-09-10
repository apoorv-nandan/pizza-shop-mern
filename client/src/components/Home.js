import React, { useEffect } from 'react';
// import { Carousel } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import CardComponent from './CardComponent';
import { Link } from 'react-router-dom';
import Loading from '../helpers/loading';
import Error from '../helpers/error';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../actions/orderActions';
import { getAllPizza } from '../actions/pizzaActions';

function Home(){

    const dispatch=useDispatch();
    const {currentUser} = useSelector(state=> state.loginReducer);
    const {orders} =useSelector(state => state.getOrderReducer);

    const pizzaState = useSelector(state => state.getAllPizzaReducer);
    const {pizzas,error,loading} = pizzaState;
    
    useEffect(()=>{
        dispatch(getAllPizza());
    },[]);


    useEffect(()=>{
        if(currentUser!== null)
        dispatch(getOrders(currentUser._id));
    },[currentUser])

    return (
        <div>
            <div className='best-top'>
                <div className='offers'>
                    {currentUser?
                    <div className='offer-strip'>
                        {(orders && orders.length>10) ? <p>GET 20% Off. USE SP20 CODE</p> : ((orders &&  orders.length<10 && orders.length>0)?
                        <p>GET 5% Off. USE GET5 CODE</p>:<p>GET 10% Off. USE NEW10 CODE</p>)}
                    </div>
                    :<></>}
                </div>
                <h3 style={{padding:'10px'}}>..experience the best taste..</h3>
            {/* <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images8.alphacoders.com/369/369063.jpg"
                    alt="First slide"
                    height={300+'px'} style={{objectFit:'cover'}}
                    />
                    <Carousel.Caption>
                    <h5>Best Pizza in the World</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://slicelife.imgix.net/16634/photos/original/banner-pizza-min_(1).jpg?crop=focalpoint&fp-x=0.75&fp-y=0.5&auto=compress%2Cformat&fit=crop&w=1920&h=888"
                    alt="Second slide"
                    height={300+'px'} style={{objectFit:'cover'}}
                    />
                    <Carousel.Caption>
                    <h5>Experience best taste</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    // src="/OIP (1).jfif"
                    src='https://images7.alphacoders.com/370/370706.jpg'
                    alt="Third slide"
                    height={300+'px'} style={{objectFit:'cover'}}
                    />
                    <Carousel.Caption>
                    <h5>Buy One, Get One</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
            </div>
            <div className='best'>
                <h4><strong>Best Sellers </strong></h4>
                <div className="container ">
                <div className="row justify-content-center" >
                    
                {loading ? (<Loading/>) : error? (<Error error='Something went wrong'/>):
                    (pizzas.map((pizza)=>{
                    return pizza.bestseller && <div key={pizza._id} className="col-md-3 m-3">
                                <CardComponent pizza={pizza}/>
                            </div>
                        }))}
                    </div>
                </div>
            </div>
            
            <div className="menu-strip">
                <Link to='/menu' style={{textDecoration:'none',color:'Black'}}> 
                <h4>View Menu &nbsp;
                <IoIosArrowForward /></h4>
                </Link>
                <div className='customers'>
                    <h2>600+ Outlets in the World</h2>
                    <h3>More than 8 Million Users served till date</h3>
                </div>
            </div>
        </div>
    );
}

export default Home;