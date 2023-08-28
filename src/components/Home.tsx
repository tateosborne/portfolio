import '../styles/home.scss'
import svgs from '../svgs'

type Props = {
    theme: string;
}

const Home: React.FC<Props> = ({theme}) => {

    return (
        <div className={theme}>
            <div className="home-container" id="home">
                <div className="hero-container">
                    <div className="hero-text">
                        <h1>tate pa<span>rmar os</span>borne 👋🏽</h1>
                        <p className="phrase">full-stack developer with artistic aptitudes</p>
                    </div>
                    <img className="hero-img" src="../hero.png" alt="hero image" />
                </div>
                <div className="skills">
                    <p>skills stack</p>
                    <p>|</p>
                    <div className="icons">  
                        <a href="https://python.org" target="_blank"
                            dangerouslySetInnerHTML={{__html: svgs.python}}>
                        </a>
                        <a href="https://git-scm.com" target="_blank"
                            dangerouslySetInnerHTML={{__html: svgs.git}}>
                        </a>
                        <a href="https://react.dev" target="_blank"
                            dangerouslySetInnerHTML={{__html: svgs.react}}>
                        </a>
                        <a href="https://html.spec.whatwg.org" target="_blank"
                            dangerouslySetInnerHTML={{__html: svgs.html}}>
                        </a>
                        <a href="https://sass-lang.coms" target="_blank"
                            dangerouslySetInnerHTML={{__html: svgs.sass}}>
                        </a>
                        <a href="https://figma.com" target="_blank"
                            dangerouslySetInnerHTML={{__html: svgs.figma}}>
                        </a>
                        <a href="https://mysql.com" target="_blank"
                            dangerouslySetInnerHTML={{__html: svgs.sql}}>
                        </a>
                        <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank"
                            dangerouslySetInnerHTML={{__html: svgs.cLang}}>
                        </a>
                        <a href="https://swift.org" target="_blank"
                            dangerouslySetInnerHTML={{__html: svgs.swift}}>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
