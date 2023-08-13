import '../styles/projects.scss'
import svgs from '../svgs'

function Projects() {

    return (
        <div className="projects-container" id="projects">
            <div className="content-container">
                <div className="header-container">
                    <h2>PROJECTS 🛠️</h2>
                    <h3>check out some projects I've made!</h3>
                </div>
                <div className="project-list">
                    <div className="project">
                        <div className="title">
                            <img src="../../project-images/snake.png" alt="snake" />
                            <h4 style={{textDecorationColor: "rgb(65, 86, 178)"}}>snake</h4>
                        </div>
                        <p>Quizlet organized a competition to design a new study game for their website. I partnered with two friends and engaged in two months of frequent development on the project. </p>
                        <div className="view-more">
                            <a href=""
                                dangerouslySetInnerHTML={{__html: svgs.view}}>
                            </a>
                            <a href=""
                                dangerouslySetInnerHTML={{__html: svgs.github}}>
                            </a>
                            <a href="" target="_blank"
                                dangerouslySetInnerHTML={{__html: svgs.link}}>
                            </a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="title">
                            <img src="../../project-images/uvmaps.png" alt="uvmaps" />
                            <h4 style={{textDecorationColor: "rgb(31, 81, 42)"}}>uvmaps</h4>
                        </div>
                        <p>In collaboration with four developers, we crafted an iOS app using SwiftUI. Our aim was to aid University of Vermont students in locating buildings and reaching classes punctually. </p>
                        <div className="view-more">
                            <a href=""
                                dangerouslySetInnerHTML={{__html: svgs.view}}>
                            </a>
                            <a href="https://github.com/tateosborne/UVMap" target="_blank"
                                dangerouslySetInnerHTML={{__html: svgs.github}}>
                            </a>
                            <a href="https://uvmaps.dev" target="_blank"
                                dangerouslySetInnerHTML={{__html: svgs.link}}>
                            </a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="title">
                            <img src="../../project-images/twordle2.png" alt="placeholder" />
                            <h4 style={{textDecorationColor: "#C08C8C"}}>twordle</h4>
                        </div>
                        <p>Built using Flutter, Twordle is my inspired creation after enjoying Wordle mornings. This individual project prioritizes seamless, enjoyable user experiences.</p>
                        <div className="view-more">
                            <a href=""
                                dangerouslySetInnerHTML={{__html: svgs.view}}>
                            </a>
                            <a href="" target="_blank"
                                dangerouslySetInnerHTML={{__html: svgs.github}}>
                            </a>
                            <a href="" target="_blank"
                                dangerouslySetInnerHTML={{__html: svgs.link}}>
                            </a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="title">
                            <img src="../../project-images/placeholder.png" alt="placeholder" />
                            <h4>coming soon!</h4>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec condimentum magna. Sed ut mollis est. Aliquam dolor eros, molestie a ultricies rutrum, placerat eget quam. Nunc purus leo, dignissim et euismod.</p>
                        <div className="view-more">
                            <a href=""
                                dangerouslySetInnerHTML={{__html: svgs.view}}>
                            </a>
                            <a href="https://github.com/tateosborne/UVMap" target="_blank"
                                dangerouslySetInnerHTML={{__html: svgs.github}}>
                            </a>
                            <a href="https://uvmaps.dev" target="_blank"
                                dangerouslySetInnerHTML={{__html: svgs.link}}>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
