import React from "react";


const Bill = ({item}) =>{
    return (
        <div className="item-bill mt-2 mb-2">
            <div>
                1. {item.title}
            </div>
            <div>
                ${item.price} 
            </div>
        </div>
    )
}

export default Bill;