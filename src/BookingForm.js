import React, { useState } from 'react';

const BookingForm = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        setSelectedDate(selectedDate);
        setErrorMessage('');
    };

    const handleBookingSubmit = () => {
        // Perform your booking logic here, considering the selected date

        // Example validation: Check if the selected date is not in the past
        const currentDate = new Date().toISOString().split('T')[0];

        if (selectedDate < currentDate) {
            setErrorMessage('Please select a date from today or in the future');
            return;
        }

        // Continue with your booking logic if validation passes
        // ...

        // Clear the form or navigate to the next step
        setSelectedDate('');
    };

    return (
        <div>
            <label htmlFor="selectedDate">Select Date:</label>
            <input
                type="date"
                id="selectedDate"
                value={selectedDate}
                onChange={handleDateChange}
                min={new Date().toISOString().split('T')[0]} // Set min attribute to today
            />

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <button onClick={handleBookingSubmit}>Book Now</button>
        </div>
    );
};

export default BookingForm;