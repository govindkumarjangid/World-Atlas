import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
    return <main className="hero-section main">
        <div className="container grid grid-two-cols">
            <div className="hero-content">
                <h1 className="heading-xl">
                    Explore the World, One Country at a Time.
                </h1>
                <p className="paragraph">
                    Discover the history, culture, and beauty of every nation. Sort, search , and filter throught countries to find the details you.
                </p>
                <NavLink to="/country">
                    <button className="btn btn-darken btn-inline bg-white-box">
                        Start Exploring <FaArrowRightLong />
                    </button>
                </NavLink>
            </div>
            <div className="hero-img">
                <img src="./world1.png" alt="World Beauty"
                    className="banner-image" />
            </div>
        </div> 
    </main>
}