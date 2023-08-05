import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Row } from 'react-bootstrap';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { addToCart } from '../features/cartSlice'; // Import the addToCart action
import GradientCircle from './GradientCircle';

const ProductPage = () => {
  const location = useLocation();
  const productId = location.state?.productId; // Get the product ID from the location state
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch(); // Get the dispatch function from Redux
  const cartItems = useSelector(state => state.cart);
  const [quantity, setQuantity] = useState(1);
 
   // State for quantity value 
 

  useEffect(() => {
    // Fetch the product details based on the product ID
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error.message);
      }
    };

    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  const handleCartAdd = () => {
    // Dispatch the addToCart action with the product ID
    if (productId) {
      dispatch(addToCart({productId, quantity}));
    }
  };

  const handleIncrement = () => {
    // Implement logic to increment quantity in the cart
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    // Implement logic to decrement quantity in the cart
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  // Function to convert rating rate to stars
  const getRatingStars = (rate) => {
    const roundedRate = Math.round(rate); // Round the rate to the nearest integer
    const fullStars = '★'.repeat(roundedRate); // Create full stars based on the rounded rate
    const emptyStars = '☆'.repeat(5 - roundedRate); // Create empty stars for the remaining slots
    return (
      <span className="starRating">
        {fullStars}
        {emptyStars}
      </span>
    ); // Concatenate full and empty stars wrapped in a span element
  };

  return (
    <div>
      <Header />
             <Row xs={1} md={2} lg={2} className='g-4'>
              <Card style={{ border:'none' }} className='productPageConatinerLeft'>
              {/* <div > */}
              <p>Electronics / Audio / Headphones / Shop Heaadphones by type / <b>airpods-max</b> </p>
                    <img className='mainProductImage' src={product.image} alt={product.title} />
                    <div className='productSmallImages'>
                    <img className='productSmallImage' src={product.image} alt={product.title} />
                    <img className='productSmallImage' src={product.image} alt={product.title} />
                    <img className='productSmallImage' src={product.image} alt={product.title} />
                    <img className='productSmallImage' src={product.image} alt={product.title} />
                  </div>
                  {/* </div> */}
              </Card>
              <Card style={{ border:'none'}} className='productPageConatinerRight'>
              {/* <div > */}
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <span><span style={{ color: 'green' }}>{getRatingStars(product.rating.rate)}</span><span>({product.rating.count})</span> </span>
            <hr />
            <h3>${product.price} or 99.99/month</h3>
            <p>Suggested payments with 6 months special financing</p>
            <hr />
                <div className='cartContainer'>
                  <b>Choose a Color</b>
                  <div className='gradientCircle'>
                    <GradientCircle color1="pink" color2="red"/>
                    <GradientCircle color1="black" color2="grey"/>
                    <GradientCircle color1="#ccdad2" color2="#93bfa8"/>
                    <GradientCircle color1="lightgrey" color2="whitesmoke"/>
                    <GradientCircle color1="#b7c3d8" color2="#234d94"/>
                </div>
                  <hr />
                  <div className='counter'><span><Button className='decrement' onClick={handleDecrement}>-</Button><Button className='countValue'>{quantity}</Button><Button className='increment' onClick={handleIncrement}>+</Button> </span><span><b className='leftItems'>Only <span style={{ color: 'rgb(241, 124, 41)' }}>12 items</span> Left! <br /> Don't miss it</b> </span> </div>
                    <div> <Button className='buyButton'>Buy Now</Button> <Button className='addToCart' onClick={handleCartAdd}>Add to Cart</Button> </div>
                      <Card>
                        <ListGroup variant="flush">
                          <ListGroup.Item className='freeDelivery'><LocalShippingOutlinedIcon style={{ color: 'rgb(241, 124, 41)' }} /> <div><b>Free Delivery</b><br /> Enter your Postal code for Delivery Availability.</div> </ListGroup.Item>
                          <ListGroup.Item className='freeDelivery'><EventRepeatOutlinedIcon style={{ color: 'rgb(241, 124, 41)' }} /> <div><b>Return Delivery</b><br />Free 30 days Delivery Returns. Details.</div> </ListGroup.Item>
                        </ListGroup>
                      </Card>
                  </div>
              {/* </div> */}
              </Card>
          </Row>
    </div>
  )
}

export default ProductPage;
