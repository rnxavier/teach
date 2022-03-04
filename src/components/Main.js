import React from "react"

const Main = () => {
    return(
        <div className="main-background">
            <h1 className="main-title">Welcome to Teach</h1>
            <h2 className="main-slogan">Online tutoring services for 8 - 18 year olds</h2>
            <h2 className="about-us-title">Why Choose Us?</h2>
            <div className="about-us-p">
                <p>We are Russell Group university graduates with expertise in Biology and Physics, now working in the technology industry.
                We are passionate about providing children from all backgrounds with high-quality tuition and accessible learning, so that they can reach their full potential.
                For those who are starting university applications, we can also offer advice and personal statement assistance.</p>
            </div>
            <button variant="contained" className="about-us-btn">
                More about us
            </button>

        </div>
    )
}

export default Main