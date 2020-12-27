import {React, useState} from 'react'
import { Avatar } from '@material-ui/core'
import { 
    MdVideoLibrary,
    MdAttachFile,
    MdPhotoAlbum,
} from "react-icons/md";
import "../style/createPost.css"


function CreatePost() {

        //Submit Button Pressed
        const [
            input, 
            setInput
        ] = useState("");

        const submitAction = (e) => {
            e.preventDefault();
            setInput("");
        }
    

    return (
        <div className="CreatePost">
            
            <div className="CreatePost-Form">

                <Avatar />

                <form>
                    <input className="CreatePost-Input"
                        type="text"
                        value={input}
                        onChange={
                            (e) => setInput(e.target.value)
                        }
                        placeholder={"Write something beautiful..."}
                    />

                    <button onClick={submitAction} type="submit">
                        Submit
                    </button>
                </form>

            </div>


            <div className="CreatePost-Attachments">

                    <div className="CreatePost-Attachment-Type">
                        <MdPhotoAlbum 
                            size={20}
                            style={{color:"blue"}}
                        />
                        <h5>Photo</h5>
                    </div>
            
                    <div className="CreatePost-Attachment-Type">
                        <MdVideoLibrary 
                            size={20}
                            style={{color:"red"}}
                        />
                        <h5>Video</h5>
                    </div>
      
                    <div className="CreatePost-Attachment-Type">
                        <MdAttachFile 
                            size={20}
                            style={{color:"green"}}
                        />
                        <h5>File</h5>
                    </div>

            </div>


        </div>
    )
}

export default CreatePost
