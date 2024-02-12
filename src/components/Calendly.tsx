import { InlineWidget } from "react-calendly";

const CalendlyWidget = () => {
  return (
    <div style={{ height: 800, margin: 50 }}>
      <InlineWidget
        styles={{ height: 800 }}
        url="https://calendly.com/carlosefin/plan-personal-de-retiro"
      />
    </div>
  );
};

export default CalendlyWidget;
