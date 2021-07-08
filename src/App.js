import { useEffect } from 'react';
import gsap, { Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero.js'
import Footer from './components/Footer/Footer'

function App() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const containers = gsap.utils.toArray(".App > *:nth-child(N+5):nth-last-child(n+2)")
        containers.forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom"
                },

                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: Power2.easeInOut
            })
        })
    }, [])

    return (
        <div className="App">            
            <Hero />
            <Footer />
        </div>
    );
}

export default App;