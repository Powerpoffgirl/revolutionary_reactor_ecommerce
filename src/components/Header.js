import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InforBar from './InforBar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../features/cartSlice'; // Import the addToCart action
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart); // Get the cart items from the store
  // const quantity = 0;
  console.log(cartItems)
  // console.log("Cart Items", cartItems[1].quantity)
  let quantitySum = 0;
if(cartItems.length > 0){
   quantitySum = cartItems.reduce((acc, curr)=>{
      acc += curr.quantity;
      return acc;
   }, 0)
   console.log("Quantity Sum", quantitySum)
}
  const handleClick = () => {
    navigate('/', { state: {} });
  };

  const handleCartAdd = () => {
    // Dispatch the addToCart action with a product ID (you can pass the product ID here)
    const productId = 'your_product_id'; // Replace 'your_product_id' with the actual product ID
    dispatch(addToCart(productId));
  };

  return (
    <div>
      <InforBar />
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className='Navabr'>
        <Navbar.Brand href="#home"> <span onClick={handleClick} className='goToHome'>
              <ShoppingCartCheckoutIcon className='logoIcon' style={{ fontSize: '3rem', color: 'rgb(31, 77, 37)' }} />
            <span style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'rgb(31, 77, 37)' }}>Shopcart</span>
          </span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Categories<KeyboardArrowDownIcon/> </Nav.Link>
            <Nav.Link href="#pricing">Deals</Nav.Link>
            <Nav.Link href="#pricing">What's New</Nav.Link>
            <Nav.Link href="#pricing">Delivery</Nav.Link>
          </Nav>

          <Nav >
          <div className='searchContainer'>
            <input className='searchBar' placeholder='Search Product' />
            <span className="searchIconContainer">
              <SearchIcon className="searchIcon" />
            </span>
          </div>
            <Nav.Link href="#deets"><div className='headerItem'>
            <PersonOutlineIcon />
            Account
          </div></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <div className='headerItem' onClick={handleCartAdd}>
            <AddShoppingCartIcon />
            Cart {quantitySum}
          </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    </div>
  );
};

export default Header;

