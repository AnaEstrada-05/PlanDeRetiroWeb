import PlanRetiroInicio from "../components/PlanRetiroInicio";
import Desglose from "../components/Desglose";
import CoberturaAllianz from "../components/CoberturaAllianz";
import Newsletter from "../components/NewsLetter";
import Asesores from "../components/Asesores";
import Cotiza from "../components/Cotiza";

function PlanAllianz() {
  return (
    <>
      <PlanRetiroInicio />
      <Desglose />
      <CoberturaAllianz />
      <Asesores />
      <Newsletter />
      <Cotiza />
    </>
  );
}

export default PlanAllianz;
