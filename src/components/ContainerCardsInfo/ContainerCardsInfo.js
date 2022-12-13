import { useState } from "react";
import "./ContainerCardsInfo.css";
// components
import InfoCards from "../InfoCards/InfoCards";
import DialogCardsHome from "../DialogCardsHome/DialogCardsHome";
// imagenes
import iconoweb_01 from "../../assets/CardsHome/iconoweb_01.png";
import iconoweb_02 from "../../assets/CardsHome/iconoweb_02.png";
import iconoweb_03 from "../../assets/CardsHome/iconoweb_03.png";
import iconoweb_04 from "../../assets/CardsHome/iconoweb_04.png";
import iconoweb_05 from "../../assets/CardsHome/iconoweb_05.png";
import iconoweb_06 from "../../assets/CardsHome/iconoweb_06.png";
import iconoweb_07 from "../../assets/CardsHome/iconoweb_07.png";
import iconoweb_08 from "../../assets/CardsHome/iconoweb_08.png";
import iconoweb_09 from "../../assets/CardsHome/iconoweb_09.png";

const ContainerCardsInfo = () => {
  const [open, setOpen] = useState(false);
  const [contentDialog, setContentDialog] = useState({
    title: "",
    description: "",
    img: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const infoCards = [
    {
      id: "1",
      name: "Owners and managers",
      label:
        " Achieve economic efficiency thanks to the optimization of investments and in the purchase/sale of players.",
      img: iconoweb_01,
      labelPopUp:
        "Achieve economic efficiency thanks to the optimization of investments in decision-making in training, as well as in the purchase/sale of players. Transparency in the traceability of processes, data analysis and its communication.",
    },
    {
      id: "2",
      name: "Sports Staff",
      label:
        "Produce high-potential players by standardizing sports processes, integrating technological tools and minimizing their analysis.",
      labelPopUp:
        "Produce high-potential players by standardizing sports processes, focusing development tasks on the areas that each player needs to enhance, from their beginnings to their professionalization Integrate all the technological tools to the processes, minimizing analysis times.",
      img: iconoweb_02,
    },
    {
      id: "3",
      name: "Players",
      label:
        "The players personal space that provides tools to improve his performance, not only in sports but also quantitative and qualitative verticals.",
      labelPopUp: `The player's personal space that provides tools to improve their performance, not only in sport but also as an individual, by identifying and comparing the key factors to be strengthened thanks to continuous evaluation(own and third- party), both quantitative and qualitative.`,
      img: iconoweb_03,
    },
    {
      id: "4",
      name: "Scouting y video library",
      label:
        "Standardization of sports processes, focusing development tasks on the areas in which each player needs to improve.",
      labelPopUp:
        "It allows football clubs and agents to discover/recruit high potential players remotely while optimizing time and costs. The video library provides users with access to courses, seminars, training methodologies and much more.",
      img: iconoweb_04,
    },
    {
      id: "5",
      name: "Medical Staff",
      label: "Primary care, registration and follow-up of player injuries.",
      labelPopUp:
        "Primary care, registration and follow-up of player injuries. Centralized clinical history enriched for periodic monitoring of evolution and early detection of possible injuries. Anthropometry.",
      img: iconoweb_05,
    },
    {
      id: "6",
      name: "Video, analysis and statistics",
      label:
        "Incorporation of KPIs combined with hard and soft data related to the performance of the players. Video analysis as a data source for the enrichment of statistical information.",
      labelPopUp:
        "Incorporation of KPIs combined with hard and soft data related to the performance of the players. Smart dashboards for operational and executive decision making. Video analysis as a data source for the enrichment of statistical information.",
      img: iconoweb_06,
    },
    {
      id: "7",
      name: "Hardware manufacturers",
      label:
        "Provides the existing tools with the possibility of integrating new sources of information in real time, reliable, dynamic and certified.",
      labelPopUp:
        "Strengthen your own products by integrating with other sources and information as a generator of new opportunities in your customer portfolio. Reaching out to institutions and disciplines that have not yet been conquered in your business, to expand your client base.",
      img: iconoweb_07,
    },
    {
      id: "8",
      name: "Software manufacturers",
      label:
        "Provides the existing tools with the possibility of integrating new sources of information in real time, reliable, dynamic and certified.",
      labelPopUp:
        "Strengthen your own products by integrating with other sources and information as a generator of new opportunities in your customer portfolio. Reaching out to institutions and disciplines that have not yet been conquered in your business, to expand your client base.",
      img: iconoweb_08,
    },
    {
      id: "9",
      name: "Business partners",
      label:
        "Tool for agents, sponsors, tournament organizers and suppliers. Increase in their participation in the business through cross-selling and up-selling actions.",
      labelPopUp:
        "Tool for agents, sponsors, tournament organizers and sspp providers of sports technical training to make a difference in their portfolio of products and services. Increase your share of business through cross selling and up selling actions.",
      img: iconoweb_09,
    },
  ];

  return (
    <>
      <div className="containerCardsInfo">
        <span className="span-1"></span>
        {infoCards?.map((card, key) => (
          <InfoCards
            title={card.name}
            img={card.img}
            key={key}
            label={card.label}
            onClick={() => {
              setContentDialog((prevState) => ({
                ...prevState,
                img: card?.img,
              }));
              setContentDialog((prevState) => ({
                ...prevState,
                description: card?.labelPopUp,
              }));
              setContentDialog((prevState) => ({
                ...prevState,
                title: card?.name,
              }));
              handleClickOpen();
            }}
          />
        ))}
        <span className="span-2"></span>
      </div>

      <DialogCardsHome
        open={open}
        onClose={handleClose}
        content={contentDialog}
      />
    </>
  );
};

export default ContainerCardsInfo;
