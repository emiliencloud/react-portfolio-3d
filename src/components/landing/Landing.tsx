import "./Landing.scss";
import { useEffect } from "react";
import { stagger, useAnimate } from "framer-motion";

function Landing() {
  const [home, animateHome] = useAnimate();

  useEffect(() => {
    animateHome(
      "div",
      { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", marginTop: 0 },
      { ease: [0.87, 0.14, 0.15, 0.79], delay: stagger(0.3), duration: 1.75 },
    );
  });

  return (
    <div>
      <div className="landing__sitename" ref={home}>
        <div className="landing__sitename--div">Loading ...</div>
      </div>
      <div className="landing__loader"></div>
    </div>
  );
}

export default Landing;
