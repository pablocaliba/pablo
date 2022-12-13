import "./App.css";
import "./global.styles.css";
import Layout from "./components/Layout/Layout";
import { Route, Routes, Navigate } from "react-router-dom";
import AppState from "./context/AppState";
// pages
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Licensing from "./pages/Licensing/Licensing";
import Oportunities from "./pages/Oportunities/Oportunities";
import Partners from "./pages/Partners/Partners";
import Legal from "./pages/Legal/Legal";

function App() {
  return (
    <AppState>
      <Layout>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/investor" element={<Licensing />} />
          <Route path="/oportunities" element={<Oportunities />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Layout>
    </AppState>
  );
}

export default App;
