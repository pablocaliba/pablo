import "./Home.css";

// components
import Banner from "../../components/Banner/Banner";
import ContainerCardsInfo from "../../components/ContainerCardsInfo/ContainerCardsInfo";
import VideoHome from "../../components/VideoHome/VideoHome";
import ContainerButtonsBanner from "../../components/ContainerButtonsBanner/ContainerButtonsBanner";
import ContainerModulesInfo from "../../components/ContainerModulesInfo/ContainerModulesInfo";

const Home = () => {
  return (
    <>
      <Banner />
      <ContainerButtonsBanner />
      <VideoHome />
      <ContainerCardsInfo />
      <ContainerModulesInfo />
    </>
  );
};

export default Home;
