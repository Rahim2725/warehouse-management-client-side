import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import useProducts from '../hooks/useProducts';

const AllProducts = () => {
    const [products] = useProducts();
    return (
        <div className='container'>
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

                                </Card.Body>
                                <button className='w-100'>Update</button> 
                            </Card>
                        </div>)
                }
            </CardGroup >
        </div>
    );
};

export default AllProducts;