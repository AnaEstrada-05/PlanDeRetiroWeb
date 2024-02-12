import { Link } from "react-router-dom";
import "./PlanRetiroInicio.css";
import Logos from "./Logos";
import { CSSProperties } from "react";
import Selecciona from "./SelecCompañia";

function PlanRetiroInicio() {
  const paragraphStyle: CSSProperties = {
    fontSize: "20px",
    width: "100vw",
    padding: "0px 310px",
    textAlign: "center",
    marginBottom: "50px",
  };

  return (
    <div className="inicio">
      <Selecciona />
      <Logos />
      <h1 className="tituloPlan">
        Plan De <span style={{ color: "#426FFE" }}>Retiro </span>{" "}
      </h1>
      <p style={paragraphStyle}>
        Encuentra información sobre los diferentes tipos de seguros, planes de
        retiro y de ahorro disponibles en México que te ayudarán a tomar para tu
        futuro.{" "}
        <span style={{ color: "#426FFE" }}>
          las mejores decisiones financieras{" "}
        </span>{" "}
        para tu futuro.
      </p>
      <p></p>
      <Link to={"/cotiza"} className="empezar">
        Cotiza tu Plan de Retiro
      </Link>
    </div>
  );
}

export default PlanRetiroInicio;
