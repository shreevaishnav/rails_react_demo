import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
import Navigationbar from './Navigationbar';


function App() {
  return (
    <div className="App">
       <div className="App">
        <Router>
            <Navigationbar />
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route path='/About' element={<About />}/>
                <Route path='/Contact' element={<Contact />}/>
                
            </Routes>
        </Router>
    </div>
    </div>
  );
}

export default App;
