import { ADD_TO_CART, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, REMOVE_FROM_CART, RESET_CART } from "./actionType";
import axios from "axios";


export const fecthDataRequest = () =>{
    return {
        type : FETCH_DATA_REQUEST
    }
}

export const fecthDataSucess = (data) =>{
    return {
        type : FETCH_DATA_SUCCESS,
        payload : data
    }
}

export const fecthDataFailure = (error) =>{
    return {
        type : FETCH_DATA_FAILURE,
        payload : error
    }
}

export const fecthData = () => async (dispatch) =>{
    dispatch(fecthDataRequest);
    try{
        const response = await axios.get("https://dummyjson.com/products");
        // console.log("response", response.data.products);
        dispatch(fecthDataSucess(response.data.products))
    }
    catch(error){
        dispatch(fecthDataFailure(error.message))
    }
}

// cart actions

export const addToCart = (id) =>{
    return {
        type : ADD_TO_CART,
        id : id
    }
}

export const removeFromCart = (id) =>{
    return {
        type : REMOVE_FROM_CART,
        id : id
    }
}

export const resetCart = () =>{
    return {
        type : RESET_CART
    }
}
