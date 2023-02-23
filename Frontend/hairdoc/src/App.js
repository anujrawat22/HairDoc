import {Route, Routes} from "react-router-dom"
import './App.css';
import AllRoutes from "./routes/Allroute"
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import CaptionCarousel from './Components/Carousal';

function App() {
  return (
    <div className="App">
       <Navbar/>
    </div>

  );
}

export default App;
