import React from 'react'
import { Link } from 'react-router-dom'

function Rumi(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    return <div className="Rumi-page-container Page">
        this is rumi

        <div className="Other-projects-container">
            <div className="Other-projects-title">
                Other projects—
            </div>
            <div className="Other-projects-list">
                <div className="Other-project"><Link className="Other-project-name" to="/cocobot">CocoBot</Link></div>
                <div className="Other-project"><Link className="Other-project-name" to="/expedia">Expedia</Link></div>
                <div className="Other-project"><Link className="Other-project-name" to="/plantable">Plantable</Link></div>

            </div>
        </div>
    </div>
}

export default Rumi