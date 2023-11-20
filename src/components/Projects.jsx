import "./Projects.css"
import personalwebsiteicon from "../assets/personalwebsiteicon.jpg"

function Projects(){
    return (
        <div id="Projects" className = "column">
            <h1>
                Projects
            </h1>
            <div id="ProjectContainer" className="row wrap">
                <div className = "project column">
                    <a href="https://github.com/YichenLiu06/personal-website">
                        <img src={personalwebsiteicon} className="projecticon"/>
                    </a>
                    <h3 className="projecttitle"> 
                        Personal Website 
                    </h3>
                    <p className="projectdescription">Quisque blandit at mi sed ullamcorper. Praesent gravida lorem sit amet augue pharetra molestie. Sed pulvinar felis non congue imperdiet. Quisque iaculis, justo at fermentum varius, sem lacus blandit metus, ut imperdiet justo neque sit amet odio. Aenean vitae rhoncus tellus.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects;