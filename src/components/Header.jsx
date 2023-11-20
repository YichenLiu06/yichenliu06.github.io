import portrait from "../assets/portrait.jpg";
import "./Header.css";

function Header(props){
    return (
        <div id = "Header" className="column">
            <h2>Yichen Liu</h2>
            <div className = "row">
                <img id = "portrait" src={portrait} alt="portrait"/>
                <div className = "column">
                    <h1> Hello, </h1>
                    <h2> welcome to my website. Take a look around.</h2>
                    <ul className = "column">
                        <li> 
                            <div className = "marker">
                                Home <p>1</p>
                            </div>
                        </li>
                        <li> 
                            <div className = "marker">
                                About Me <p>2</p>
                            </div>
                        </li>
                        <li>
                            <div className = "marker">
                                Projects <p>3</p>
                            </div>
                        </li>
                        <li> 
                            <div className = "marker">
                                Contact <p>4</p>
                            </div>
                            </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;