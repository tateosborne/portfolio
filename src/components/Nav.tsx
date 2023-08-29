import '../styles/nav.scss'
import svgs from '../svgs'

type Props = {
    theme: string;
    toggleTheme: () => void;
}

const Nav: React.FC<Props> = ({theme, toggleTheme}) => {

    return (
        <div className={theme}>
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
    )
}

export default Nav;
