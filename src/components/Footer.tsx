import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer">
      <a href="home.html">
        <img src="src/assets/logoBW.svg" alt="LogoPagina" id="logo" />
      </a>
      <div className="footerInfo">
        <div className="texto">
          <h3>
            Tu futuro financiero en buenas manos. <br /> Toma las mejores
            decisiones financieras para tu futuro.
          </h3>
          <Link to="/agendar" onClick={scrollToTop} className="empezar" id="footerButton">
          Agenda tu asesoría
        </Link>
          <button className="empezar" id="footerButton">
            Agenda una asesoría
          </button>
        </div>
        <div className="footerText">
          <div>
            <h2>Metas</h2>
            <p>
              <a href="https://www.instagram.com/carlosefin/" target="_blank">
                Plan de Retiro
              </a>
              <br />
              <a href="https://www.instagram.com/carlosefin/" target="_blank">
                Plan de Ahorro
              </a>
              <br />
              <a href="https://www.instagram.com/carlosefin/" target="_blank">
                Seguro de Educación
              </a>
              <br />
              <a href="https://www.instagram.com/carlosefin/" target="_blank">
                Plan Vida Mujer
              </a>
              <br />
              <a href="https://www.instagram.com/carlosefin/" target="_blank">
                Seguro de Vida
              </a>
            </p>
          </div>
          <div>
            <p id="metasDesc">
              <a href="https://www.instagram.com/carlosefin/" target="_blank">
                Gastos Médicos Mayores
              </a>
              <br />
              <a href="https://www.instagram.com/carlosefin/" target="_blank">
                Seguro de Auto
              </a>
              <br />
              <a href="https://www.instagram.com/carlosefin/" target="_blank">
                Seguro de Hogar
              </a>
            </p>
          </div>
          <div>
            <h2>Contacto</h2>
            <p>
              <a href="https://www.instagram.com/carlosefin/" target="_blank">
                Instagram
              </a>
              <br />
              <a href="https://www.tiktok.com/@carlosefin" target="_blank">
                TikTok
              </a>
              <br />
              <a href="https://www.youtube.com/@carlosefin" target="_blank">
                Youtube
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="marcaregistrada">
        Planderetiro.mx es una marca registrada en México. El uso de este sitio
        web implica la aceptación de los Términos y Condiciones, así como del
        Aviso de Privacidad de ‘ ESTRATEGIAS PATRIMONIALES GARANTIZADAS’. El
        Buró de Entidades Financieras contiene información de ESTRATEGIAS
        PATRIMONIALES GARANTIZADAS, S.A. DE C.V., SOFOM, E.N.R.
        (CrediSoluciones) sobre nuestro desempeño frente a los usuarios, por la
        prestación de productos y servicios. Te invitamos a consultarlo también
        en la página buro.gob.mx ó a través de
        credisoluciones.com/buroestrategias. De conformidad con lo dispuesto por
        el Artículo 87-J de la Ley General de Organizaciones y Actividades
        Auxiliares del Crédito, ‘ ESTRATEGIAS PATRIMONIALES GARANTIZADAS’,
        Sociedad Anónima de Capital Variable, Sociedad Financiera de Objeto
        Múltiple, Entidad No Regulada, no requiere de autorización de la
        Secretaria de Hacienda y Crédito Público para su constitución ni para la
        celebración del presente contrato, y está sujeta a la supervisión o
        vigilancia de la Comisión Nacional Bancaria y de Valores, únicamente en
        materia de prevención y detección de Operaciones con Recursos de
        Procedencia Ilícita, Terrorismo y Terrorismo Internacional, de
        conformidad a lo establecido en el artículo 56 de la Ley antes citada.
      </div>
    </div>
  );
}

export default Footer;
