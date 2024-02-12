import "./Cobertura.css";

import "./Cobertura.css";
import { useEffect } from "react";

function CoberturaAllianz() {
  useEffect(() => {
    // Lógica adicional aquí si es necesario
  }, []);

  const beneficios = [
    {
      imgSrc:
        "src/assets/Black and white mother walking with a baby stroller.png",
      title: "Arma tu portafolio",
      description:
        "Tu eliges si invertir en la bolsa para maximizar tus rendimientos o invertir en instrumentos seguros si no quieres sorpresas.",
    },
    {
      imgSrc:
        "src/assets/Black and white woman looking into magnifying glass.png",
      title: "Plan disponible en articulo 93, 151 o 185",
      description:
        "Recibe una devolución fiscal cada año y retirate a los 60 o 65 sin pagar ni un peso de impuestos ",
    },
    {
      imgSrc: "src/assets/Black and white woman doing yoga.png",
      title: "El plan más flexible del mercado",
      description:
        "Puedes disminuir tu aporte, aportar extra o tomarte un descanso en caso de necesitarlo.",
    },
  ];

  return (
    <div className="cobertura">
      <h1>¿Qué cubre?</h1>
      <div className="listaBen">
        {beneficios.map((beneficio, index) => (
          <div className="beneficioDesc" key={index}>
            <img src={beneficio.imgSrc} alt={beneficio.title} />
            <h3>{beneficio.title}</h3>
            <p>{beneficio.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoberturaAllianz;
