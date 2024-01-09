import React from 'react'
import "./TopAnemeties.css"
function TopAnemeties() {
    return (
        <div className='bg-light border border-dark'>

            <div className="hero-section text-center mt-3 ">
                <h1 className="display-4">Top Amenities</h1>
                <p className="lead">Experience luxury with our top-notch amenities</p>
            </div>
            {/*  */}
            <div className='container bg-light'>
                <div className="row">
                    <div className="col ">
                        <ul className=''>
                            <li className='text-primary fs-1'><i className="fa-solid fa-wifi"></i> Free Internet</li>
                            <li className='text-primary fs-1'><i className="fa-solid fa-check-double text-primary"></i> Air Conditioning</li>
                            <li className='text-primary fs-1'><i className="fa-solid fa-lightbulb"></i> Power Backup</li>
                            <li className='text-primary fs-1'><i className="fa-solid fa-user-doctor"></i> Doctor On Call</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row animy">
                    <div className="col-md-4">
                        <div className="amenity-card">

                            <div className="card-body">
                                <h5 className="card-title"><i className="fa-solid fa-utensils text-primary"></i> Dining</h5>
                                <p className="card-text"><span></span>Restaurent</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="amenity-card">

                            <div className="card-body">
                                <h5 className="card-title"><i className="fa-solid fa-wifi text-primary"></i> Internet</h5>
                                <p className="card-text"><span></span>Free Wifi</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="amenity-card">

                            <div className="card-body">
                                <h5 className="card-title"><i className="fa-brands fa-servicestack text-primary"></i> Services</h5>
                                <p className="card-text"><span></span>Laundry Service</p>
                                <p className="card-text"><span></span>Lagegge Assistant</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="amenity-card">

                            <div className="card-body">
                                <h5 className="card-title"><i className="fa-solid fa-check text-primary"></i> General</h5>
                                <p className="card-text"><span></span>Air Conditioning </p>
                                <p className="card-text"><span></span>Lugege Storage</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="amenity-card">

                            <div className="card-body">
                                <h5 className="card-title"><i className="fa-solid fa-hotel text-primary"></i> Room</h5>
                                <p className="card-text"><span></span>Smoke Detector</p>
                                <p className="card-text"><span></span>Ironing Service</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="amenity-card">

                            <div className="card-body">
                                <h5 className="card-title">Others</h5>
                                <p className="card-text"><span></span>Printer</p>
                                <p className="card-text"><span></span>Intercom</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}

        </div>
    )
}

export default TopAnemeties