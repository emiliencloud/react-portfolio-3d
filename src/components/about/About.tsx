import "./About.scss";
import { useEffect } from "react";
import photo from "../../assets/photo_de_contact.jpg";

function About() {
  useEffect(() => {
    const clock: any = document?.getElementsByClassName("contact")[0];

    window.addEventListener("scroll", () => {
      console.log(window.scrollY, window.innerHeight, document.body.clientHeight);

      if (window.scrollY + window.innerHeight >= document.body.clientHeight) {
        console.log("ok");
        clock.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
        clock.style.opacity = "1";
      }
      if (window.scrollY + window.innerHeight < document.body.clientHeight) {
        clock.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
        clock.style.opacity = "0";
      }
    });
  });

  return (
    <div className="contact">
      <div className="contact__infos">
        <p>Hey ! Moi c'est Émilien,</p>
        <p>
          Web design et creative development lover !
          <br />
          <br />
          Fan de WebDesign, Figma, Blender et la suite Adobe accompagnent toutes mes créations.
          <br />
          <br />
          Maitrisant le HTML, CSS, JS, TS, JAVA et leurs variantes, ou encore le framework Angular je me devais de compléter mes
          connaissances en explorant React. C'est sous ce framework que je me suis amusé à développer et animer ce petit one page après
          avoir suivi l'introduction au développement sous React.
          <br />
          <br />
          Suivez-moi sur <a href="https://www.linkedin.com/in/emilien-couland-46b6a01b6/" target="_blank">
            LinkedIn
            </a> pour en apprendre plus ^^
        </p>
        <p>Merci pour votre visite !</p>
      </div>
      <img src={photo} alt="" />
    </div>
  );
}

export default About;
