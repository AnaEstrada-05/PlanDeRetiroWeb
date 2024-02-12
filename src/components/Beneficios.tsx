import "./Beneficios.css";
import { Link } from "react-router-dom";

function Beneficios() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const beneficios = [
    {
      imgSrc:
        "https://ouch-cdn2.icons8.com/aGMy158ZeK2n5c_E83h_Xcy5slxIKQzqzTK7JuOR7XU/rs:fit:334:456/extend:false/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDkz/L2RhNjE2MjQxLWFm/MmItNDJhYy1hY2Vh/LTg4MTEzY2Q3MjFk/MC5wbmc.png",
      title: "Beneficio 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget massa ex. Nulla dapibus, metus ut ullamcorper auctor, ex arcu pellentesque enim.",
    },
    {
      imgSrc:
        "https://ouch-cdn2.icons8.com/c0BQVGKlgLChwMP_ym-j-2OBVQ3CgvYuikBZXA-6VNI/rs:fit:368:474/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjMw/LzNiY2Q4YzAzLTc2/ZTQtNDM0ZC1hZWY5/LTE5YWYwNWQ4ZmU0/Zi5wbmc.png",
      title: "Beneficio 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget massa ex. Nulla dapibus, metus ut ullamcorper auctor, ex arcu pellentesque enim.",
    },
    {
      imgSrc:
        "https://ouch-cdn2.icons8.com/h6y4np6CwUvp-9Od1PeNAWYRGq5VegwunEj3hqkPL7g/rs:fit:368:459/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTI4/LzE5Y2FlOTE1LWM5/ZWYtNDNkMy1iOTI4/LTJlZTRkOWZlNGY3/Yy5wbmc.png",
      title: "Beneficio 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget massa ex. Nulla dapibus, metus ut ullamcorper auctor, ex arcu pellentesque enim.",
    },
  ];

  return (
    <div className="beneficios" style={{ backgroundColor: "white" }}>
      <div className="somos">
        <h2>Somos la solución que necesitas</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          massa ex. Nulla dapibus, metus ut ullamcorper auctor, ex arcu
          pellentesque enim, a tempus lacus arcu in lorem.
        </p>
        <Link to="/agendar" onClick={scrollToTop} className="agendar">
          Agenda tu cita
        </Link>
      </div>
      <div className="listaBeneficios">
        {beneficios.map((beneficio, index) => (
          <div className="liBen" key={index}>
            <img
              className="imgBeneficios"
              alt={`imgBeneficio${index + 1}`}
              src={beneficio.imgSrc}
            ></img>
            <div className="descripcion">
              <h3>{beneficio.title}</h3>
              <p>{beneficio.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Beneficios;
