import React from 'react'
import "../style/feed.css"
import CreatePost from "./CreatePost"
import FlashPostContainer from "./FlashPostContainer"
import Post from "./Post"

function Feed() {
    return (
        <div className="Feed">
            
            <FlashPostContainer /> 

            <CreatePost />

            <Post 
                image="https://picsum.photos/200"
                username="Nome Cognome"
                userPic="https://picsum.photos/100"
                title="Post Title"
                description="A description of the post"
            />

            <Post 
                image="https://picsum.photos/300"
                username="Nome Cognome"
                userPic="https://picsum.photos/100"
                title="Post Title"
                description="A description of the post"
            /> 

            <Post 
                image="https://picsum.photos/400"
                username="Nome Cognome"
                userPic="https://picsum.photos/100"
                title="Post Title"
                description="A description of the post"
            /> 

            <Post 
                image="https://picsum.photos/500"
                username="Nome Cognome"
                userPic="https://picsum.photos/100"
                title="Post Title"
                description="A description of the post"
            /> 

            <Post 
                image="https://picsum.photos/600"
                username="Nome Cognome"
                userPic="https://picsum.photos/100"
                title="Post Title"
                description="A description of the post"
            />
        </div>
    )
}

export default Feed
