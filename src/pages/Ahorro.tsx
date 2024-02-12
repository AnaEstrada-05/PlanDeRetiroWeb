import Asesores from "../components/Asesores";
import Selecciona from "../components/selecCompañia";
import Logos from "../components/Logos";
import Desglose from "../components/Desglose";
import Newsletter from "../components/NewsLetter";
import Cotiza from "../components/Cotiza";

function Ahorro() {
  return (
    <>
      <Selecciona />
      <Logos />
      <Desglose />
      <Asesores />
      <Newsletter />
      <Cotiza />
    </>
  );
}

export default Ahorro;
