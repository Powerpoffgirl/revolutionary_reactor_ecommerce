import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TuneIcon from '@mui/icons-material/Tune';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist } from '../features/watchlistSlice';
import ProductPage from './ProductPage';

const ProductList = () => {
    const buttonList = ["Headphone Type", "Price", "Review", "Color", "Material", "Offer"];
// Replace this URL with the API endpoint you want to fetch data from
const apiUrl = 'https://fakestoreapi.com/products';
const navigate = useNavigate();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const watchlist = useSelector((state) => state.watchlist);
const fetchProducts = async () => {
  try {
    const response = await axios.get(apiUrl);
    setProducts(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

useEffect(()=>{
  fetchProducts();
},[])

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

  const handleWatchlist = (productId) => {
    // Implement your watchlist logic here
    dispatch(addToWatchlist(productId));
  };

  const handleClick = (productId)=>{
    <ProductPage productId={productId}/>
    // navigate('/ProductPage')
    navigate('/ProductPage', { state: { productId } });
    // console.log("Product Id from list page", productId)
  }

  console.log("WatchList", watchlist)

    return (
    <div className='productListContainer'>
        <div className='buttonList'>
          <div className='buttonListContainer'>
          {/* <Row xs={1} md={4} className='g-4'>
            
          </Row> */}
              {buttonList.map((buttonText, idx) => (
              <button className='productListButton' key={idx}>
                {buttonText} <KeyboardArrowDownIcon className="arrow-icon" />
              </button>
            ))}
            <button className='productListButton' >
                All Filters<TuneIcon />
            </button>
          </div>
            <button className="sortIcon" >
                Sort by<KeyboardArrowDownIcon  />
            </button>
        </div>

        <h3 className='productListHeading'>Products For You!</h3>
        <div className='productList'>
        <Row xs={1} md={3} lg={4} className='g-4'>
          {products.map((product) => (
            <Col key={product.id}>
              <Card>
                <div className="productImageContainer">
                  {/* <div className="heart-icon" onClick={() => handleWatchlist(product.id)}>
                    <i className="far fa-heart"></i>
                  </div> */}
                  <Card.Img
                    variant='top'
                    src={product.image}
                    className='productImage'
                  />
                </div>
                <Card.Body>
                  <div className="productInfo">
                    <div className="title">{product.title}</div>
                    <div className="price"><span><sup className='supScript'>$</sup></span>{product.price}</div>
                  </div>
                  <Card.Text className="truncate">{product.description}</Card.Text>
                  <Card.Title style={{fontSize:'medium'}}>{getRatingStars(product.rating.rate)} <span style={{fontSize:'small'}}>({product.rating.count})</span> </Card.Title>
                  <Button className='cartButton' onClick={()=> handleClick(product.id)}>Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default ProductList