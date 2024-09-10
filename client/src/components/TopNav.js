import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Container,Nav,NavDropdown} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/userActions';

function TopNav(){
    
    const dispatch = useDispatch();
    const cartstate = useSelector( state => state.cartReducer);
    const userstate = useSelector(state => state.loginReducer);
    const {currentUser} = userstate;

    return(
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to='/'>PIZZA SHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">

                    {currentUser ? 
                    (<NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to='/orders'>
                        Orders
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={()=>{dispatch(logoutUser())}}>
                       LogOut
                    </NavDropdown.Item>
                    </NavDropdown>)
                    : (<Nav.Link as={Link} to='/login'>Login</Nav.Link>) }
                    
                    <Nav.Link as={Link} to='/cart'>Cart {cartstate.cartItems.length>0 && cartstate.cartItems.length}</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
}

export default TopNav;