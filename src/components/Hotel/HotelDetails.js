import React from 'react'
import "./HotelDetails.css"
import { useParams } from "react-router-dom"
import { mainData } from '../../data/data'
import HotelImages from './HotelImages'
import TopAnemeties from './TopAnemeties'
import RoomOption from './RoomOption'

function HotelDetails() {
    const { id } = useParams()


    const data = mainData.find(info => info.id == id)

    return (
        <>
            <HotelImages />
            <TopAnemeties />
            <RoomOption />
            {/* <div className='hotelDetails'>
                <div id="carouselExample" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={data.img[0]} className="d-block w-100" alt="Image1" />
                        </div>
                        <div className="carousel-item">
                            <img src={data.img[1]} className="d-block w-100" alt="Image2" />
                        </div>
                        <div className="carousel-item">
                            <img src={data.img[2]} className="d-block w-100" alt="Imag3" />
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    <h2>{data.name}</h2>
                    <p className='fw-bold text-warning'>
                        {data.about}
                    </p>
                    <p>
                        In facilisis sapien eu turpis pharetra, vitae efficitur arcu fringilla. Vestibulum vestibulum ipsum eu tortor fermentum,
                        in scelerisque dolor cursus. Suspendisse sit amet interdum leo. Duis nec justo a est gravida semper vel nec justo. Integer
                        tincidunt justo eu risus cursus, id facilisis velit lacinia. Duis vel tincidunt lacus. Integer semper euismod odio, a efficitur
                        tellus dignissim ac.
                    </p>
                </div>
                <div className="col-md-4">
                    <div className="mb-3">
                        <h4>Booking Details</h4>
                        <p>Check-in: </p>
                        <p>Check-out: MM/DD/YYYY</p>
                        <p>Number of guests: 2</p>
                    </div>
                    <div className="mb-3">
                        <h4>Price</h4>
                        <p>$200 per night</p>
                    </div>

                    <Link to={`price/:${data.price}`}><button>Book Now</button></Link>
                    <Outlet />
                </div>
            </div> */}
        </>
    )
}

export default HotelDetails