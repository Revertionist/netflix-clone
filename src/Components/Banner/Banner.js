import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'>Beaky Plinders</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>

                </div>
                <h1 className='description'>My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. This is my confession.</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
