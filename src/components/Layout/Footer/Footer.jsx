import React from 'react'
import {BsFacebook,BsInstagram,BsTwitter,BsFillPhoneFill} from "react-icons/bs"
import {SiGmail} from "react-icons/si"
import {FaSearchLocation} from "react-icons/fa"
import "./footer.css"
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="leftFooter">
        <h4>Contact Us</h4>
        <a href="www"><BsFillPhoneFill style={{color:"red"}}/> 9876543210</a>
        <a href="www"><SiGmail style={{color:"skyblue"}}/> eshop637@gmail.com</a>
        <a href="www"><FaSearchLocation style={{color:"yellow"}}/> Dharan,Sunsari,Nepal</a>
        </div>
        <div className="midFooter">
       <h1>e<span>Shop</span></h1>
       <p>High Quality is our first priority</p>

       <p>Copyrights 2022 &copy; eShop</p>
        </div>
        <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href="www"><BsFacebook style={{color:"#3b5998"}}/></a>
            <a href="www"><BsInstagram style={{color:"#3f729b "}}/></a>
            <a href="www"><BsTwitter style={{color:"#00acee"}}/></a>
        </div>
    </div>
  )
}

export default Footer