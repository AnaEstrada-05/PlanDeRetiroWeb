import PlanRetiroInicio from "../components/PlanRetiroInicio";
import Desglose from "../components/Desglose";
import CoberturaPru from "../components/CoberturaPru";
import Newsletter from "../components/NewsLetter";
import Asesores from "../components/Asesores";
import Cotiza from "../components/Cotiza";

function PlanPrudential() {
  return (
    <div className="PlanPrudential">
      <PlanRetiroInicio />
      <Desglose />
      <CoberturaPru />
      <Asesores />
      <Newsletter />
      <Cotiza />
    </div>
  );
}

export default PlanPrudential;
