import "./Cobertura.css";
import { useEffect } from "react";

function CoberturaSM() {
    useEffect(() => {
        // Lógica adicional aquí si es necesario
    }, []);

    const beneficios = [
        {
            imgSrc: "src/assets/Black and white mother walking with a baby stroller.png",
            title: "Beneficio 1",
            description: "Asegúrate a ti y a tus seres queridos de por vida.",
        },
        {
            imgSrc: "src/assets/Black and white woman looking into magnifying glass.png",
            title: "Beneficio 2",
            description: "Asegúrate a ti y a tus seres queridos de por vida.",
        },
        {
            imgSrc: "src/assets/Black and white woman doing yoga.png",
            title: "Beneficio 3",
            description: "Asegúrate a ti y a tus seres queridos de por vida.",
        },
        {
            imgSrc: "src/assets/Black and white woman looking into magnifying glass.png",
            title: "Beneficio 4",
            description: "Asegúrate a ti y a tus seres queridos de por vida.",
        },
        {
            imgSrc: "src/assets/Black and white woman looking into magnifying glass.png",
            title: "Beneficio 5",
            description: "Asegúrate a ti y a tus seres queridos de por vida.",
        },
        {
            imgSrc: "src/assets/Black and white woman doing yoga.png",
            title: "Beneficio 6",
            description: "Asegúrate a ti y a tus seres queridos de por vida.",
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

export default CoberturaSM;
