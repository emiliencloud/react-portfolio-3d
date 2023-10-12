import logo from "../../assets/logo_emiliencloud.svg";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./Header.scss";
import { useEffect } from "react";
import { useAnimate } from "framer-motion";

function Header() {
  const [header, animateHeader] = useAnimate();

  useEffect(() => {
    animateHeader(
      header.current,
      { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
      { ease: [0.87, 0.14, 0.15, 0.79], delay: 8, duration: 2 },
    );
  });

  return (
    <div className="header" ref={header}>
      <header className="header__container">
        <div className="header__sitename">
          <img src={logo} alt="site-logo" className="header__sitename--logo" />
          <span className="header__sitename--clip">{"emiliencloud"}</span>
        </div>
        <div className="header__link-container">
          <a
            className="header__link"
            href="https://www.linkedin.com/in/emilien-couland-46b6a01b6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span> <BsLinkedin />
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
