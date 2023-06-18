import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, ADD_TO_CART, REMOVE_FROM_CART, RESET_CART } from "./actionType";
import { combineReducers } from "redux";

const initialState = {
    loading : true, 
    data : [],
    error : ""
}

const dataReducer = (state=initialState, action) =>{
    switch(action.type){
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading :true
            }
        
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading:false,
                data:action.payload
            }
        case FETCH_DATA_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default: return state
    }
}


const cartValue = {
    items : []
}

const cartReducer = (state=cartValue, action) =>{
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                items : [...state.items, action.id]
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                items : state.items.filter((item) => item !== action.id)
            }
        case RESET_CART:
            return {
                ...state,
                items: []
            }
        default: return state
    }
}




const rootReducer = combineReducers({
    data: dataReducer,
    cart: cartReducer
})

export default rootReducer;