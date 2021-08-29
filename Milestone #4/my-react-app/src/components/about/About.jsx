import "./about.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function About() {
    const textRef = useRef();
  
    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["Who is", "Let's find out about"],
      });
    }, []);

    return (
        <div className="about" id="about">
            
            <div className="left">
            <h1><span ref={textRef}></span> Diksha</h1>
                <div className="wrapper">
                    <p> A 3rd year university student, majoring in IT. Currently woking on react java and NLP. Working towards becoming a front-end developer, while juggling my way through life. A dreamer and an enthusiast. Other than that, a bibliophile, a not-so-famous writer and a photgrapher. I enjoy travelling, music and sipping on tea while my mind looks for yet another escape plan. </p>

                </div>
                <a href="#projects">
                    <img src="images/down.png" alt=""></img>
                </a>
            </div>
            <div className="right">
            <div className="imgContainer">
                    <img src="images/diksha4.jpeg" alt=""/>
                </div>
            
                
            </div>
        </div>
    )
}
           