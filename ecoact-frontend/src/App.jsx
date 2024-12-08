import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
//import Navbar from "./components/Navbar";
import DashboardIndustrie from "./pages/Industrie/DashboardIndustrie";
import DefisIndustrie from "./pages/Industrie/DefisIndustrie";
import DashboardMaison from "./pages/Maison/DashboardMaison";
import DefisMaison from "./pages/Maison/DefisMaison";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard-industrie" element={<DashboardIndustrie />} />
          <Route path="/defis-industrie" element={<DefisIndustrie />} />
          <Route path="/dashboard-maison" element={<DashboardMaison />} />
          <Route path="/defis-maison" element={<DefisMaison />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
