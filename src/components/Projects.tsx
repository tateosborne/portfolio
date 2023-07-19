import '../styles/projects.scss'
import svgs from '../svgs'

function Projects() {

    return (
        <div className="projects-container" id="projects">
            <div className="content-container">
                <h2>PROJECTS 🛠️</h2>
                <p>check out some projects I've made!</p>
                <div className="project-list">
                    <div className="project">
                        <img src="../../project-images/snake2.png" alt="uvmaps" />
                        <h3>snake</h3>
                    </div>
                    <div className="project">
                        <img src="../../project-images/uvmaps.png" alt="uvmaps" />
                        <h3>uvmap</h3>
                    </div>
                    <div className="project">
                        <h3>twordle</h3>
                    </div>
                    <div className="project">
                        <h3>twordle</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects;
