import PlanRetiroInicio from "../components/PlanRetiroInicio";
import Desglose from "../components/Desglose";
import CoberturaSM from "../components/CoberturaSM";
import Newsletter from "../components/NewsLetter";
import Asesores from "../components/Asesores";
import Cotiza from "../components/Cotiza";

function PlanPrudential() {
  return (
    <>
      <PlanRetiroInicio />
      <Desglose />
      <CoberturaSM />
      <Asesores />
      <Newsletter />
      <Cotiza />
    </>
  );
}

export default PlanPrudential;
