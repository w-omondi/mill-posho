import './App.css';
import Home from './components/home';
import { Link, Router } from '@reach/router';
import About from './components/About';
import Contact from './components/Contact';
import Mychart from './components/Mychart';


function App() {
  return (
    <>
      <div className="nav" style={{ width: "100%", backgroundColor: "teal", height: "10vh", margin: "0",padding:"10px",color:"white" }}>
        <Link to='/'><span>home</span></Link>
        <Link to="/about"> <span>about</span></Link>
        <Link to="/contact"> <span>contact</span></Link>
        <Link to="/chart"> <span>chart</span></Link>
      </div>
      <div>
        <Router style={{height:"90vh"}}>
          <Home path="/" />
          <About path="/about" />
          <Contact path="/contact" />
          <Mychart path="/chart"/>
        </Router>
        </div>

    </>
  );
}

export default App;
