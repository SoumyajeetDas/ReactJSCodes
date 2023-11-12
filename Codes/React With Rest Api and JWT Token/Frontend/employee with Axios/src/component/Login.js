import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import axios from 'axios';


export default function Login() {

    const [Username, setName] = useState('')
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();



    const submit = async (e) => {
        e.preventDefault();

        console.log(`Name : ${Username} Password : ${Password}`)

        const data = { Username, Password };

        console.log(data)

        // let res = await fetch("https://localhost:44344/api/User/login", {
        //     method: "POST",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // });

        let res = await axios({
            url:'https://localhost:44344/api/User/login',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data) // You have to use data only here otherwise it will throw 415 error.
        })
        

        if (res.status === 401) { // If incorrect username and password api will throw 401 status code and will not return any object 
            //so cannot use res.json() as it will throw error in the console.
            alert("Incorrect Username and Password");
            navigate('/login')
        }

        else { // If username and password i correct it will return object and hence res.json() can be used
            let response = await res.data;

            if (res.status === 200) {

                alert("Logged In");


                Cookies.remove('token') // Before setting the cookie I am flushing the cookie.
                Cookies.remove('login')
                Cookies.set('token', response.token);
                Cookies.set('login',true)

                navigate('/');

                
            }

            else {
                console.log(res);
                alert("Cannot be logged in");

            }
        }




    }

    return (
        <>

            <div className="container my-5">
                <div className="row">
                    <h1 className="text-center">Login</h1>
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

                            <button className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
