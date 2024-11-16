import React from 'react';

import {images} from '../../constants';

import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
        <SubHeading title="Chase the new flavour"/>
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className='p__opensans' style={{margin:'2rem 0'}}>Savoring the taste of the finest ingredients, we bring you the best of the best. Our chefs are dedicated to bringing you the best dining experience you can ever have. We are here to make your dining experience unforgettable.</p>
        <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
        <img src={images.welcome} alt="welcome" className='app__header-img'/>
    </div>
  </div>
);

export default Header;
