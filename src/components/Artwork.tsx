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
                <div className="each-art">
                    <div className="blurb">
                        <h4>Allessio's Life</h4>
                        <p>I created a meticulously designed an animated film that captures a couple days of a fictional chef. I used a camera to capture each frame of the animation. I hand drew each image and cut them out, before meticulously arranging these cutouts to portray the given scene. This project required a dedicated and consistent two-month effort to bring to completion.</p>
                    </div>
                    <div className="artwork">
                        <video controls poster="../thumbnail.png">
                            <source src="../artwork/allessio.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artwork;
