import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import {FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi';

import {images} from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
      <FooterOverlay/>
      <Newsletter/>

      <div className='app__footer-links'>
          <div className='app__footer-links_contact'>
              <h1 className='app__footer-headtext'>Contact Us</h1>
              <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
              <p className='p__opensans'>+44 123 456 7890</p>
              <p className='p__opensans'>+44 123 456 7890</p>
          </div>

          <div className='app__footer-links_logo'>
              <img src={images.gericht} alt="gerichte"/>
              <p className='p__opensans'>"The best way to find your self is to lose yourself in the service of others."</p>
              <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop:'15'}}/>

              <div className='app__footer-links_icons'>
                  <FiFacebook/>
                  <FiTwitter/>
                  <FiInstagram/>

              </div>
          </div>

          <div className='app__footer-links_work'>
              <h1 className='app__footer-headtext'>Working Hours</h1>
              <p className='p__opensans'>Monday-Friday:</p>
              <p className='p__opensans'>08:00 am -12:00 am</p>
              <p className='p__opensans'>Saturday-Sunday:</p>
              <p className='p__opensans'>07:00 am -11:00 pm</p>
          </div>
      </div>

      <div className='footer__copyright'>
          <p className='p__opensans'>2021 Grish. All rights reserved</p>
      </div>
  </div>
);

export default Footer;
