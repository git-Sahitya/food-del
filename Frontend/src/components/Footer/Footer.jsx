import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
              <Link to='/'>  <img src={assets.logo} alt="" /></Link>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque recusandae porro eligendi quaerat iste tempora odio fugiat impedit pariatur eos?</p>
                <div className="footer-social-icons">
                  <img src={assets.facebook_icon} alt="" />
                  <img src={assets.twitter_icon} alt="" />
                  <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy & Policy</li>
              </ul>
            </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+91-9876543210</li>
                <li>contact@tomato.com</li>
              </ul>
            </div>
        </div>
      <hr />
      <p className='footer-copyright'>Copyright 2025 @ Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
