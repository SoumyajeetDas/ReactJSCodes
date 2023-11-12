import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/index'

export default function Auth() {

    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
    const dispatch = useDispatch();

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleData = (e) => {
        setData((prevState) => {
            return {
                ...prevState,
                [e.target.id]: e.target.value
            }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.email === 'Soumya@gmail' && data.password === "Soumya@123") {
            // login() is ultimately an action creator whch is returning the action / action objects
            // dispatch({type:"SOME_UNIQUE_IDENTIFIER"})
            dispatch(authActions.login())
        }
        return;
    }
    return (
        <div class="container my-3">
            <div className="row">
                <div className="col-md-4 mx-auto">

                    {isAuthenticated ?
                        <div class="text-center text-danger">
                            <h3><b><i>You have been logged in !!</i></b></h3>
                        </div>
                        :
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label htmlFor="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" onChange={handleData} />
                            </div>
                            <div class="mb-3">
                                <label htmlFor="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" onChange={handleData} />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    }



                </div>


            </div>

        </div>
    )
}
