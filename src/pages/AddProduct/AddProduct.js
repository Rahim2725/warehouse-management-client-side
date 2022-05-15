import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import './AddProduct.css'

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data=>{
       axios.post('http://localhost:5000/product', data)
       .then(response => {
           console.log(response)
           const {data} = response ;
           if(data.insertedId){
               toast('Your Product Add Success full!!')
               reset();

           }
       })
    }


    return (
        <div className='container text-center my-5'>
            <h1>Please Add Product</h1>
            <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className='mb-3' value={user.email}  readOnly {...register("email",)} />
                <input type="text" className='mb-3' placeholder='Phone Name'required {...register("name", )} />
                <textarea type="text" className='mb-3 w-50 '  placeholder='Description'required {...register("description",)} />
                <input type="number" className='mb-3' placeholder='Price' required {...register("price",)} />
                <input type="number" className='mb-3' placeholder='quantity' required {...register("quantity",)} />
                <input type="text" className='mb-3' placeholder='Photo URL' required {...register("img", )} />
                <input type="text" className='mb-3' placeholder='Supplier Name' required {...register("supplier_name",)} />
                <input type="submit" />
            </form>
        </div>

    );
};

export default AddProduct;