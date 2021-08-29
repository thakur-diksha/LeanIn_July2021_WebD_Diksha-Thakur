import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
    const textRef = useRef();
  
    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["Student", "Engineer", "Learner", "Writer", "Photographer"],
      });
    }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="images/diksha.png" alt=""/>
                </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2> Hi! I am</h2>
                    <h1>Diksha Thakur</h1>
                    <h3><span ref={textRef}></span></h3>
                    
                </div>

                <a href="#about">
                    <img src="images/down.png" alt=""></img>
                </a>
            </div>
        </div>
    )
}
