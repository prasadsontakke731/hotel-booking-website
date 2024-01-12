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

        </>
    )
}

export default HotelDetails