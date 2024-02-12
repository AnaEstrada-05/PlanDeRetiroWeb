// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage";
import PlanDeRetiro from "./pages/PlanDeRetiroMain";
import PlanPrudential from "./pages/PlanDeRetiroPrudential";
import PlanSM from "./pages/PlanDeRetiroSM";
import Ahorro from "./pages/Ahorro";
import Educacion from "./pages/Educacion";
import Mujer from "./pages/Mujer";
import Vida from "./pages/Vida";
import Gmm from "./pages/GMM";
import Auto from "./pages/Auto";
import Hogar from "./pages/Hogar";
import Footer from "./components/Footer";
import Agenda from "./pages/Agenda";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/planderetiro" element={<PlanDeRetiro />} />
        <Route path="/ahorro" element={<Ahorro />} />
        <Route path="/educacion" element={<Educacion />} />
        <Route path="/mujer" element={<Mujer />} />
        <Route path="/vida" element={<Vida />} />
        <Route path="/gmm" element={<Gmm />} />
        <Route path="/auto" element={<Auto />} />
        <Route path="/hogar" element={<Hogar />} />
        <Route path="/prudential" element={<PlanPrudential />} />
        <Route path="/segurosmonterrey" element={<PlanSM />} />
        <Route path="/agendar" element={<Agenda />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
