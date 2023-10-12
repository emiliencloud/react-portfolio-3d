import "./Works.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/images/origami.jpg";
import image2 from "../../assets/images/gestion_prestige.png";
import image3 from "../../assets/images/fdja.jpg";
import image4 from "../../assets/images/netflix_the_queens_gambit.png";
import image5 from "../../assets/images/japan_scene.png";
import image6 from "../../assets/images/owlcrea.jpg";
import image7 from "../../assets/images/low_poly_world.png";
import image8 from "../../assets/images/super_charger.png";

function Works() {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
  });

  useEffect(() => {
    const sliderContainer: any = document?.getElementsByClassName("slider-container")[0];

    const wheelMove = (e: any) => {
      let percentage = ((window.scrollY - sliderContainer.offsetTop) / window.innerHeight) * 100;
      percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;

      setScrollPosition({
        x: -percentage,
      });
    };

    window.addEventListener("wheel", (e) => {
      if (window.scrollY >= window.innerHeight) {
        wheelMove(e);
      }
    });
  });

  const variants = {
    default: {
      x: scrollPosition.x,
    },
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <motion.div className="slider-wrapper" transition={{ type: "tween" }} animate={{ x: `${variants.default.x}vw`, y: 0, z: 0 }}>
          <div className="work">
            <img src={image1} alt="" />
            <span>Origami</span>
          </div>
          <div className="work">
            <img src={image2} alt="" />
            <span>Gestion Prestige</span>
          </div>
          <div className="work">
            <img src={image3} alt="" />
            <span>FDJA</span>
          </div>
          <div className="work">
            <img src={image4} alt="" />
            <span>TQG</span>
          </div>
          <div className="work">
            <img src={image5} alt="" />
            <span>Tera</span>
          </div>
          <div className="work">
            <img src={image6} alt="" />
            <span>OwlCrea</span>
          </div>
          <div className="work">
            <img src={image7} alt="" />
            <span>LowPoly</span>
          </div>
          <div className="work">
            <img src={image8} alt="" />
            <span>Super Charger</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Works;
