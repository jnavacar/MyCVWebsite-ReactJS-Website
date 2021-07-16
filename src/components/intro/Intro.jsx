import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(
            textRef.current, { 
                showCursor: true, 
                backDelay: 1500,
                backSpeed: 60,
                strings: ['Student', 'Engineer', 'Lover' ] 
        });

    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img className="portrait" src="assets/portrait.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Jose Navarrete Carbonell</h1>
                    <h3>Software <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/arrow_down.png" alt=""></img>
                </a>
            </div>
        </div>
    )
}
