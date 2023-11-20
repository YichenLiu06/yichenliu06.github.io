import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.jsx"
import AboutMe from "./components/AboutMe.jsx"
import Projects from "./components/Projects.jsx"

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Projects/>
    </div>
  );
}

export default App;
