import React, { useContext, useState } from 'react'
import "./SearchBar.css"
import { SearchContext } from '../../App'



function SearchBar({ onCLick }) {
    const { searchQuery, setSearchQuery, checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, numRooms, setNumRooms, handleSearch, nuOfGuest, setNumOfGuest } = useContext(SearchContext)
    return (
        <>
            <div>
                <label htmlFor="searchBar">SearchBar:</label>
                <br />

                <input type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />

                <input type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)} />

                <input type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)} />

                <input type="number"
                    placeholder='No of Rooms'
                    value={numRooms}
                    onChange={(e) => setNumRooms(e.target.value)} />
                <input type="number"
                    placeholder='No of Guest'
                    value={nuOfGuest}
                    onChange={(e) => setNumOfGuest(e.target.value)} />

                <button onClick={handleSearch} >Search</button>
            </div>


        </>
    )
}

export default SearchBar