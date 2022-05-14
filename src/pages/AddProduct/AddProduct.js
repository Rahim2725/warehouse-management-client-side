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

    const onSubmit = event =>{
       axios.post('http://localhost:5000/product', event)
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
                <input type="text" className='mb-3' value={user.email} readOnly disabled {...register("email", {max: 99 })} />
                <input type="text" className='mb-3' placeholder='Phone Name'{...register("name", {max: 99 })} />
                <textarea type="text" className='mb-3 w-50 ' placeholder='Description'{...register("description",)} />
                <input type="text" className='mb-3' placeholder='Product Price'{...register("price", {max: 99 })} />
                <input type="text" className='mb-3' placeholder='Photo URL'{...register("img", {max: 99 })} />
                <input type="text" className='mb-3' placeholder='Supplier Name'{...register("supplier_name", { max: 99 })} />
                <input type="submit" />
            </form>
        </div>

    );
};

export default AddProduct;