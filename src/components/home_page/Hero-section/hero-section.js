// democ ,mdvdlk
import "./hero-section.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import Slider from "./slider/slider";
import Banner from "./banner/banner";
const HeroSection = () =>{
    return(
        <div className="hero-section">
            <h1 className="">Hello</h1>
            <Slider />
            <Banner />
        </div>
    )
}
export default HeroSection;