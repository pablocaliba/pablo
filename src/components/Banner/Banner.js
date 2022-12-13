import "./Banner.css";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
// images
import bg_banner from "../../assets/BannerHome/bg_banner.png";
import header_logo from "../../assets/header_logo.png";
// components
import ButtonSecondary from "../Buttons/ButtonSecondary";

const Banner = () => {
  const { handleClickOpen } = useContext(AppContext);

  return (
    <>
      <div className="banner--logo">
        <img src={header_logo} alt="" />
      </div>
      <div className="banner--home">
        <div className="banner--home-img-desktop">
          <span className="banner--home-desktop-span"></span>
          <img src={bg_banner} alt="" />
        </div>
        <div className="banner--home-container-info">
          <h1> Football Income Generator</h1>
          <p>
            It is a new income generator for football that enables efficient and
            secure management. Integrates and enriches quantitative,
            qualitative, own and third party data, for better decision making.{" "}
            <br />
            It increases the opportunity and probability of success of every
            young person’s dream, promoting their education through football and
            its values.
          </p>
          <div className="banner--home-img-mobile">
            <span></span>
            <img src={bg_banner} alt="" />
          </div>
          <div className="banner--home-container-button">
            <ButtonSecondary
              onClick={() => handleClickOpen()}
              label="Request your demo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
