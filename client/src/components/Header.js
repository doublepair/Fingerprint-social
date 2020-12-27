import React from 'react'
import "../style/header.css"
import {
    IconButton,
} from "@material-ui/core";
import { 
    MdFingerprint, 
    MdSearch, 
    MdHome, 
    MdVideocam,
    MdPerson
} from "react-icons/md";

import {
    IoMdPaper,
    IoMdPaperPlane,
} from "react-icons/io";


function Header() {
    return (
        <div className="Header">
            

            <div className="Header-Left">

                <div className="Header-Logo">
                    <MdFingerprint size={40}/> {/* Inserire il logo qui */}
                </div>

                <div className="Header-Search">
                    <MdSearch size={30}/>
                    <input type="text"
                        placeholder="Search..."
                    />
                </div>

            </div>

    
            <div className="Header-Center">

                <div className="Header-Home-Button">
                    <IconButton>
                        <MdHome size={30}/>
                    </IconButton>
                </div>

                <div className="Header-Video-Button">
                    <IconButton>
                        <MdVideocam size={30}/>
                    </IconButton>
                </div>

                <div className="Heade-rNews-Button">
                    <IconButton>
                        <IoMdPaper size={30}/>
                    </IconButton>
                </div>

            </div>


            <div className="Header-Right">

                <div className="Header-Profile-Button">
                    <IconButton>
                        <MdPerson size={30}/>
                    </IconButton>
                    <h4>Nome Cognome</h4>
                </div>

                <div className="Header-Message-Button">
                    <IconButton>
                        <IoMdPaperPlane size={30} />
                    </IconButton>
                </div>

            </div>


        </div>
    )
}

export default Header
