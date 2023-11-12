import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'


export default function Navbar() {

    const navigate = useNavigate()

    const logout = () => {
       Cookies.remove('token');
       Cookies.remove('login')

       console.log("Cookie after logout",Cookies.get('token'))
        navigate('/login')
    }



    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">JWT Token With Cookie</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">



                        {!Cookies.get('login') &&
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        }

                        {!Cookies.get('login') &&
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        }
                        {Cookies.get('login') &&
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                        }

                        {Cookies.get('login') &&
                            <li className="nav-item">
                                <Link className="nav-link" to="/create">Create</Link>
                            </li>
                        }

                        {Cookies.get('login') &&
                            <li className="nav-item">
                                <button className="nav-link border-0" onClick={logout}>Logout</button>
                            </li>
                        }



                    </ul>

                </div>
            </div>
        </nav>
    )
}
