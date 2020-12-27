import { Avatar } from '@material-ui/core'
import React from 'react'
import "../style/post.css"
import {
    MdSentimentSatisfied,
    MdSentimentDissatisfied,
    MdModeComment,
    MdShare,
} from "react-icons/md";

function Post({image, username, userPic, title, description}) {
    return (
        <div className="Post">
            
            <div className="Post-Header">
                
                <div className="Post-Header-Profile">
                    <Avatar 
                        className="Post-User-Pic"
                        src={userPic}
                    />
                    <h4>{username}</h4>                
                    
                </div>

                <h2>{title}</h2>
                <h6>12 November 2012 | 17:20</h6>
            </div>

            <div className="Post-Body">
                <h5>{description}</h5>
                    <img src={image} alt="" />
            </div>

            <div className="Post-Bottom">

                <div className="Post-Bottom-Button">
                    <MdSentimentSatisfied 
                        color="green"
                        size={20}
                    /> 
                    {/* <p>Like</p> */}
                </div>

                <div className="Post-Bottom-Button">
                    <MdSentimentDissatisfied
                        color="red"
                        size={20}
                    />
                    {/* <p>Dislike</p> */}
                </div>

                <div className="Post-Bottom-Button">
                    <MdModeComment
                        color="orange"
                        size={20}
                    />
                    {/* <p>Comment</p> */}
                </div>

                <div className="Post-Bottom-Button">
                    <MdShare 
                        color="blue"
                        size={20}
                    /> 
                    {/* <p>Share</p> */}
                </div>
            </div>

        </div>
    )
}

export default Post
