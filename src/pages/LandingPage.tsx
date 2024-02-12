import React from "react";
import Hero from "../components/Hero";
import Product from "../components/Products";
import Beneficios from "../components/Beneficios";
import AsSeenOnYoutube from "../components/AsSeenOnYoutube";
import Asesores from "../components/Asesores";
import Newsletter from "../components/NewsLetter";
import Cotiza from "../components/Cotiza";
import Logos from "../components/Logos";
import "./LandingPage.css";

const LandingPage: React.FC = () => (
  <div className="LandingPage">
    <Hero />
    <Product />
    <Logos />
    <Beneficios />
    <AsSeenOnYoutube />
    <Asesores />
    <Newsletter />
    <Cotiza />
  </div>
);

export default LandingPage;
