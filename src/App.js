import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Auth from "./components/Auth"
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/auth" element={<Auth/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
