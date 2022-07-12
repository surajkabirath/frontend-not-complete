import React from "react";
import ReactStars from "react-rating-stars-component";
// import { Link } from 'react-router-dom'
// here a = Link we will change further
const options = {
  edit: false,
  color: "rgba(20,20,20,0.1)",
  activeColor: "orangered",
  size: window.innerWidth < 600 ? 20 : 25,
  value:3.5,
  isHalf:true,
};
const Product = ({ product }) => {
  return (
    <a className="productCard" href={product.id}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} /> <span>(200 Reviews)</span>
      </div>
      <span>{product.price}</span>
    </a>
  );
};

export default Product;
