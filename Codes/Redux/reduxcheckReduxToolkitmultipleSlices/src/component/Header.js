import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {authActions} from '../store/index'

export default function Header() {

    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
    const dispatch = useDispatch();

    const logoutHandle = ()=>{
          // logout() is ultimately an action creator whch is returning the action / action objects
        // dispatch({type:"SOME_UNIQUE_IDENTIFIER"})
        dispatch(authActions.logout())
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><h2>Redux Auth</h2></a>
                    {isAuthenticated && <div style={{display:"flex", justifyContent:"space-between", alignItems: "center"}}>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="/"><b>Home</b></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/"><b>Link</b></a>
                                </li>
                            </ul>
                        </div>
                        <button class="btn btn-info" onClick={logoutHandle}>Logout</button>
                    </div>}
                    

                </div>
            </nav>
        </>
    )
}
