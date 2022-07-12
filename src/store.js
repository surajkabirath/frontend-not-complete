import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer } from "./reducers/productReducer";

const reducer = combineReducers({
  products:productsReducer,
});
let initialState = {};
const Middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...Middleware))
);

export default store;


























export const sliderItems = [
  {
    id: 1,
    img: "https://i.ibb.co/mbQFBk4/laptop1.jpg",
    title: "BEST DEAL",
    desc: "DON'T COMPROMISE ON BRAND! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "#D3D3D3",
  },
  {
    id: 2,
    img: "https://i.ibb.co/GT2bwwx/phone.jpg",
    title: "NEW PHONE",
    desc: "DON'T COMPROMISE ON YOUR CHIOCE! GET FLAT 20% OFF FOR NEW COSTUMER.",
    bg: "#D3D3D3",
  },
  {
    id: 3,
    img: "https://i.ibb.co/GMwMVWn/boat.webp",
    title: "BoAt Headphones",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "#D3D3D3",
  },

  {
    id: 3,
    img: "https://i.ibb.co/DG69bQ4/2.png",
    title: "LOUNGEWEAR LOVE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "#D3D3D3",
  },
];
