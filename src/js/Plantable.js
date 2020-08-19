import React from 'react'
import { Link } from 'react-router-dom'

function Plantable(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    return <div className="Plantable-page-container Page">
        this is plantable

        <div className="Other-projects-container">
            <div className="Other-projects-title">
                Other projects—
            </div>
            <div className="Other-projects-list">
                <div className="Other-project"><Link className="Other-project-name" to="/cocobot">CocoBot</Link></div>
                <div className="Other-project"><Link className="Other-project-name" to="/rumi">RUMI</Link></div>
                <div className="Other-project"><Link className="Other-project-name" to="/expedia">Expedia</Link></div>
            </div>
        </div>
    </div>
}

export default Plantable