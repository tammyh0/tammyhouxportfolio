import React from 'react'
import { Link } from 'react-router-dom'

function CocoBot(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    return <div className="CocoBot-page-container Page">
        this is coco

        <div className="Other-projects-container">
            <div className="Other-projects-title">
                Other projects—
            </div>
            <div className="Other-projects-list">
                <div className="Other-project"><Link className="Other-project-name" to="/rumi">RUMI</Link></div>
                <div className="Other-project"><Link className="Other-project-name" to="/expedia">Expedia</Link></div>
                <div className="Other-project"><Link className="Other-project-name" to="/plantable">Plantable</Link></div>

            </div>
        </div>
    </div>
}

export default CocoBot