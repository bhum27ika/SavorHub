import React from 'react';

import {images} from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding ' id="about">
    <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt="g-letter" className='app__aboutus-img'/>
    </div>

    <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
            <h1 className='headtext__cormorant'>About us</h1>
            <img src={images.spoon} alt="spoon" className='spoon__img'/>
            <p className='p__opensans' >We are a team of chefs who are dedicated to bringing you the best dining experience you can ever have. Our chefs are dedicated to bringing you the best dining experience you can ever have. We are here to make your dining experience unforgettable.</p>
    
        <button type="button" className='custom__button'>Know More</button>
    </div>

    <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="knife"/>
    </div>

    <div className='app__aboutus-content_history'>
            <h1 className='headtext__cormorant'>Our History</h1>
            <img src={images.spoon} alt="spoon" className='spoon__img'/>
            <p className='p__opensans' >We are a team of chefs who are dedicated to bringing you the best dining experience you can ever have. Our chefs are dedicated to bringing you the best dining experience you can ever have. We are here to make your dining experience unforgettable.</p>
    
        <button type="button" className='custom__button'>Know More</button>
    </div>

    
    </div>
  </div>
);

export default AboutUs;
