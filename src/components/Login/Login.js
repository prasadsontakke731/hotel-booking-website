import React, { useState } from 'react'
import "./Login.css"
function Login() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleContinueWithEmail = () => {
        // Add your logic to handle continuing with email
        console.log(`Continue with email: ${email}`);
    };

    const handleSignInWithGoogle = () => {
        // Add your logic to handle signing in with Google
        console.log('Sign in with Google clicked');
    };
    return (
        <>


            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form>
                            {/* Email input */}
                            <div className="form-group">
                                <label htmlFor="inputEmail">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="inputEmail"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>

                            {/* Continue with Email button */}
                            <button
                                type="button"
                                className="btn btn-primary btn-block mt-5"
                                onClick={handleContinueWithEmail}
                            >
                                Continue with Email
                            </button>

                            {/* OR Divider */}
                            <div className="text-center mt-3 mb-3">OR</div>

                            {/* Sign in with Google button */}
                            <button
                                type="button"
                                className="btn btn-danger btn-block"
                                onClick={handleSignInWithGoogle}
                            >
                                Sign in with Google
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login