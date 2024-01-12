import React, { useState } from 'react'
import "./Navbar.css"
import { Link, Outlet } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
function Navbar() {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();



    return (
        <>
            <nav className="navbar navbar-expand-lg pt-3  ">
                <Link to="/"> <h2 className='text-white'>Hotel</h2></Link>


                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">

                        {isAuthenticated ? <li>
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='login-btn'>
                                Log Out
                            </button>
                        </li> : <li>
                            <button onClick={() => loginWithRedirect()} className='login-btn'>Log In</button>
                        </li>}


                    </ul>
                    <Outlet />
                </div>
            </nav>
        </>
    )
}

export default Navbar