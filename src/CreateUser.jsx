import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();

    const Submit =(e) =>{
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", {name, email, age})
        .then(result => {
            console.log(result)
            navigate('/')
    })
        .catch(err => console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rouded p-3'>
            <form onSubmit={Submit}>
                <h2>Add User</h2>
                <div className='mb-2'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' className='form-control' placeholder='Enter Name'
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor='name'>Email</label>
                    <input type='text' className='form-control' placeholder='Enter Email'
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor='name'>Age</label>
                    <input type='text' className='form-control' placeholder='Enter Age' 
                    onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>

    </div>
  )
}

export default CreateUser