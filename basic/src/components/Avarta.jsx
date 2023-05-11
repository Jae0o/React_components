import React from 'react'

export default function Avarta({ Image, New }) {
    return (
        <div className='Avarta'>
            <img src={Image} alt="avarta" className="ProfileImage" />
            {New && <small className="ProfileNew">new</small>}
        </div>
    )
}
