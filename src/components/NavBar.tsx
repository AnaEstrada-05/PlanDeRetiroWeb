import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="navBar">
      <a href="/">
        <img src="src/assets/logo.svg" alt="LogoPagina" id="logo" />
      </a>
      <div className="navBarContent">
        <Link
          to="/planderetiro"
          onClick={scrollToTop}
          className="navBarItem planRetiro"
        >
          Plan de Retiro
        </Link>
        <Link to="/ahorro" onClick={scrollToTop} className="navBarItem ahorro">
          Ahorro
        </Link>
        <Link
          to="/educacion"
          onClick={scrollToTop}
          className="navBarItem educacion"
        >
          Educacion
        </Link>
        <Link to="/mujer" onClick={scrollToTop} className="navBarItem mujer">
          Mujer
        </Link>
        <Link to="/vida" onClick={scrollToTop} className="navBarItem vida">
          Vida
        </Link>
        <Link to="/gmm" onClick={scrollToTop} className="navBarItem gmm">
          GMM
        </Link>
        <Link to="/auto" onClick={scrollToTop} className="navBarItem auto">
          Auto
        </Link>
        <Link to="/hogar" onClick={scrollToTop} className="navBarItem hogar">
          Hogar
        </Link>
        <Link to="/agendar" onClick={scrollToTop} className="agendar">
          Agenda tu asesoría
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
