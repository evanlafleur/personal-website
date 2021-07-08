import gsap, { Power1 } from "gsap";
import { Power4 } from 'gsap/gsap-core';
import React, { useEffect } from 'react'
import './Hero.sass'

function Hero() { 
    useEffect(() => {
        gsap.to(".Hero__scroll > div", {
            y: window.innerWidth > 480 ? 37 : 33.5,
            ease: Power1.easeInOut,
            repeat: -1,
            duration: 0.8,
            yoyo: true
        })
        gsap.to(".Hero__blink", {
            opacity: 0,
            ease: Power4.easeInOut,
            repeat: -1,
            duration: 0.6,
            yoyo: true
        })
    }, [])

    return (
        <div className="Hero">
            <div className="Hero__name">Evan La Fleur</div>
            <div className="Hero__container">
                <div className="Hero__title">Hello! <span className="Hero__title--br"></span> My Name Is Evan</div>
            </div>
        </div>
    )
}

export default Hero