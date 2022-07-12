// in backend productController section (get all product) we must add productCount
import axios from "axios";
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productConstant";

export const getProduct = ()=>async(dispatch)=>{
    try {
        dispatch({type:ALL_PRODUCT_REQUEST});
        const {data} = await axios.get("api/v1/produts");
        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payLoad:data,
        })
    } catch (error) {
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payLoad:error.response.data.message,
        })
    }
}
// clearing Errors
export const clearErrors = async(dispatch)=>{
    dispatch({type:CLEAR_ERRORS});
}