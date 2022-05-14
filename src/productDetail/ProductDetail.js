import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/phones/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const { name, img, description, price, quantity, supplier_name } = product;


    const handleAddQuantity = event => {
        event.preventDefault();
        console.log('deliverd is click')
    }

    return (
        <div className='container w-50 mx-auto '>
            <div className='border p-3 '>
                <img src={img} alt="" />
                <h1>{name}</h1>
                <p>Price: ৳{price}</p>
                <p>{description}</p>
                <p><small>Supplier Name : {supplier_name}</small></p>
                <p>Quantity: {quantity}</p>
                <div className='d-flex justify-content-around'>
                    <button>Delivered</button>
                    <form onSubmit={handleAddQuantity}>
                        <input type="number" name="number" id="" placeholder='Quantity Only Number' required />
                        <input type="submit" value="Add" />
                    </form>
                </div>
            </div>
            <div className=' mt-5 text-center'>
                <Link to="/products">
                    <button>ALL Products</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetail;