import React from "react";
import '../styles/about.scss'
import svgs from '../svgs'

type Props = {
    theme: string;
    sideBar: boolean;
    setSideBar: (arg0: boolean) => void;
}

const About: React.FC<Props> = ({theme, sideBar, setSideBar}) => {
    let blur = "no-blur";

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && sideBar) {
       blur = "blur";
    }

    const today = new Date();
  
    let age = today.getFullYear() - 2001;
    
    const monthDiff = today.getMonth() - 3;
    const dayDiff = today.getDate() - 12
    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return (
        <div className={theme}>
            <div className={blur}>
                <div className="about-container" id="about" onClick={() => setSideBar(false)}>
                    <div className="header-container">
                        <h2>ABOUT 👤</h2>
                        <h3>a brit that scripts</h3>
                    </div>
                    <div className="content-container">
                        <img src="../../emojis/memoji-coding.png" alt="coding cartoon" />
                        <div className="body-text">
                            <p>Hey! I am an England-born {age} year-old developer. I graduated from the <span>University of Vermont</span> in 2023 with a Bachelors of Science in <span>Computer Science</span> and an <span>Art Studio</span> Minor.</p>
                            <p>I am currently pursuing my Master's of Science in <span>Computer Science</span> at <span>Georgia Tech</span>, expecting to graduate in the spring of 2026.</p>
                            <p>I have hobbies in soccer ⚽️, travelling ✈️, creating art 🎨, cooking 🧑🏽‍🍳, and speed-solving Rubik's cubes <span dangerouslySetInnerHTML={{__html: svgs.rubikscube}}></span></p>
                            <p>In my work, I obsess over <span>user experience</span> and <span>logical</span> structure.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
