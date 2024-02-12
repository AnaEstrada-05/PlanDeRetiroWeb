import "./AsSeenOnYoutube.css";
import { Link } from "react-router-dom";

function AsSeenOnYoutube() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="asSeenOnYoutube" style={{ backgroundColor: "white" }}>
      <div className="imagDavid">
        <img
          id="davidImagen"
          src="src/assets/david.png"
          alt="davidImagen"
        ></img>
      </div>
      <div className="infoDavid">
        <p className="lightText">Como lo viste en Youtube</p>
        <h2>
          Carlos Estrada <br />
          <span style={{ color: "#426FFE" }}>Libertad Financiera</span>{" "}
        </h2>
        <p>
          Aprendamos juntos sobre finanzas personales e inversiones. Al aplicar
          lo que verás en mis videos estarás cada vez más cerca de la{" "}
          <span style={{ color: "#426FFE" }}>libertad financiera.</span>{" "}
        </p>
        <Link
          to="/agendar"
          onClick={scrollToTop}
          className="empezar"
          id="asSeenAgendar"
        >
          Agenda una asesoría personalizada
        </Link>
        <p>Encuéntralo en sus redes sociales</p>
        <div className="socialMedia">
          <a href="https://www.youtube.com/@carlosefin" target="_blank">
            <img
              className="logoSocialMedia"
              src="src/assets/youtubeLogo.svg"
              alt="youtube"
            ></img>
          </a>
          <a href="https://www.tiktok.com/@carlosefin" target="_blank">
            <img
              className="logoSocialMedia"
              src="src/assets/tiktokLogo.svg"
              alt="tiktok"
            ></img>
          </a>
          <a href="https://www.instagram.com/carlosefin/" target="_blank">
            <img
              className="logoSocialMedia"
              src="src/assets/instagramLogo.svg"
              alt="instagram"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AsSeenOnYoutube;
