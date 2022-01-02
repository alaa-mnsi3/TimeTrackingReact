import React from 'react'
import person from '../../images/image-jeremy.png'

function HeaderCard() {
    return (
        <div className='HeaderCard'>
            <div className='HeaderCard-img'>
                <img src={person}/>
            </div>
            <div className='HeaderCard-Caption'>
                <p>Report for</p>
                <h3>
                    Jeremy Robson
                </h3>
            </div>
        </div>
    )
}

export default HeaderCard
