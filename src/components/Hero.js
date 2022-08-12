

import image_22 from "../assets/hero_imgs/image 22.png"
import image_23 from "../assets/hero_imgs/image 23.png"
import image_24 from "../assets/hero_imgs/image 24.png"
import image_25 from "../assets/hero_imgs/image 25.png"
import image_26 from "../assets/hero_imgs/image 26.png"
import image_27 from "../assets/hero_imgs/image 27.png"
import image_28 from "../assets/hero_imgs/image 28.png"
import image_29 from "../assets/hero_imgs/image 29.png"
import image_30 from "../assets/hero_imgs/image 30.png"


function Hero() {
    return (
        <div className="hero-collage-container">
            <div className="collage-col cc-01"><img src={image_28} alt="hero-img"/></div>
            <div className="collage-col cc-02"><img src={image_30} alt="hero-img"/><img src={image_26} alt="hero-img"/></div>
            <div className="collage-col cc-03"><img src={image_27} alt="hero-img"/><img src={image_29} alt="hero-img"/></div>
            <div className="collage-col cc-04"><img src={image_22} alt="hero-img"/><img src={image_23} alt="hero-img"/></div>
            <div className="collage-col cc-05"><img src={image_25} alt="hero-img"/><img src={image_24} alt="hero-img"/></div>
        </div>
    )
}

export default Hero