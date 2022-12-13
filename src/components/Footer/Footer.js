import "./Footer.css";
import { Link } from "react-router-dom";
// images
import app_store from "../../assets/Footer/app_store.png";
import google_play from "../../assets/Footer/google_play.png";
import footer_logo from "../../assets/footer_logo.png";
// components
import ButtonFooter from "../Buttons/ButtonFooter";
import CustomIcon from "../CustomIcon/CustomIcon";
// icons
import sm_linkedin from "../../assets/SocialMedia/sm_linkedin.png";
import sm_instagram from "../../assets/SocialMedia/sm_instagram.png";
import sm_twitter from "../../assets/SocialMedia/sm_twitter.png";
import sm_telegram from "../../assets/SocialMedia/sm_telegram.png";
import sm_discord from "../../assets/SocialMedia/sm_discord.png";
import sm_facebook from "../../assets/SocialMedia/sm_facebook.png";
import sm_youtube from "../../assets/SocialMedia/sm_youtube.png";

const secondSection = (goToDiv) => {
  return (
    <div className="main-section">
      <h3>Resources</h3>
      <Link className="footer--link" to={"#"}>
        Help Center
      </Link>
      <Link className="footer--link" to={"/"} onClick={goToDiv}>
        Platform{" "}
      </Link>
      <Link className="footer--link" to={"/partners"} onClick={goToDiv}>
        Partners{" "}
      </Link>
      <a
        className="footer--link"
        target="_blank"
        href={"https://market.gloouds.com/"}
        rel="noreferrer"
      >
        {" "}
        NFT{" "}
      </a>
      <a
        className="footer--link"
        target="_blank"
        href={"https://medium.com/@Gloouds"}
        rel="noreferrer"
      >
        {" "}
        Medium{" "}
      </a>
    </div>
  );
};

const thirdSection = (goToDiv) => {
  return (
    <div className="main-section">
      <h3>Company</h3>
      <Link className="footer--link" to={"/about"} onClick={goToDiv}>
        About us{" "}
      </Link>
      <Link className="footer--link" to={"#"}>
        Contact Us
      </Link>
      <Link className="footer--link" to={"#"}>
        Career{" "}
      </Link>
      <Link className="footer--link" to={"/legal"} onClick={goToDiv}>
        Legal{" "}
      </Link>

      {/* <a
        className="footer--link"
        target="_blank"
        href="https://gloouds-resource-v2.s3.amazonaws.com/Public/legal.ingles.pdf"
        rel="noreferrer"
      >
        Legal
      </a> */}
    </div>
  );
};

const Footer = ({ goToDiv }) => {
  return (
    <div className="footer-padding-container">
      <div className="line-footer"></div>
      <footer>
        <div className="main-section first-section">
          <Link to={"/"} onClick={goToDiv}>
            <img src={footer_logo} alt="" className="img-footer-logo" />
          </Link>

          <p>
            It is a new income generator for football that enables efficient and
            secure management. Integrates and enriches quantitative,
            qualitative, own and third party data, for better decision making.{" "}
            <br />
            It increases the opportunity and probability of success of every
            young person’s dream, promoting their education through football and
            its values.
          </p>
          <div className="footer--buttons-container">
          <a href="https://play.google.com/store/apps/details?id=com.gloouds" target="_blank" rel="noreferrer">
          <ButtonFooter src={google_play} />
          </a>
            <a href="https://apps.apple.com/es/app/gloouds/id1633309773" target="_blank" rel="noreferrer">
          <ButtonFooter src={app_store} />
          </a>
          </div>
          <div className="shadow-effect"></div>
        </div>

        <div className="footer--buttons-container-mobile">
          <a href="https://play.google.com/store/apps/details?id=com.gloouds" target="_blank" rel="noreferrer">
          <ButtonFooter src={google_play} />
          </a>
          <a href="https://apps.apple.com/es/app/gloouds/id1633309773" target="_blank" rel="noreferrer">
          <ButtonFooter src={app_store} />
          </a>
        </div>

        <div className="section-mb">
          {secondSection(goToDiv)}
          {thirdSection(goToDiv)}
          <div className="shadow-effect-mobile"></div>
        </div>

        <div className=" main-section second-section section-dk">
          {secondSection(goToDiv)}
        </div>

        <div className=" main-section third-section section-dk">
          {thirdSection(goToDiv)}
        </div>

        <div className="fourth-section">
          <h3>Contact</h3>
          <div className="social-media">
            <a
              target="_blank"
              href={"https://www.linkedin.com/company/gloouds"}
              rel="noreferrer"
            >
              <CustomIcon img={sm_linkedin} />
            </a>

            <a
              target="_blank"
              href={"https://www.twitter.com/gloouds"}
              rel="noreferrer"
            >
              <CustomIcon img={sm_twitter} />
            </a>

            <a
              target="_blank"
              href={"https://m.facebook.com/Gloouds-107678472033019/"}
              rel="noreferrer"
            >
              <CustomIcon img={sm_facebook} />
            </a>
          </div>

          <div className="social-media">
            <a
              target="_blank"
              href={"https://t.me/+l7W5MV5N-Xw3NGYx"}
              rel="noreferrer"
            >
              <CustomIcon img={sm_telegram} />
            </a>
            <a
              target="_blank"
              href={
                " https://discord.com/channels/816027444095221760/844974949051662367"
              }
              rel="noreferrer"
            >
              <CustomIcon img={sm_discord} />
            </a>
            <a
              target="_blank"
              href={"https://www.instagram.com/gloouds/"}
              rel="noreferrer"
            >
              <CustomIcon img={sm_instagram} />
            </a>
          </div>
          <div className="social-media">
            <a
              target="_blank"
              href={"https://www.youtube.com/channel/UCQ3iLfj3AsALxBB6tFLAbMA"}
              rel="noreferrer"
            >
              <CustomIcon img={sm_youtube} />
            </a>
            <div className="social-media--youtube">
              <div>
                <CustomIcon />
              </div>
              <div>
                <CustomIcon />
              </div>
              <div>
                <CustomIcon />
              </div>
              <div>
                <CustomIcon />
              </div>
              <div>
                <CustomIcon />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="line-footer line-footer-mobile"></div>
    </div>
  );
};

export default Footer;
