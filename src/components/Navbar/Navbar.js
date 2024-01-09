import React, { useState } from 'react'
import "./Navbar.css"
import { Link, Outlet } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
function Navbar() {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();



    return (
        <>
            {/* <!-- Navbar --> */}
            <nav className="navbar navbar-expand-lg pt-3  ">
                {/* <!-- Logo (adjust the image source and alt text as needed) --> */}
                <Link to="/"> <h2 className='text-white'>Hotel</h2></Link>

                {/* <!-- Navbar Toggler for mobile --> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* <!-- Navbar Links --> */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/booked" className='text-white'>Booked</Link>
                        </li>
                        {isAuthenticated ? <li>
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='login-btn'>
                                Log Out
                            </button>
                        </li> : <li>
                            <button onClick={() => loginWithRedirect()} className='login-btn'>Log In</button>
                        </li>}
                        {/* <li className="nav-item">
                            <Link to="/login" className='text-white'>Login</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link className='text-white'><Register /></Link>
                        </li> */}
                        {/* <li>
                            <button onClick={() => loginWithRedirect()} className='login-btn'>Log In</button>
                        </li>
                        <li>
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                            </button>
                        </li> */}

                    </ul>
                    <Outlet />
                </div>
            </nav>
        </>
    )
}

export default Navbar