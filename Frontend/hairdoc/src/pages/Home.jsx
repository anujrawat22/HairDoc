import CaptionCarousel from '../Components/Carousal';
import SplitWithImage from '../Components/category';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import WomenNavbar from "./women/women_nav.jsx"

function Home(){
    return (
        <div>
            <Navbar/>
            <CaptionCarousel />
            <SplitWithImage/>
            <Footer />
           
        </div>
    )

}

export default Home