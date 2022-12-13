import "./Licensing.css";
// components
import TitlePage from "../../components/TitlePage/TitlePage";
// images
import chart from "../../assets/Licensing/chart_2.png";
import promotion from "../../assets/Licensing/promotion.png";
import field_1 from "../../assets/Licensing/field_1.png";
import field_2 from "../../assets/Licensing/field_2.png";
import field_3 from "../../assets/Licensing/field_3.png";
import field_4 from "../../assets/Licensing/field_4.png";
import field_4mobile from "../../assets/Licensing/field_4mobile.png";

const Licensing = () => {
  return (
    <div className="licensing--container">
      <TitlePage title="Investor" />
      <div className="licensing--subtitle">
        <h3>
          Gloouds defines the prices of its products and services globally,
          considering the reality of each region and each league
        </h3>
        <h4>
          Prices are in Euros, net of any taxes, levies or customs duties.
        </h4>
      </div>
      <span className="licensing--span"></span>
      <div className="licensing--image-container">
        <img src={chart} alt="" className="licensing--chart--1" />
      </div>
      <div className="licensing--chart-container-2">
        <img src={field_1} alt="" className="licensing--chart--2" />
      </div>

      <div className="licensing--container-fields-2-3">
        <div className="licensing--content-fields-2-3">
          <p>Our current team</p>
          <img src={field_2} alt="" />
        </div>
        <span className="licensing--span"></span>
        <div className="licensing--content-fields-2-3">
          <p>Our team after the exchange market</p>
          <img src={field_3} alt="" />
        </div>
      </div>
      <div className="licensing--promotion-advertising">
        <img src={promotion} alt="" />
        <div>
          <h2> Promotion and Advertising </h2>
          <h3>
            Publication in specialized media - Campaigns - Influencers -
            Participation un football events - Generation of promotional
            material.
          </h3>
        </div>
      </div>
      <div className="licensing--investor-ecosystem">
        <div>
          <h2>Investor ecosystem</h2>
          <h3>
            Gloouds shares technological and business solution, through an
            investment program, to enhance the ecosystem of strategic and
            complementary partners where each one has their place in the team...
          </h3>
        </div>

        <img src={field_4} alt="" className="licensing--investor-img-desktop" />
        <img
          src={field_4mobile}
          alt=""
          className="licensing--investor-img-mb"
        />
        <span className="licensing--span--2"></span>
      </div>
    </div>
  );
};
export default Licensing;
