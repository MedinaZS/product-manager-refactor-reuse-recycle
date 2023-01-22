import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList';

const Main = () => {
	const [products, setProducts] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		console.log('use effect');
		axios.get('http://localhost:8000/api/products')
			.then(res => {
				setProducts(res.data);
				setLoaded(true);
			})
	}, [])

	const removeFromDOM = (id) => {
		setProducts(products.filter(product => product._id !== id));
	}

	const createProduct = (product) => {
		//Send to the backend to save to the database
		axios.post('http://localhost:8000/api/product', product)
			.then(res => console.log("Response", res))
			.catch(err => console.log("Error", err));
	}

	return (
		<div className='mb-5'>
			{/* Los initial van vacios porque el form se utiliza para crear el producto, por lo que inicialmente estan vacios */}
			<ProductForm titlePage="Create" onSubmitProps={createProduct} initialTitle= {""} initialPrice={0} initialDescription={""} />
			<hr />
			{loaded && <ProductList products={products} removeFromDOM={removeFromDOM} />}
		</div>

	)
}

export default Main