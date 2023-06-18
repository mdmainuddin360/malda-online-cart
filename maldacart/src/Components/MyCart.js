import React, {useEffect, useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import CartCard from "./CartCard";
import Bill from "./Biil";
import { resetCart } from "../redux/actions";


 const MyCart = () =>{
    let [products, setProducts] = useState([]);
    let cart = useSelector((state) => state.cart.items);
    let data = useSelector((state) => state.data.data);
    let [total, setTotal] = useState(0);

    let dispatch = useDispatch();


    function checkOut(){
        dispatch(resetCart());
        document.getElementById("message").style.display = "block";
    }


    useEffect(() => {
        let items = [];
        let sum = 0;

        for(let i=0;i<data.length; i++){
            console.log(data[i].id)
            if(cart.includes(data[i].id.toString())){
                items.push(data[i]);
                sum += data[i].price;
            }
        }

        if(sum === 0){
            document.getElementById("c-o").disabled = true;
        }else{
            document.getElementById("c-o").disabled = false;
        }

        setTotal(sum);
        
        console.log(items);
        setProducts(items);
    }, [cart, data])
    

    return(
        
            <div className="cart">
                <h1>My Cart</h1>
                <div id="message">
                    Items have been checkout.
                </div>
                <div className="main-cart">
                    {
                        cart.length > 0 ? 
                            <div className="items">
                                {
                                    products.map((item) => (
                                        <CartCard product={item} /> 
                                    ))
                                }                    
                            </div> :
                        <div className="empty" id="empty">Is Empty...</div>
                    }

                    <div className="bill-out">
                        <div className="bill">
                                <h4>Checkout List</h4>
                                {
                                    cart.length > 0 ?
                                    <div className="bill-item">
                                        {
                                            products.map((item) => (
                                                <Bill item={item} />
                                            ))
                                        }
                                    </div> :
                                    <div> Empty list ...</div>

                                }
                                <div className="line"></div>
                                <div className="total">
                                    <h4>Total</h4>
                                    <h4>$ {total}</h4>
                                </div>
                                <button id="c-o" className="btn bg-info check-btn" onClick={checkOut}>Checkout</button>
                        </div>
                        </div>
                </div>
                
            </div>
        
    )
}

export default MyCart;