import React from 'react'
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
const UpdateUser = () => {

    const {id} = useParams();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();
    
    useEffect(() => {
            axios.get('https://crud-backend-eta-eight.vercel.app/getUser/'+id)
            .then(result => {
                console.log(result)
                setName(result.data.name)
                setEmail(result.data.email)
                setAge(result.data.age)
            })
            .catch(err => console.log(err))
        }, [])

        const Update = (e) =>{
            e.preventDefault();
            axios.put('http://localhost:3001/updateUser/'+id, {name, email, age})
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => console.log(err))
        }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rouded p-3'>
            <form onSubmit={Update}>
                <h2>Update User</h2>
                <div className='mb-2'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' className='form-control' placeholder='Enter Name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor='name'>Email</label>
                    <input type='text' className='form-control' placeholder='Enter Name' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor='name'>Age</label>
                    <input type='text' className='form-control' placeholder='Enter Name' 
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>

    </div>
  )
}

export default UpdateUser
