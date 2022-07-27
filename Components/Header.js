import React from "react"

export default function Header(){
    return (
        <div className="header-content">
        <img/>
            <h1>Emily Caroe</h1>
            <h3>Frontend Developer</h3>
            <div className="web-link">
                <a href="http://ecaroedesign.github.io/personal">My Website</a>
            </div>
            <div className="btn">
                    <button className="email-btn">Email</button>
                    <button className="linkedin-btn">LinkedIn</button>
            </div>
        </div>
    )
}