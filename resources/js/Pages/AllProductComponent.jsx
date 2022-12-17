import React from "react";
import ProductComponent from "./ProductComponent";

export default function AllProductComponent(){
    const product = {
        name: 'First Product',
        price: 200,        
        stock: 'Instock'
    }
    return(
        <>
            <ProductComponent product={product} />
        </>
    )
}