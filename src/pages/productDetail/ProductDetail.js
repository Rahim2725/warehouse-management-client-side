import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})

    const [quantity, setQuantity] = useState(0)



    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const { name, img, description, price, supplier_name } = product;


    const handleAddQuantity = event => {
        event.preventDefault();
        const number  = parseInt(event.target.number.value) 
        const oldQuantity = parseInt(quantity);
        const newQuantity = oldQuantity + number ;
        setQuantity(newQuantity);
        event.target.reset()
    }

    const handleDeliverd = () =>{
        const oldQuantity = parseInt(quantity)
        if(oldQuantity > 0){
           const newQuantity = oldQuantity - 1 ;
           setQuantity(newQuantity);
        }
        else{
            alert('Please Add Quantity')
        }

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
                    <button onClick={handleDeliverd}>Delivered</button>
                    <form onSubmit={handleAddQuantity}>
                        <input type="number" name="number" id="" placeholder='Quantity Only Number' required />
                        <input type="submit" value="Add" />
                    </form>
                </div>
            </div>
            <div className=' my-5 text-center'>
            <Link to="/products">
                <button>ALL Products</button>
            </Link>
            </div>
        </div>
    );
};

export default ProductDetail;