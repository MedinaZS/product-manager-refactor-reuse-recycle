import axios from 'axios';
import React from 'react'

const DeleteButton = ({ productId, successCallback, className }) => {

    //Si no se coloco nada en className al agregar este componente asignar cadena vacia
    if (className === undefined) className = "";

    const deleteProduct = () => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                console.log("Product Delete succesfully", res);
                successCallback();
            });
    }

    return (
        <button className={"btn btn-danger " + className}
            onClick={() => { window.confirm("Are you sure you want to delete this item") && deleteProduct() }}>
            Delete
        </button>
    )
}

export default DeleteButton