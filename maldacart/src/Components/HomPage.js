import React, { useEffect } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const HomePage = ({products}) =>{
    // console.log("Home", products);
    let cart = useSelector((state) => state.cart.items);

    
    useEffect(() =>{
        
        for(let i=0; i<cart.length; i++){
            document.getElementById(cart[i]).innerHTML = "Added To Cart";
            document.getElementById(cart[i]).style.backgroundColor = "orange";
            document.getElementById(cart[i]).style.cursor = "default";
            document.getElementById(cart[i]).disabled = true;

        }

    }, [cart])
    return (
        products.length > 0 &&
        <div>
            <div className="main-section">
                <h1>All Items</h1>
                <div className="items">
                    {
                        products.map((product) =>(
                            <Card product={product} />
                        ))
                    }                    
                </div>
            </div>
        </div>
    )
}

export default HomePage;