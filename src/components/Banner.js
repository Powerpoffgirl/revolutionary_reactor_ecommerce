import React from 'react';
import { Carousel } from 'react-bootstrap';
import headphone from '../images/headphone6.png';

const Banner = () => {
  return (
    <Carousel fade controls={false} indicators={false} pause={false}>
      <Carousel.Item>
        <div className='banner' style={{ backgroundColor: 'antiquewhite' }}>
          <div className='bannerLeft'>
            <h2 className='bannerLeftHeading'>
              <b>Grab Upto 50% Off On <br />Selected Headphones</b>
            </h2>
            <button className='bannerButton'>Buy Now</button>
          </div>
          <div className='headPhoneGirlContainer' style={{ margin: '54px 80px 0 0', maxWidth: '269px' }}>
            <img className='headPhoneGirl' src={headphone} alt="bannerImage" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;


