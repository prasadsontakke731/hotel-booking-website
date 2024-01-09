import React, { useContext, useState } from 'react'
import { useParams } from "react-router-dom"
import "./RoomInfo.css"
import img1 from "../Assets/image1.png"
import { mainData } from '../../data/data'
import { SearchContext } from '../../App'

function RoomInfo() {
    const { storeData } = useContext(SearchContext)

    const { id, name } = useParams()
    console.log(name, id);


    const data = mainData.find(info => info.id == id)
    console.log(data);
    // if(mainData.map((item)=>{
    //     return item.exclusive
    // }))

    const { checkInDate, checkOutDate, nuOfGuest, numRooms } = useContext(SearchContext)



    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        cardHolderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};

        // Example validation - add your own validation logic
        if (!formData.firstName.trim()) {
            validationErrors.firstName = 'First Name is required';
        }

        if (!formData.lastName.trim()) {
            validationErrors.lastName = 'Last Name is required';
        }

        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            validationErrors.email = 'Invalid email address';
        }

        if (!formData.mobileNumber.trim()) {
            validationErrors.mobileNumber = 'Mobile Number is required';
        } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
            validationErrors.mobileNumber = 'Invalid mobile number';
        }

        if (!formData.cardHolderName.trim()) {
            validationErrors.cardHolderName = 'Card Holder Name is required';
        }

        if (!formData.cardNumber.trim()) {
            validationErrors.cardNumber = 'Card Number is required';
        } else if (!/^\d{16}$/.test(formData.cardNumber)) {
            validationErrors.cardNumber = 'Invalid card number';
        }

        if (!formData.expiryDate.trim()) {
            validationErrors.expiryDate = 'Expiry Date is required';
        } else if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(formData.expiryDate)) {
            validationErrors.expiryDate = 'Invalid expiry date (MM/YY)';
        }

        if (!formData.cvv.trim()) {
            validationErrors.cvv = 'CVV is required';
        } else if (!/^\d{3}$/.test(formData.cvv)) {
            validationErrors.cvv = 'Invalid CVV';
        }

        setErrors(validationErrors);

        // If there are no validation errors, you can proceed with form submission
        if (Object.keys(validationErrors).length === 0) {
            // Add your form submission logic here
            console.log('Form submitted successfully:', formData);
            // navigate("/")
            alert("Hotel Booked Successfully")
        }
    };

    console.log(storeData);

    return (
        <div className='container payment mt-5'>

            < div className="row " >

                <div className="col-lg-6">
                    <h1>Hotel Info</h1>
                    <div className="container mt-2">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={img1} alt="" />
                            </div>
                            <div className="col-md-6">
                                <p>name</p>
                                <p>P-4 plot, MIDC Old Mumbai Pune Road, Pimpri</p>
                            </div>

                        </div>
                    </div>
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-md-4 dates">
                                <span>Check-In</span>
                                <p>{checkInDate}</p>
                                <p>02:00 PM</p>
                            </div>
                            <div className="col-md-4 dates">
                                <span>Check-Out</span>
                                <p>{checkOutDate}</p>
                                <p>12:00 PM</p>
                            </div>
                            <div className="col-md-4 dates">
                                <span>Guest</span>
                                <p>{nuOfGuest} Guests | {numRooms} Room</p>
                                1 Night
                            </div>
                        </div>
                    </div>
                    <div className="price-details bg-light">
                        <h6 className=''>Price Details</h6>
                        <div className='price_section'>
                            <p>Room Charges(1 room 1 night)</p>
                            <p>6070</p>
                        </div>
                        <div className='price_section'>
                            <p>Descounts</p>
                            <p>-2202</p>
                        </div>
                        <div className='price_section'>
                            <p>Price After Descounts</p>
                            <p>3871</p>
                        </div>
                        <div className='price_section'>
                            <p>GST On Base Price</p>
                            <p>464</p>
                        </div>
                        <div className='price_section price'>
                            <p>Total Payble Amount</p>
                            <p className=''>3871</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="container form">
                        <form onSubmit={handleSubmit} className='p-0 m-0'>
                            <div className="">
                                <label htmlFor="firstName" className="form-label text-primary">First Name</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.firstName ? 'is-invalid' : 'valid'}`}
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                            </div>

                            <div className="">
                                <label htmlFor="lastName" className="form-label text-primary">Last Name</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.lastName ? 'is-invalid' : 'valid'}`}
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                            </div>

                            <div className="">
                                <label htmlFor="email" className="form-label text-primary">Email Address</label>
                                <input
                                    type="email"
                                    className={`form-control ${errors.email ? 'is-invalid' : 'valid'}`}
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>

                            <div className="">
                                <label htmlFor="mobileNumber" className="form-label text-primary">Mobile Number</label>
                                <input
                                    type="tel"
                                    className={`form-control ${errors.mobileNumber ? 'is-invalid' : 'valid'}`}
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                />
                                {errors.mobileNumber && <div className="invalid-feedback">{errors.mobileNumber}</div>}
                            </div>

                            <div className="">
                                <label htmlFor="cardHolderName" className="form-label text-primary">Card Holder Name</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.cardHolderName ? 'is-invalid' : 'valid'}`}
                                    id="cardHolderName"
                                    name="cardHolderName"
                                    value={formData.cardHolderName}
                                    onChange={handleChange}
                                />
                                {errors.cardHolderName && <div className="invalid-feedback">{errors.cardHolderName}</div>}
                            </div>

                            <div className="">
                                <label htmlFor="cardNumber" className="form-label text-primary">Card Number</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.cardNumber ? 'is-invalid' : 'valid'}`}
                                    id="cardNumber"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                />
                                {errors.cardNumber && <div className="invalid-feedback">{errors.cardNumber}</div>}
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6 ">
                                    <label htmlFor="expiryDate" className="form-label text-primary">Expiry Date</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.expiryDate ? 'is-invalid' : 'valid'}`}
                                        id="expiryDate"
                                        name="expiryDate"
                                        value={formData.expiryDate}
                                        onChange={handleChange}
                                    />
                                    {errors.expiryDate && <div className="invalid-feedback">{errors.expiryDate}</div>}
                                </div>
                                <div className="col-md-6 ">
                                    <label htmlFor="cvv" className="form-label text-primary">CVV</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.cvv ? 'is-invalid' : 'valid'}`}
                                        id="cvv"
                                        name="cvv"
                                        value={formData.cvv}
                                        onChange={handleChange}
                                    />
                                    {errors.cvv && <div className="invalid-feedback">{errors.cvv}</div>}
                                </div>
                            </div>
                            {/* <div className='price-section'>
                                <span>Price:</span>
                                <span className='price'>{name}</span>
                            </div> */}
                            <button type="submit" className="btn">Submit</button>
                        </form>
                    </div>

                </div>

            </div >
        </div>
    )
}

export default RoomInfo