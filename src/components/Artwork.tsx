import '../styles/artwork.scss'
import svgs from '../svgs'

function Artwork() {

    return (
        <div className="artwork-container" id="artwork">
            <div className="header-container">
                <h2>ARTWORK 🎨</h2>
                <h3>check out some of my artwork!</h3>
            </div>
            <div className="content-container">
                <div className="allessio">
                    <video controls poster="../thumbnail.png">
                        <source src="../artwork/allessio.mp4" type="video/mp4" />
                    </video>
                    <p>summary of allessio</p>
                </div>
            </div>
        </div>
    )
}

export default Artwork;
