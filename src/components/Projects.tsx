import '../styles/projects.scss'
import svgs from '../svgs'

function Projects() {

    return (
        <div className="projects-container" id="projects">
            <div className="content-container">
                <h2>PROJECTS 🛠️</h2>
                <h3>check out some projects I've made!</h3>
                <div className="project-list">
                    <div className="project">
                        <div className="title">
                            <img src="../../project-images/snake.png" alt="snake" />
                            <h4 style={{backgroundColor: "rgb(65, 86, 178)"}}>snake</h4>
                        </div>
                        <p>Quizlet organized a competition to design a new study game for their website. I partnered with two friends and engaged in two months of frequent development on the project. </p>
                        <div className="view-more">
                            <a href=""
                                dangerouslySetInnerHTML={{__html: svgs.view}}>
                            </a>
                            <a href=""
                                dangerouslySetInnerHTML={{__html: svgs.github}}>
                            </a>
                        </div>
                    </div>
                    <div className="project">
                        <div className="title">
                            <img src="../../project-images/uvmaps.png" alt="uvmaps" />
                            <h4 style={{backgroundColor: "rgb(31, 81, 42)"}}>uvmaps</h4>
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
                            <img src="../../project-images/placeholder.png" alt="placeholder" />
                            <h4 style={{backgroundColor: "#000"}}>twordle</h4>
                        </div>
                        <p>description</p>
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
                            <h4>twordle</h4>
                        </div>
                        <p>description</p>
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
