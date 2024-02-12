import { lazy } from "react";

const CalendlyWidget = lazy(() => import("../components/Calendly"));

const Agenda = () => {
  return <CalendlyWidget />;
};

export default Agenda;
