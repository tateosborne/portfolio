import '../styles/home.scss'

function About() {
    return (
        <div className="aboutContainer">
            <div className="heroContainer">
                <div className="heroText">
                    <p className="name">tate parmar osborne 👋🏽</p>
                    <hr />
                    <p className="phrase">aspiring full-stack developer with artistic flair</p>
                </div>
                <img className="heroImg" src="../hero.png" alt="hero image" />
            </div>
            <div className="skillset">
                <p>skills stack</p>
                <p>|</p>
                <div className="icons">  
                    <a href="https://python.org" target="_blank">
                        <img src="icons/python.svg" alt="python" />
                    </a>
                    <a href="https://git-scm.com" target="_blank">
                        <img src="icons/git.svg" alt="git" />
                    </a>
                    <a href="https://figma.com" target="_blank">
                        <img src="icons/figma.svg" alt="figma" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src="icons/react.svg" alt="react" />
                    </a>
                    <a href="https://html.spec.whatwg.org" target="_blank">
                        <img src="icons/html.svg" alt="html5" />
                    </a>
                    <a href="https://sass-lang.coms" target="_blank">
                        <img src="icons/sass.svg" alt="sass" />
                    </a>
                    <a href="https://mysql.com" target="_blank">
                        <img src="icons/sql.svg" alt="sql" />
                    </a>
                    <a href="https://swift.org" target="_blank">
                        <img src="icons/swift.svg" alt="swift" />
                    </a>
                    <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank">
                        <img src="icons/c.svg" alt="c (language)" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
