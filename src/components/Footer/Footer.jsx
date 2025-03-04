import React from 'react'
import './Footer.css'
import { icons } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer py-3' id='contact-us' > 
        <div className='company-info'>
            <h1>FOOODIE </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum fugiat quae iste repudiandae tempora praesentium voluptatum unde placeat vitae incidunt ex, provident, quasi quo ut nulla ab ullam quam assumenda deserunt, odio dicta distinctio qui? Distinctio quibusdam delectus omnis possimus, natus cupiditate reiciendis rerum maxime molestias quam adipisci fugit ipsum.</p>
        </div>

        <div className='contact'>
            <h1>CONTACT US</h1>
            <div className='contact-info'>
            <h4>contact@foodie.com</h4>
            <h4>+91 912345678</h4>
            </div>
            <div className='logs'>
                <img src={icons.linkdin} alt="" />
                <img src={icons.facebook} alt="" />
                <img src={icons.twitter} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Footer