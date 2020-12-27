import React from 'react'
import {Avatar,} from "@material-ui/core"
import '../style/rowElement.css'

function RowElement({src, Icon, title}) {
    return (
        <div className="RowElement">
            {src && <Avatar src={src} />}
            <div className="RowIcon">
                {Icon && <Icon />}
            </div>
            {title}
        </div>
    )
}

export default RowElement
