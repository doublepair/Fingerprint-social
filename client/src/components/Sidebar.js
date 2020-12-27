import React from 'react'
import "../style/sidebar.css"
import RowElement from './RowElement'
import { 
    FcCompactCamera, 
    FcCamcorderPro,
    FcElectronics, 
    FcShop,
    FcGlobe,
} from "react-icons/fc";

import {MdPerson} from "react-icons/md"

function Sidebar() {
    return (
        <div className="Sidebar">
            <RowElement Icon={MdPerson} title="Nome Cognome"/>
            <RowElement Icon={FcCompactCamera} title="Photogram"/>
            <RowElement Icon={FcCamcorderPro} title="Videogram"/>
            <RowElement Icon={FcElectronics} title="Tech"/>
            <RowElement Icon={FcShop} title="Market"/>
            <RowElement Icon={FcGlobe} title="Web"/>
        </div>
    )
}

export default Sidebar
