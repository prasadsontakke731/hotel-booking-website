import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-columns">
                    <div className="footer-column">
                        <h3>Contact Us</h3>
                        <ul className="footer-links">
                            <li><a href="tel:+123456789">Phone: +1 (234) 567-89</a></li>
                            <li><a href="mailto:info@example.com">Email: info@example.com</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Follow Us</h3>
                        <ul className="footer-links">
                            <li><a href="https://www.facebook.com/example"><i className="fa-brands fa-facebook"></i></a></li>
                            <li><a href="https://twitter.com/example"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com/example"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Get Help</h3>
                        <ul className="footer-links">
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="support.html">Customer Support</a></li>
                            <li><a href="payment.html">Payment Options</a></li>
                            <li><a href="Booking.html">Booking status</a></li>
                        </ul>
                    </div>
                </div>

                <p>&copy; 2024 Your Hotel Name. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer