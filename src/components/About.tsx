import '../styles/about.scss'
import svgs from '../svgs'

function About() {

    return (
        <div className="about-container" id="about">
            <div className="content-container">
                <img src="../../emojis/memoji-coding.png" alt="coding cartoon" />
                <div className="body-text">
                    <h2>ABOUT</h2>
                    <h3>a brit that scripts</h3>
                    <p>Hey! I am a England-born 22 year old developer. I graduated from the <span>University of Vermont</span> in 2023 with a Bachelors of Science in <span>Computer Science</span> and an <span>Art Studio</span> Minor.</p>
                    <p>I've hobbies in soccer ⚽️, travelling ✈️, creating art 🎨, cooking 🧑🏽‍🍳, and speed-solving Rubik's cubes <span dangerouslySetInnerHTML={{__html: svgs.rubikscube}}></span></p>
                    <p>In my work, I obsess over <span>user experience</span> and <span>logical</span> structure.</p>
                </div>
            </div>
        </div>
    )
}

export default About
