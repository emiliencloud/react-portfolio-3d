import { BsMouse, BsArrowDownShort } from "react-icons/bs";
import "./HeroSection.scss";
import { useEffect } from "react";
import { useAnimate } from "framer-motion";
import moonTexture from "../../assets/images/moon_texture.jpg";

function HeroSection(props: any) {
  const [name, animateName] = useAnimate();

  useEffect(() => {
    animateName(
      "span",
      { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", marginTop: 0 },
      { ease: [0.87, 0.14, 0.15, 0.79], delay: 8, duration: 2 },
    );

    const mouseMove = (e: MouseEvent) => {
      const percentageX = (e.clientX / window.innerWidth) * 100;
      const percentageY = (e.clientY / window.innerHeight) * 100;
      const rangeMin = -40;
      const rangeMax = 40;

      const shadowX = ((rangeMax - rangeMin) / 100) * percentageX + rangeMin;
      const shadowY = ((rangeMax - rangeMin) / 100) * percentageY + rangeMin;
      let circle: any = document.getElementsByClassName("hero__circle")[0];
      circle.style.boxShadow = "inset " + shadowX + "px " + shadowY + "px 60px 15px #9cc1da7e";
    };

    window.addEventListener("mousemove", mouseMove);
  });

  return (
    <div className="hero">
      <div className="hero__section">
        <div className="hero__name" ref={name}>
          <span className="hero__name--stroked">Full - Stack</span>
          <span>Developer</span>
          <span>My 2023 Portfolio</span>
        </div>
      </div>
      <div className="hero__icons">
        <BsMouse className="hero__mouse-icon" />
        <BsArrowDownShort className="hero__arrow-icon" />
      </div>
      <div className="hero__circle">
        <img src={moonTexture} className="hero__moon" alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
