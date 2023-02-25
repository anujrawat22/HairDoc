import Footer from '../Components/Footer';
import MensBeardCut from '../Components/MensBeardCut';
import MensColor from '../Components/MensColoring';
import MensHairCut from '../Components/MensHairCut';
import MensSpa from '../Components/MenSpa';
import Navbar from '../Components/Navbar';

function Home(){
    return (
        <div>
            <Navbar/>
            <MensBeardCut />
            <MensColor/>
            <MensHairCut/>
            <MensSpa/>
            {/* <Footer /> */}
        </div>
    )

}

export default Home