import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import './Product.css'

const Product = () => {
    const [products, setProducts] = useProducts();
    
    console.log(products);

    const navigate = useNavigate();

    const prodcutDetails = id => {
        navigate(`/product/${id}`)
    }

    return (
        <div className='container mt-5'>
            <h1 className='text-center mb-5'>Latest Official Phones</h1>
            <CardGroup className='card-container card-container-area '>
                {
                    products.slice(0, 6).map(product =>
                        <div key={product._id}>
                            <Card>
                                <Card.Img src={product.img} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>Price : ৳ {product.price}</Card.Text>
                                    <Card.Text>Description: {product.description.slice(0, 55)}.....</Card.Text>
                                    <Card.Text>Quantity: {product.quantity}</Card.Text>
                                </Card.Body>
                                <button onClick={() => prodcutDetails(product._id)} className='w-100'>Update</button>
                            </Card>
                        </div>)
                }
            </CardGroup >

            <div className=' my-5 text-center'>
                <Link to="/products">
                    <button>ALL Products</button>
                </Link>
            </div>
        </div >
    );
};

export default Product;