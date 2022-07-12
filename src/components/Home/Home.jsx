import {ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {sliderItems} from "../../store"
import "./home.css"
import Product from "./Product"
import { mobile } from "../../responsive";
import MetaData from "../Layout/MetaData";
import {getProduct} from "../../actions/productAction";
import { useSelector,useDispatch } from "react-redux";

const product={
  name:"blue shirt",
  images:[{url:"https://i.ibb.co/GT2bwwx/phone.jpg"}],
  price:"rs.1000",
  _id:"325465",

}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: gray;
  cursor: pointer;
`;

const Home = () => {
  const dispatch = useDispatch();
  const {loading,error,products,productsCount} = useSelector(state=>state.products)
  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch]);

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  return (
    <>
    <Container>
      <MetaData title="eShop"/>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button className="button">SHOW NOW</Button>
            </InfoContainer>
            
          </Slide>
          
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>


    
    <h2 className="homeHeading">Featured <span>Products</span></h2>
    <div className="container">
      <Product  product={product}></Product>
      <Product  product={product}></Product>
      <Product  product={product}></Product>
      <Product  product={product}></Product>
      <Product  product={product}></Product>
      <Product  product={product}></Product>
      <Product  product={product}></Product>
      <Product  product={product}></Product>
      <Product  product={product}></Product>
      <Product  product={product}></Product>
      <Product  product={product}></Product>
      <Product  product={product}></Product>
      {/* {products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))} */}
    </div>
    </>
  );
};

export default Home;