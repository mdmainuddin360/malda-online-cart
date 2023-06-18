import React from "react";
import { removeFromCart } from "../redux/actions";
import { useDispatch } from "react-redux";



const CartCard = ({product}) =>{
    
    let dispatch = useDispatch();
    
    function handleClick(e){
        dispatch(removeFromCart(e.target.id))
    }

    return (
        <div className="item">
          <div className="img-Container">
            <img src={product.thumbnail} alt="product" />
          </div>
          
          <div className="info">
            <div className="title">Title: {product.title}</div>
            <div className="id">ID : {product.id}</div>
            <div className="price">Price : $ {product.price}</div>
          </div>
          <button id={product.id} className="btnn" onClick={handleClick}>Remove from Cart</button>
          <div class="added" id={product.id}>Remove from Cart</div>
        </div>
    )
}

export default CartCard;