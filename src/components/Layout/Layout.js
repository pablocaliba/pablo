import { useContext } from "react";
import AppContext from "../../context/AppContext";
// components
import DialogContactUs from "../DialogContactUs/DialogContactUs";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import "./Layout.css";

const Layout = ({ children }) => {
  const { goToDiv } = useContext(AppContext);

  return (
    <div style={{ backgroundColor: "#121212" }}>
      <Navbar />
      <main>
        <DialogContactUs />
        {children}
      </main>
      <Footer goToDiv={goToDiv} />
    </div>
  );
};

export default Layout;
