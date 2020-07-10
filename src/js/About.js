import React from 'react'

function About(){
    return <div className="About-page-container Page">
        <div className="About-photo-container">
            <img className="Tammy-polaroid" src="/About media/compressed_tammy_polaroid.png" alt="Tammy Ho" />
        </div>

        <div className="About-bio-container">
            <p className="Bio-title">hi, thanks for checking out my work!</p>
            <p className="Bio-description"> I design user experiences and have a background in user research. Recently, I graduated from University of Washington with a degree in Human-Centered Design & Engineering.</p>
            <p className="Bio-description">I appreciate simple, intuitive, and beautiful experiences. I love design because it fosters innovation, never-ending learning, and brings people together. Most importantly, I get to be a part of something greater than myself by bringing ease, value, and joy to people's lives - at any scale.</p>
            <p className="Bio-description">When I'm not designing, I'm probably reading, exploring new music, or tackling my seasonal bucket list.</p>
            <p className="Bio-description">Looking for positions in UX/UI or Product Design starting June 2020!</p>
            <p className="Bio-description Bio-contact">email ~ <a href="mailto:tammyhho98@gmail.com?Subject=Hi%20Tammy!" target="_top">tammyhho98@gmail.com</a></p>
            <p className="Bio-description Bio-contact">linkedin ~ <a href="https://www.linkedin.com/in/ho-tammy" target="_blank">https://www.linkedin.com/in/ho-tammy</a></p>
        </div>

    </div>
}

export default About