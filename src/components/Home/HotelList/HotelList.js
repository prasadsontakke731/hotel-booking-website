import React from 'react'
import "./HotelList.css"
import { Link, Outlet } from 'react-router-dom'
function HotelList({ image, name, location, price, address, spa, rating, dist, id }) {
    return (
        <div className='searchItem container mt-3'>
            <img src={image} alt="" height="300px" width="300px" className="siImg" />
            <div className="siDesc">
                <h1 className='siTitle'>{name}</h1>
                <span className="siDistance">{location} </span>
                <span className="siTaxiOp">{address} </span>
                <span className="siSubTitle">
                    {/* {spa} */}
                </span>
                <span className="siFeatures">

                </span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">
                    you can cancel later
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>{rating}</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">₹{price}</span>
                    <span className="siTaxOp">Include Taxes and Fees</span>
                    <Link to={`/hotel_details/${id}`}><button className='siCheckButton'>See Aviability</button></Link>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default HotelList