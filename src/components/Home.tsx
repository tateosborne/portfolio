import '../styles/home.scss'
import svgs from '../svgs'

type Props = {
    theme: string;
    sideBar: boolean;
    setSideBar: (arg0: boolean) => void;
}

const Home: React.FC<Props> = ({theme, sideBar, setSideBar}) => {
    var blur = "no-blur";

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && sideBar) {
       blur = "blur";
    }

    return (
        <div className={theme}>
            <div className={blur}>
                <div className="home-container" id="home" onClick={() => setSideBar(false)}>
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
                            <span
                                dangerouslySetInnerHTML={{__html: svgs.python}}>
                            </span>
                            <span
                                dangerouslySetInnerHTML={{__html: svgs.git}}>
                            </span>
                            <span
                                dangerouslySetInnerHTML={{__html: svgs.react}}>
                            </span>
                            <span
                                dangerouslySetInnerHTML={{__html: svgs.figma}}>
                            </span>
                            <span
                                dangerouslySetInnerHTML={{__html: svgs.sql}}>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
