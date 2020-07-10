import React from 'react'
import { Link } from 'react-router-dom'
import { LinkedinOutlined} from '@ant-design/icons';

function Work(){
    return <div className="Work-page">
        <div className="Intro">
            <p className="Intro-text">I'm Tammy, a UX Designer who is curious about the world and creating better products for people. 
                Recent <span className="Intro-highlight"><a className="HCDE-link" href="https://www.hcde.washington.edu/" target="_blank">Human-Centered Design &#38; Engineering</a></span> grad @ UW. 
                Previously designed for <span className="Intro-highlight"><a className="CocoBot-link" href="https://www.cocobot.care/" target="_blank">CocoBot</a></span>.
            </p>
            <p className="Intro-contact-links">
                <a className="Email-link" href="mailto:tammyhho98@gmail.com?Subject=Hi%20Tammy!" target="_top">💌 Let's chat!</a>
                <a className="LinkedIn-link" href="https://www.linkedin.com/in/ho-tammy/" target="_blank"><LinkedinOutlined />  LinkedIn</a> 
            </p>
        </div>

        <div className="Project-previews">

            <div className="Project-preview CocoBot-preview">
                <div className="Preview-text-container">
                    <div className="Tags">
                        <span className="Tag CocoBot-tag">Client Project</span>
                        <span className="Tag CocoBot-tag">UX / UI</span>
                    </div>
                    <h1>CocoBot 🤖</h1>
                    <p className="Preview-description">Designing an AI chatbot that cares for caregivers.</p>
                    <Link className="View-project-link" to="/CocoBot">View project</Link>
                </div>

                <div className="Preview-image-container">
                    <img className="Preview-image" src="/Work media/cocobot_preview.png" alt="CocoBot" />
                </div>

            </div>

            <div className="Project-preview RUMI-preview">
                <div className="Preview-text-container">
                    <div className="Tags">
                        <span className="Tag RUMI-tag">Mobile App Design</span>
                        <span className="Tag RUMI-tag">UX / UI</span>
                    </div>
                    <h1>RUMI 🏠</h1>
                    <p className="Preview-description">Designing a communication app for living with roommates.</p>
                    <Link className="View-project-link" to="/RUMI">View project</Link>
                </div>

                <div className="Preview-image-container">
                    <img className="Preview-image" src="/Work media/RUMI_preview.png" alt="RUMI" />
                </div>

            </div>

            <div className="Project-preview Expedia-preview">
                <div className="Preview-text-container">
                    <div className="Tags">
                        <span className="Tag Expedia-tag">Usability Testing</span>
                        <span className="Tag Expedia-tag">Web</span>
                    </div>
                    <h1>Expedia ✈️</h1>
                    <p className="Preview-description">Evaluating Expedia.com's vacation packages feature.</p>
                    <Link className="View-project-link" to="/Expedia">View project</Link>
                </div>

                <div className="Preview-image-container">
                    <img className="Preview-image" src="/Work media/expedia_preview.png" alt="Expedia" />
                </div>

            </div>

            <div className="Project-preview Plantable-preview">
                <div className="Preview-text-container">
                    <div className="Tags">
                        <span className="Tag Plantable-tag">Physical Prototyping</span>
                    </div>
                    <h1>Plantable 🌱</h1>
                    <p className="Preview-description">Building a beginner's kit and guide for novice plant growers.</p>
                    <Link className="View-project-link" to="/Plantable">View project</Link>
                </div>

                <div className="Preview-image-container">
                    <img className="Preview-image" src="/Work media/plantable_preview.png" alt="Plantable" />
                </div>

            </div>

        </div>
    </div>
}

export default Work