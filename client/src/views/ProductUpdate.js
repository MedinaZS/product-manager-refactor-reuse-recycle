import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForm from '../components/ProductForm';

const ProductUpdate = () => {

    //Obtain the id from the url
    const { id } = useParams();

    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        //Obtain the specific product to update
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])

    const updateProduct = (product) => {
        //update the product
        axios.put('http://localhost:8000/api/product/' + id, product)
            .then(res => console.log("Product updated succesfully ", res));
        //Go to the Detail page after updating
        navigate('/' + id);
    }


    return (

        <>
            {/* Los initial van con los datos del producto obtenido en useEffect porque es el form de update */}
            {loaded && (
                <ProductForm 
                titlePage="Update" 
                onSubmitProps={updateProduct} 
                initialTitle={product.title} 
                initialPrice={product.price} 
                initialDescription={product.description} />
            )}
        </>

    )
}

export default ProductUpdate