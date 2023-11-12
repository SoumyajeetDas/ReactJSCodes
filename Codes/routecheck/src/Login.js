import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const cred = {
    name:'Soumyajeet',
    password: 'Soumya@123'
}

export default function Login() {

    const [name,setName] = useState('');
    const [password,setPassword] = useState('');

    function Logic() {

        if(name === cred.name && password === cred.password) {
            localStorage.setItem('login', true);
            navigate('/');
        }
        
    }

    const navigate = useNavigate();

    useEffect(() => {       
        let login = localStorage.getItem('login');

        if (login) {
            navigate('/');
        }

    });

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={Logic}>
                <input type="text" onChange={(e)=>{setName(e.target.value)}}></input> <br />
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}}></input> <br />
                <button>Login</button>
                <br/>

                <Link to="/">Home</Link>
            </form>

        </>
    )
}
