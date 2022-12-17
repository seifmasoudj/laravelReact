import React from "react";

export default function ProductComponent(props)
{
    const {product} = props;
    return(
        <div>
            <h1>Product Details</h1>
            <p>Name:{product.name}</p>
            <p>Price:{product.price}</p>
            <p>Stock:{product.stock}</p>
        </div>
    )
} 