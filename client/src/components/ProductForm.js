import React, { useState } from 'react';

const ProductForm = ({ initialTitle, initialPrice, initialDescription, titlePage, onSubmitProps }) => {
    
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        onSubmitProps({title,price,description});
        clearInputs();
    }

    const clearInputs = () => {
        setTitle("");
        setPrice(0);
        setDescription("");
        document.getElementById("title").focus();
    }

    return (
        <form className='text-center my-5 mx-auto' onSubmit={onSubmitHandler} style={{ width: '350px' }}>
            <h1>{titlePage} - Product Manager</h1>

            <div className='mt-4'>
                <div className="input-group mb-3">
                    <span className="input-group-text">Title</span>
                    <input id='title' type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} required />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Price</span>
                    <input type="number" className="form-control" min={0} value={price} onChange={e => setPrice(e.target.value)} required />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Description</span>
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} required />
                </div>
                <input type="submit" className="btn btn-success px-4 text-center"></input>
            </div>
        </form>
    )
}

export default ProductForm