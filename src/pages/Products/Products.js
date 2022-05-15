import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import useProducts from '../hooks/useProducts';

const Products = () => {
    const [products, setProducts] = useProducts();
    const Delate = id => {
        const sure = window.confirm('Are You Sure?')
        if (sure) {
            const url = `http://localhost:5000/product/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
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