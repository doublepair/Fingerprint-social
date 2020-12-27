import { Avatar } from '@material-ui/core'
import React from 'react'
import "../style/flashPost.css"

function FlashPost({ image, user, title }) {
    return (
        <div 
            className="FlashPost"
            style={{ backgroundImage:`url(${image})`}}
        >
            
            <Avatar
                src={user} 
                className="FlashPost-Avatar"
            /> 
            <h3> {title} </h3>

        </div>
    )
}

export default FlashPost
