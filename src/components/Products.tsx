// Product.js
import "./Products.css";

const metasData = [
  {
    imgSrc:
      "https://img.freepik.com/foto-gratis/pareja-tiro-medio-tomando-selfie_23-2148984240.jpg?size=626&ext=jpg&ga=GA1.1.1480204119.1696291200&semt=ais",
    alt: "Plan de Retiro",
    title: "Plan de Retiro",
    description: "Asegúrate a ti y a tus seres queridos de por vida.",
    href: "/planderetiro",
  },
  {
    imgSrc:
      "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/08/21/16926155744745.jpg",
    alt: "Plan de Ahorro",
    title: "Plan de Ahorro",
    description: "Asegúrate a ti y a tus seres queridos de por vida.",
    href: "/ahorro",
  },
  {
    imgSrc:
      "https://www.oxfordlearning.com/wp-content/uploads/2016/09/AdobeStock_47186368.jpeg",
    alt: "SeguBeca",
    title: "SeguBeca",
    description: "Asegúrate a ti y a tus seres queridos de por vida.",
    href: "/educacion",
  },
  {
    imgSrc:
      "https://img.freepik.com/foto-gratis/pareja-tiro-medio-tomando-selfie_23-2148984240.jpg?size=626&ext=jpg&ga=GA1.1.1480204119.1696291200&semt=ais",
    alt: "Plan Vida Mujer",
    title: "Plan Vida Mujer",
    description: "Asegúrate a ti y a tus seres queridos de por vida.",
    href: "/mujer",
  },
  {
    imgSrc:
      "https://img.freepik.com/foto-gratis/pareja-tiro-medio-tomando-selfie_23-2148984240.jpg?size=626&ext=jpg&ga=GA1.1.1480204119.1696291200&semt=ais",
    alt: "Seguro de Vida",
    title: "Seguro de Vida",
    description: "Asegúrate a ti y a tus seres queridos de por vida.",
    href: "/vida",
  },
  {
    imgSrc:
      "https://img.freepik.com/foto-gratis/pareja-tiro-medio-tomando-selfie_23-2148984240.jpg?size=626&ext=jpg&ga=GA1.1.1480204119.1696291200&semt=ais",
    alt: "GMM",
    title: "GMM",
    description: "Asegúrate a ti y a tus seres queridos de por vida.",
    href: "/gmm",
  },
  {
    imgSrc:
      "https://img.freepik.com/foto-gratis/pareja-tiro-medio-tomando-selfie_23-2148984240.jpg?size=626&ext=jpg&ga=GA1.1.1480204119.1696291200&semt=ais",
    alt: "Seguro de Auto",
    title: "Seguro de Auto",
    description: "Asegúrate a ti y a tus seres queridos de por vida.",
    href: "/auto",
  },
  {
    imgSrc:
      "https://img.freepik.com/foto-gratis/pareja-tiro-medio-tomando-selfie_23-2148984240.jpg?size=626&ext=jpg&ga=GA1.1.1480204119.1696291200&semt=ais",
    alt: "Seguro de Hogar",
    title: "Seguro de Hogar",
    description: "Asegúrate a ti y a tus seres queridos de por vida.",
    href: "/hogar",
  },
  // Add more meta data objects here
];

function Product() {
  return (
    <div id="products" className="products">
      <h2>Selecciona tu Meta</h2>
      <div className="metas">
        {metasData.map((meta) => (
          <div className="metaDescripcion" key={meta.title}>
            <img src={meta.imgSrc} alt={meta.alt} className="imgMetas" />
            <div className="textoDesc">
              <h3>{meta.title}</h3>
              <p>{meta.description}</p>
            </div>
            <a className="empezar" href={meta.href}>
              Empezar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
