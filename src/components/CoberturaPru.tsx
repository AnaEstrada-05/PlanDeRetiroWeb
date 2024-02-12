import "./Cobertura.css";

import "./Cobertura.css";
import { useEffect } from "react";

function CoberturaPru() {
  useEffect(() => {
    // Lógica adicional aquí si es necesario
  }, []);

  const beneficios = [
    {
      imgSrc:
        "src/assets/Black and white mother walking with a baby stroller.png",
      title: "Plan garantizado en UDIs",
      description:
        "Le ganas a la inflación y sabes exactamente con cuanto te vas a retirar",
    },
    {
      imgSrc:
        "src/assets/Black and white woman looking into magnifying glass.png",
      title: "Plan deducible por articulo 151",
      description:
        "Recibe una devolución fiscal cada año y retirate a los 65 sin pagar ni un peso de impuestos",
    },
    {
      imgSrc: "src/assets/Black and white woman doing yoga.png",
      title: "Seguro de Vida",
      description:
        "Cobertura por fallecimiento natural y accidental, invalidez, perdidas organicas y enfermedad terminal.",
    },
    {
      imgSrc:
        "src/assets/Black and white woman looking into magnifying glass.png",
      title: "Cobertura de Hospitalización",
      description:
        "Recibe una cantidad de UDIs por cada día que pases hospitalizado",
    },
    {
      imgSrc:
        "src/assets/Black and white woman looking into magnifying glass.png",
      title: "Plazo de aportación corto",
      description: "Termina de pagar tu plan en plazos de 10, 15 o 20 años",
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

export default CoberturaPru;
