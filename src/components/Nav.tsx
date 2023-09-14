import '../styles/nav.scss'
import svgs from '../svgs'

type Props = {
    theme: string;
    toggleTheme: () => void;
    sideBar: boolean;
    setSideBar: (arg0: boolean) => void;
    toggleSideBar: () => void;
}

const Nav: React.FC<Props> = ({theme, toggleTheme, sideBar, setSideBar, toggleSideBar}) => {
    var device: string = "";

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        device = "mobile";
    } else {
        device = "desktop";
    }

    
    
    return (
        device === "desktop" ? (
            <div className={theme}>
                <div className={device}>
                    <div className="nav-bar">
                        <p>tate parmar osborne</p>
                        <div className="nav-items">
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#projects">Projects</a>
                            <a href="#artwork">Artwork</a>
                            <a href="#contact">Contact</a>
                            <button onClick={toggleTheme}
                                dangerouslySetInnerHTML={theme === "light-theme" ? {__html: svgs.moon} : {__html: svgs.sun}}>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className={theme}>
                <div className={device}>
                    <div className="nav-bar">
                    {
                        sideBar ? (
                            <div className="nav-shown">
                                <button onClick={toggleSideBar}
                                    dangerouslySetInnerHTML={{__html: svgs.x}}>
                                </button>
                                <p>tate parmar osborne</p>
                                <a href="#home" onClick={() => setSideBar(false)}>Home</a>
                                <a href="#about" onClick={() => setSideBar(false)}>About</a>
                                <a href="#projects" onClick={() => setSideBar(false)}>Projects</a>
                                <a href="#artwork" onClick={() => setSideBar(false)}>Artwork</a>
                                <a href="#contact" onClick={() => setSideBar(false)}>Contact</a>
                                <button onClick={toggleTheme}
                                    dangerouslySetInnerHTML={theme === "light-theme" ? {__html: svgs.moon} : {__html: svgs.sun}}>
                                </button>
                            </div>
                        ) : (
                            <div className="nav-hidden">
                                <button onClick={toggleSideBar}
                                    dangerouslySetInnerHTML={{__html: svgs.menu}}>
                                </button>
                            </div>
                        )
                    }
                    </div>
                </div>
            </div>
        )
    )
}

export default Nav;
