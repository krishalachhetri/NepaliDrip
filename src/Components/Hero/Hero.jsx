import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>"THREADED WITH OUR CULTURE"</h2>
            <div>
                <div className="hand-hand-icon">
                    <p style={{ fontSize: "18px", marginTop: "10px", color: "#555", textAlign: "left" }}>Every stitch whispers stories of our ancestors 🇳🇵</p>
                </div>
            </div>
            <div className="hero-latest-btn">
                <div>Trendy Collection</div>
                <img src={arrow_icon} alt=""/>
            </div>
        </div>
        <div className="hero-right">
        <img src={hero_image} alt=""/>
        </div>
    </div>

  )
}

export default Hero