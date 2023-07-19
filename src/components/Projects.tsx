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
                        <img src="../../project-images/placeholder.png" alt="placeholder" />
                        <h4>snake</h4>
                        <p>description</p>
                        <p>[`view` svg] [`github` svg]</p>
                    </div>
                    <div className="project">
                        <div className="title">
                            <img src="../../project-images/uvmaps.png" alt="placeholder" />
                            <h4>uvmaps</h4>
                        </div>
                        <p>description</p>
                        <p>[`view` svg] [`github` svg]</p>
                    </div>
                    <div className="project">
                        <img src="../../project-images/placeholder.png" alt="placeholder" />
                        <h4>twordle</h4>
                        <p>description</p>
                        <p>[`view` svg] [`github` svg]</p>
                    </div>
                    <div className="project">
                        <img src="../../project-images/placeholder.png" alt="placeholder" />
                        <h4>twordle</h4>
                        <p>description</p>
                        <p>[`view` svg] [`github` svg]</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects;
