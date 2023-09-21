import React from 'react';

const ProductList = ({products}) => {

    const productNodes = products.map((product, index)=> {
        return (
            <li key={index}>Brand: {product.brand}</li>
        )
    });

    return (
        {productNodes}
    )
};

export default ProductList; 
