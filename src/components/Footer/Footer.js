import React from 'react'
import "./Footer.css"
function Footer() {
    return (

        <footer>
            <div className="footer-columns ">
                <div className="container-fluid">
                    <div className="row">

                        <div class="footer-col col-md-3">
                            <h4>Contact Us</h4>
                            <ul>
                                <li><a href="tel:+123456789">Phone: +1 (234) 567-89</a></li>
                                <li><a href="mailto:info@example.com">Email: info@example.com</a></li>
                            </ul>
                        </div>
                        <div class="footer-col col-md-3">
                            <h4>Get Help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Customer Support</a></li>
                                <li><a href="#">Payment Options</a></li>
                                <li><a href="#">Booking status</a></li>
                            </ul>
                        </div>
                        <div class="footer-col col-md-3">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Our Services </a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Affiliate Program</a></li>
                            </ul>
                        </div>
                        <div class="footer-col col-md-3">
                            <h4>Follow Us</h4>
                            <div class="social-links">
                                <ul>
                                    <li><a href="https://www.facebook.com/example"><i className="fa-brands fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/example"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="https://www.instagram.com/example"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li></li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <p>&copy; 2024 Your Hotel Name. All rights reserved.</p>
        </footer>

    )
}

export default Footer