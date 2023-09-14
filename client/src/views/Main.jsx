import React, { useState } from 'react'
import axios from 'axios';
import ProductForm from '../Components/ProductForm';
import ProductsList from '../Components/ProductsList';

const Main = (props) => {
    
    const [products, setProducts] = useState([]);
    
    return (
        <>
           <ProductForm products={products} setProducts={setProducts} />
            <hr/>
           <ProductsList products={products} setProducts={setProducts} />
        </>
    )
}
export default Main;
