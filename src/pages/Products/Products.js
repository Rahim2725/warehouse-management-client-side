import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../hooks/useProducts';

const Products = () => {
    const [products] = useProducts();
    const navigate = useNavigate();
    const Delate = id => {
        navigate(`/product/${id}`)
    }
    return (
        <div className='container'>
            <h1 className='text-center'>Latest Official Phones</h1>
            <CardGroup className='card-container card-container-area '>
                {
                    products.map(product =>
                        <div key={product._id}>
                            <Card>
                                <Card.Img src={product.img} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>Price : ৳ {product.price}</Card.Text>
                                    <Card.Text>Description: {product.description.slice(0, 55)}.....</Card.Text>
                                    <Card.Text>Quantity: {product.quantity}</Card.Text>
                                    <Card.Text> Supplier name: {product.supplier_name}</Card.Text>
                                </Card.Body>
                                <button onClick={() => Delate(product._id)} className='w-100'>Delate</button>
                            </Card>
                        </div>)
                }
            </CardGroup >
        </div>
    );
};

export default Products;