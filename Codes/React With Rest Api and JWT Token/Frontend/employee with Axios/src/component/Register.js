import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function Register() {

    const [Username, setName] = useState('')
    const [Password, setPassword] = useState('')
    const navigate=useNavigate();

    const submit = async (e) => {

        e.preventDefault();
        console.log(`Name : ${Username} Password : ${Password}`)

        const data = {Username,Password};

        // let res = await fetch("https://localhost:44344/api/User/register", {
        //     method: "POST",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // });


        let res = await axios.post('https://localhost:44344/api/User/register',{...data})

        if(res.status===201){
            alert("User got added");
            navigate('/login');
        }

        else{
            console.log(res);
            alert("User cannot be added");
            e.preventDefault();
        }

        
       
    }

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <h1 className="text-center">Register</h1>
                    <div className="col-md-6 m-auto">

                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">User Name</label>
                                <input type="name" className="form-control" id="name" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <button className="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );

}
