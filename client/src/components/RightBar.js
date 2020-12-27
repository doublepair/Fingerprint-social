import React from 'react'
import "../style/rightBar.css"

function RightBar() {
    return (
        <div className="Rightbar">
            
            {/*         IMPORTANT
                This is only for testing pourposes
                The RightBar now contains only an iframe 
                But will be replaced with a custom rightbar
            */}
            <iframe
                title="iframe only for test"
                src=""
                height="100%"
                style={{
                    border: "none",
                    overflow: "hidden"
                }}
                allow="encrypted-media"
                allowTransparency="true"
            >

            </iframe>

        </div>
    )
}

export default RightBar
