import '../styles/nav.scss'
import svgs from '../svgs'

function Nav() {

    return (
        <div className="nav-bar">
            <p>tate parmar osborne • 👨🏽‍💻</p>
            <div className="nav-items">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#artwork">Artwork</a>
                <a href="#contact">Contact</a>
                <button
                    dangerouslySetInnerHTML={{__html: svgs.moon}}>
                </button>
            </div>
        </div>
    )
}

export default Nav;
