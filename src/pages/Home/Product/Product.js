import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import './Product.css'

const Products = () => {
    const [products, setProducts] = useProducts();
    console.log(products);
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

                                </Card.Body>
                                <button className='w-100'>Update</button>
                            </Card>
                        </div>)
                }
            <Link to="allProducts">ALL Phones</Link>
            </CardGroup >
        </div >
    );
};

export default Products;