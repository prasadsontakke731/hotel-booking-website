import React, { useContext } from 'react'
import "./RoomOption.css"
// import roomData from '../../data/roomData'
import { Link, Outlet, useParams } from 'react-router-dom'
import { mainData } from '../../data/data'
// import { SearchContext } from '../../App'


function RoomOption() {
    // console.log(dataItem);


    const { id } = useParams()
    console.log(id);


    const data = mainData.find(info => info.id == id)
    console.log(data);


    return (

        <>
            <div className="hero-section text-center mt-3 ">
                <h1 className="display-4 fs-3 fw-bold text-primary">Room Types</h1>

            </div>

            <div className="container mt-3 hotel-room" >
                {
                    data.exclusive.map((dataItem) => {
                        return (
                            <div className="row" key={dataItem.id}>
                                <div className="col-lg-4 text-center ">
                                    <img src={dataItem.image} alt="" />
                                    <div className='room-info mt-2 '>
                                        <div className='room_size'>
                                            <p className=''><i className="fa-solid fa-users"></i> Accommodates 3 Adults</p>
                                            <p>{dataItem.size}</p>
                                        </div>
                                        <div className='room_view'>
                                            <p><i className="fa-solid fa-bed"></i> Queen Bed sized bed</p>
                                            <p>{dataItem.view}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-center">
                                    <h1 className='text-primary'>{dataItem.name}</h1>
                                    <div className='mt-3'><span>Room Only</span>| <span>Free Cancellation</span></div>
                                    <p>{dataItem.booking}</p>
                                    <p className='text-success'>{dataItem.cancel}</p>
                                </div>
                                <div className="col-lg-4 text-center ">
                                    <div className='my-2'>
                                        <span className='mt-3 bg-danger text-light  text-center p-1 rounded rounded-md'>{dataItem.off}</span>
                                    </div>
                                    <p className='mt-5 border'>₹{dataItem.price}/-</p>
                                    <p className='text-danger'>{dataItem.night}</p>
                                    <Link to={`/paymentPage/:${dataItem.name}/:${dataItem.id}`}> <button className='btn btn-outline-primary rounded rounded-lg fw-bold mt-4'>Select Rooms</button></Link>

                                </div>
                            </div>
                        )
                    })
                }

            </div >

            <div className="container  mt-3 hotel-room">
                {
                    data.delux.map((items) => {
                        return (
                            <>
                                <div className="row">
                                    <div className="col-lg-4 text-center ">
                                        <img src={items.image} alt="" />
                                        <div className='room-info mt-2 '>
                                            <div className='room_size'>
                                                <p className=''><i className="fa-solid fa-users"></i> Accommodates 3 Adults</p>
                                                <p className='fw-bold'>{items.size}</p>
                                            </div>
                                            <div className='room_view'>
                                                <p><i className="fa-solid fa-bed"></i> {items.bed}</p>
                                                <p>{items.view}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 text-center">
                                        <h1 className='text-primary'>{items.name}</h1>
                                        <div className='mt-3'><span>Room Only</span>| <span>Free Cancellation</span></div>
                                        <p>{items.booking}</p>
                                        <p className='text-primary'> Free Breakfast</p>
                                        <p className='text-success'>{items.cancel}</p>
                                    </div>
                                    <div className="col-lg-4 text-center ">

                                        <div className='my-2'>
                                            <span className='mt-3 bg-danger text-light  text-center p-1 rounded rounded-md'>70% off</span>
                                        </div>
                                        <p className='mt-5'>₹{items.price}/-</p>
                                        <p className='text-danger'>{items.night}</p>
                                        <Link to={`/paymentPage/:${items.name}/:${items.id}`}><button className='btn btn-outline-primary rounded rounded-lg fw-bold mt-3'>Select Rooms</button></Link>
                                        <Outlet />
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </>

    )
}

export default RoomOption