import React from 'react'
import "./header.css"
import {AiOutlineSearch,AiOutlineHeart,AiOutlineShoppingCart,AiOutlineUser} from "react-icons/ai"
const Header = () => {
  return (
   <div className='header-container'>
    <div className="header-logo">
        <h1>e<span>Shop</span></h1>
    </div>
   
        <ul className='header-links'>
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#about">About</a></li>
            <li className="p__opensans"><a href="#home">Top Seller</a></li>
            <li className="p__opensans"><a href="#home">User Rules</a></li>
            <li className="p__opensans"><a href="#home">Contact</a></li>
        </ul>
        <div className="header-icons">
           <a href="#search"><AiOutlineSearch/></a> 
            <a href="#heart"><AiOutlineHeart/></a>
            <a href="#cart"><AiOutlineShoppingCart/></a>
            <a href="#user"><AiOutlineUser/></a>
        </div>
    
   </div>
  )
}

export default Header
//yarn add axios react-helmet react-redux react-router-dom redux redux-devtools-extension redux-thunk webfontloader react-rating-stars-component react-js-pagination