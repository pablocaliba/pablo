import "./ButtonBanner.css";
import { Link } from "react-router-dom";

const ButtonBanner = ({ label, onClick, src, link }) => {
  return (
    <div className="buttonBanner--container">
      <Link to={`/${link}`}>
        <button onClick={onClick} className="buttonBanner">
          <img src={src} alt="" />
          <p>{label} </p>
        </button>
      </Link>
    </div>
  );
};

export default ButtonBanner;
