import "./Hero.css";

function Hero() {
  return (
    <div className="hero" style={{ backgroundColor: "white" }}>
      <h1>
        Tu <span style={{ color: "#426FFE" }}>futuro</span> financiero en buenas
        manos
      </h1>
      <p>
        Encuentra información sobre los diferentes tipos de seguros, planes de
        retiro y de ahorro disponibles en México que te ayudarán a tomar{" "}
        <span style={{ color: "#426FFE" }}>
          las mejores decisiones financieras
        </span>{" "}
        para tu futuro.
      </p>
      <div className="tarjetas">
        <div className="tarjeta">
          <div className="textoTarjeta">
            <img
              src="src/assets/candado.png"
              alt="imgPlanDeRetiro"
              className="imgTarjeta"
            ></img>
            <br></br>
            Plan de Retiro{" "}
          </div>
        </div>
        <div className="tarjeta">
          <div className="textoTarjeta">
            <img
              src="src/assets/coins.png"
              alt="imgPlanDeAhorro"
              className="imgTarjeta"
            ></img>
            <br></br>
            Plan de Ahorro{" "}
          </div>
        </div>
        <div className="tarjeta">
          <div className="textoTarjeta">
            <img
              src="https://ouch-cdn2.icons8.com/RKnbDgXTvjJcu-XGEOxaW3jEGr5apYwQFNUHkloREQk/rs:fit:368:390/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTUx/L2NhOWU3OGI0LWU5/N2ItNDUzNS1iMDFi/LTQyMWQ0N2UwMjEy/MS5wbmc.png"
              alt="Logo"
              className="imgTarjeta"
            ></img>
            <br></br>
            GMM{" "}
          </div>
        </div>
      </div>
      <img src="src/assets/hero1.png" alt="Logo" className="imagen1"></img>
      <img src="src/assets/hero2.png" alt="Logo" className="imagen2"></img>
    </div>
  );
}

export default Hero;
