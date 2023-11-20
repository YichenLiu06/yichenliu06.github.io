import "./AboutMe.css"
import pythonlogo from "../assets/pythonlogo.png"
import cpplogo from "../assets/cpplogo.png"
import htmllogo from "../assets/htmllogo.png"
import javascriptlogo from "../assets/javascriptlogo.png"
import javalogo from "../assets/javalogo.png"

function AboutMe(props){
    return (
        <div id="AboutMe" class = "column">
            <div className = "row"> 
                <h1> About Me</h1>
            </div> 
            <div className = "column content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum pretium lectus, vitae porta tortor rhoncus vel. Maecenas massa massa, volutpat sed viverra a, vehicula laoreet est. Morbi ullamcorper ac sapien quis commodo. Vivamus tellus nisl, blandit at volutpat id, tincidunt id dui. Pellentesque arcu mauris, tempor quis nibh ac, efficitur volutpat nibh. Nam vel nibh tempus, blandit ipsum quis, imperdiet massa. Sed lobortis orci eu lectus porttitor, sit amet lobortis ligula bibendum. Quisque blandit at mi sed ullamcorper. Praesent gravida lorem sit amet augue pharetra molestie. Sed pulvinar felis non congue imperdiet. Quisque iaculis, justo at fermentum varius, sem lacus blandit metus, ut imperdiet justo neque sit amet odio. Aenean vitae rhoncus tellus.</p>
            </div>
            <div className = "row">
                <div className = "column">
                    <h2> Skills </h2>
                    <ul id="Skills" class = "row wrap">
                        <li class = "row">
                            <img src={pythonlogo} className = "icon"></img>
                            <h3>Python <span className = "space">4+ years </span></h3>
                        </li>    
                        <li class = "row">
                            <img src={cpplogo} className = "icon"></img>
                            <h3>C++ <span className = "space">4+ years </span></h3>
                        </li>    
                        <li class = "row">
                            <img src={javalogo} className = "icon"></img>
                            <h3>Java <span className = "space">2 years </span></h3>
                        </li>    
                        <li class = "row">
                            <img src={htmllogo} className = "icon"></img>
                            <h3>HTML/CSS <span className = "space"> 1 year </span></h3>
                        </li>    
                        <li class = "row">
                            <img src={javascriptlogo} className = "icon"></img>
                            <h3>Javascript <span className = "space">1 year </span></h3>
                        </li>    
                    </ul> 
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default AboutMe;