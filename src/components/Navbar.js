import React from "react"
import logo from "../images/logo.png"

const Navbar = () => {
    return(
        <nav>
            <img src={logo} className="nav-logo" alt=""/>
            <div className="nav-list">
                <ul>
                    <a><li>Home</li></a>
                    <a><li>Who Are We</li></a>
                    <a><li>Subjects</li></a>
                    <a><li>Prices</li></a>
                    <a><li>Contact</li></a>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar