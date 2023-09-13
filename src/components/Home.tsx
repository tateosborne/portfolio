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
                        <a href="https://figma.com" target="_blank"
                            dangerouslySetInnerHTML={{__html: svgs.figma}}>
                        </a>
                        <a href="https://mysql.com" target="_blank"
                            dangerouslySetInnerHTML={{__html: svgs.sql}}>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
