import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Element } from "react-scroll";
import "./Desglose.css";

function Desglose() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderCountUp = (
    end: number,
    duration: number,
    prefix?: string,
    suffix?: string
  ) => {
    return isVisible && (
      <CountUp
        start={prefix ? 50 : 0}
        end={end}
        duration={duration}
        prefix={prefix}
        suffix={suffix}
      />
    );
  };

  return (
    <Element name="desglose" className="desglose">
      <div className="descripcion">
        <p className="t1">Duración</p>
        <p className="t2">{renderCountUp(50, 3)}</p>
        <p className="t1">años</p>
      </div>

      <div className="divisor"></div>

      <div className="descripcion">
        <p className="t1">Inversión de </p>
        <p className="t2">{renderCountUp(200, 3, "$", "k")}</p>
        <p className="t1">pesos al año</p>
      </div>

      <div className="divisor"></div>

      <div className="descripcion">
        <p className="t1">Rendimientos de hasta</p>
        <p className="t2">{renderCountUp(11, 3, "", "%")}</p>
        <p className="t1">anuales</p>
      </div>
    </Element>
  );
}

export default Desglose;
