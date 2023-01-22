import React from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const ProductList = ({ products, removeFromDOM }) => {

    return (
        <div className='mx-auto' style={{ width: '350px' }}>
            <h1 className='mb-4'>All Products:</h1>
            
            <div className="list-group">
                {products.map((product, index) => {
                    return (
                        <div key={index} className='list-group-item d-flex justify-content-between align-items-center'>
                            <Link key={index} to={'/' + product._id} className="text-start text-decoration-none me-4"> {product.title}</Link>
                            <DeleteButton productId={product._id} successCallback={() => removeFromDOM(product._id)} />
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default ProductList