import React from 'react'
import "../style/flashPostContainer.css"
import FlashPost from "./FlashPost"

function FlashPostContainer() {
    return (
        <div className="FlashPostContainer">
            
            <FlashPost 
                image="https://picsum.photos/300/200"
                user="https://picsum.photos/300"
                title="Post Title 1"
            />

            <FlashPost 
                image="https://picsum.photos/300/"
                user="https://picsum.photos/300"
                title="Post Title"
            />

            <FlashPost 
                image="https://picsum.photos/400"
                user="https://picsum.photos/300"
                title="Post Title"
            />

            <FlashPost 
                image="https://picsum.photos/500/200"
                user="https://picsum.photos/300"
                title="Post Title"
            />


            

             <FlashPost 
                image="https://picsum.photos/200/"
                user="https://picsum.photos/300"
                title="Post Title"
            />

            {/*For now set max 5 frashposts, then will be fixed with a carousel*/}
            {/*<FlashPost 
                image="https://picsum.photos/600/400"
                user="https://picsum.photos/300"
                title="Post Title"
            /> */}

            {/* thank you Lorem Picsum (https://picsum.photos/) */}

        </div>
    )
}

export default FlashPostContainer
