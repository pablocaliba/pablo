import { useContext } from "react";
import AppContext from "../../context/AppContext";
// components
import ButtonBanner from "../Buttons/ButtonBanner";
// images
import finance from "../../assets/BannerHome/finance.png";
import location from "../../assets/BannerHome/location.png";
import productivity from "../../assets/BannerHome/productivity.png";

import "./ContainerButtonsBanner.css";

const ContainerButtonsBanner = () => {
  const { goToDiv } = useContext(AppContext);

  return (
    <div className="containerButtonsBanner">
      <ButtonBanner src={finance} label="We advance income" />
      <ButtonBanner src={productivity} label="We increase productivity" />
      <ButtonBanner
        src={location}
        link={"oportunities"}
        label="Success Opportunity Map"
        onClick={() => goToDiv()}
      />
    </div>
  );
};

export default ContainerButtonsBanner;
