import Slider from "react-slick"; // Import the slider
import "slick-carousel/slick/slick.css"; // Slick slider default styles
import "slick-carousel/slick/slick-theme.css"; // Slick slider theme styles
import "./slick.css"
import logo1 from "../Slick/logos/logo1.png"
import logo2 from "../Slick/logos/logo2.png"
import logo3 from "../Slick/logos/logo3.png"
import logo4 from "../Slick/logos/logo4.png"
import logo5 from "../Slick/logos/logo5.png"
import logo6 from "../Slick/logos/logo6.png"
import logo7 from "../Slick/logos/logo7.png"
import logo8 from "../Slick/logos/logo8.png"
 
    export default function Slick() {
        const settings = {
          dots: true,     // Show dots for navigation
          infinite: true, // Infinite loop sliding
          speed: 2000,     // Speed of slide transition
          slidesToShow: 4, // Number of logos visible at a time
          slidesToScroll: 1, // Scroll one at a time
          autoplay: true,    // Enable automatic sliding
          autoplaySpeed: 2000, // Time between slides (in ms)
          arrows: false,       // Disable next/prev arrows
        };
      
        return (
            <div className="sponsors-slider">
               <div className="paper-effect">
            <h2>They Trust Us</h2>
            </div>
            <Slider {...settings}>
              <div>
                <img src={logo1} alt="Sponsor 1" />
              </div>
              <div>
                <img src={logo2} alt="Sponsor 2" />
              </div>
              <div>
                <img src={logo3} alt="Sponsor 3" />
              </div>
              <div>
                <img src={logo4} alt="Sponsor 4" />
              </div>
              <div>
                <img src={logo5} alt="Sponsor 5" />
              </div>
              <div>
                <img src={logo6} alt="Sponsor 6" />
              </div>
              <div>
                <img src={logo7} alt="Sponsor 7" />
              </div>
              <div>
                <img src={logo8} alt="Sponsor 8" />
              </div>
            </Slider>
          </div>
        );
      }
      
