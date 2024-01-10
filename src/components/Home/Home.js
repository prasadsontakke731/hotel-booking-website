import React, { useContext, useState } from 'react'
import "./Home.css"
import { mainData } from '../../data/data'
import HotelList from './HotelList/HotelList'
import SearchBar from '../Searchbar/SearchBar'
import { useAuth0 } from "@auth0/auth0-react";
import { SearchContext } from '../../App'



function Home({ searchResult }) {
    const { isAuthenticated, user } = useAuth0();
    const { checkInDate, checkOutDate, nuOfGuest, numRooms } = useContext(SearchContext)

    return (

        <div className='home container'>
            {
                isAuthenticated ? <div className='text'>
                    <h4>Welcome,<span className='text-success'> {user.name}</span></h4>
                </div> : <div></div>
            }
            <SearchBar />

            {

                searchResult === null ?
                    mainData.map((item) => {
                        return <HotelList key={item.id} id={item.id} image={item.img[0]} name={item.name} location={item.location} price={item.price} address={item.address} spa={item.allAmenities.spa} dist={item.dist} rating={item.star} checkInDate={checkInDate} checkOutDate={checkOutDate} nuOfGuest={nuOfGuest} numRooms={numRooms} />
                    }) : searchResult.map((item) => {
                        return <HotelList key={item.id} id={item.id} image={item.img[0]} name={item.name} location={item.location} price={item.price} address={item.address} spa={item.allAmenities.spa} dist={item.dist} rating={item.star} />
                    })
            }
        </div>

    )
}

export default Home