import React from 'react'
import "./HotelImages.css"

import { mainData } from '../../data/data'
function HotelImages() {
    const getRandomImages = (arr, n) => {
        const images = arr.sort(() => 0.5 - Math.random())
        return images.slice(0, n)
    }
    const selectedImages = getRandomImages(mainData, 8)
    return (
        <div className='grid-wrapper'>
            {
                selectedImages.map((image) => {
                    return (
                        <div>
                            <img src={image.image} alt="" />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default HotelImages