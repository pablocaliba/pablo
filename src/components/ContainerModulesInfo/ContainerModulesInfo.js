import "./ContainerModulesInfo.css";
// components
import ModuleCards from "../ModuleCards/ModuleCards";
// images
// imagenes
import imageweb_01 from "../../assets/ModulesHome/imageweb_01.png";
import imageweb_02 from "../../assets/ModulesHome/imageweb_02.png";
import imageweb_03 from "../../assets/ModulesHome/imageweb_03.png";
import imageweb_04 from "../../assets/ModulesHome/imageweb_04.png";
import imageweb_05 from "../../assets/ModulesHome/imageweb_05.png";
import imageweb_06 from "../../assets/ModulesHome/imageweb_06.png";
import imageweb_07 from "../../assets/ModulesHome/imageweb_07.png";

const infoCards = [
  {
    id: "1",
    name: (
      <div>
        <p style={{ height: "30px" }}></p>
        FEDERATIONS - CLUBS - CATEGORIES - TEAMS - PLAYERS
      </div>
    ),
    img: imageweb_01,
    label: (
      <h2 className="text-schedule">
        <p>
          It allows planning week by week, month by month group and individual
          activities to achieve the highest level of performance.
          <br />
        </p>
        <p>
          Planning of parameterizable training sessions with objectives to
          obtain the optimal conditions to reach the calendar meetings. <br />
        </p>
        <p>
          It also allows planning medical studies, tactical sessions, talks,
          etc.
        </p>
      </h2>
    ),
  },
  {
    id: "2",
    name: "VIDEO ANALYSIS",
    label:
      "Gloouds provides agile tools to tag and analyze match or training videos, identifying important plays to build a database of team or player highlights. Thanks to the integration of tools whithin Gloouds, it is also possible to enrich these moments with other parameters of our intelligent database (for example, GPS tracking) which enhances the analysis and provides new improvement tools. In addition, Gloouds lets integrate videos already tagged by third-party solutions.",
    img: imageweb_02,
  },
  {
    id: "3",
    name: "GPS ANALYSIS",
    label: (
      <h2>
        Gloouds enhances the use of traditional GPS tracking tools,
        synchronizing its data within the intelligent information base.
        <br />
        This allows the technical staff not only to understand, the
        player&apos;s physical abilities, but also to understand his performance
        under various situations that GPS cannot measure.
        <br />
        On the other hand, by performing integrated, analysis, it is possible to
        analyze spatial polygons and their effectiveness in competition.
      </h2>
    ),
    img: imageweb_03,
  },
  {
    id: "4",
    name: "EVALUATIONS",
    label: (
      <h2>
        It allows evaluating skills, both hard and soft, mathematically
        equalizing the measurements for a better weighting.
        <br />
        The evaluation criteria and skills are customizable and allow a
        historical monitoring of the evolution of players.
        <br />
        It allows users to conduct self-assessments, assess their teammates, or
        assess users under their management.
      </h2>
    ),
    img: imageweb_04,
  },
  {
    id: "5",
    name: "STATISTICS/DIGITAL REPORT",
    label: (
      <h2>
        Our innovative statistics module allows you to analyze kpi and its
        evolution within the context of relevance, that is, you will not only be
        able to see the &quot;how much&quot; but also the &quot;how&quot;.
        <br />
        Thanks to our open interfaces, we combine data from our platform with
        existing information on other platforms, such as the digital reports of
        the matches, to enrich the analyzes and achieve highly relevant reports.
      </h2>
    ),
    img: imageweb_05,
  },
  {
    id: "6",
    name: "EVENT COUNTER",
    label:
      "Our event counter module allows not only to enrich the statistics database, but also to obtain real-time data on the course of a match, perform rapid analysis and provide feedback to the coaching staff to make the changes required by the development, achieving a new advantage in the competition.",
    img: imageweb_06,
  },
  {
    id: "7",
    name: "SCHEDULE",
    label: (
      <h2 className="text-schedule">
        <p>
          It allows planning week by week, month by month group and individual
          activities to achieve the highest level of performance.
          <br />
        </p>
        <p>
          Planning of parameterizable training sessions with objectives to
          obtain the optimal conditions to reach the calendar meetings. <br />
        </p>
        <p>
          It also allows planning medical studies, tactical sessions, talks,
          etc.
        </p>
      </h2>
    ),
    img: imageweb_07,
  },
];

const ContainerModulesInfo = () => {
  return (
    <>
      <div className="containerModulesInfo--line-1"></div>
      <div className="containerModulesInfo--line-2"></div>

      <div className="containerModulesInfo">
        {infoCards?.map((card, i) => (
          <ModuleCards
            key={i}
            title={card.name}
            description={card.label}
            img={card.img}
            style={i % 2 === 0}
          />
        ))}
      </div>
    </>
  );
};

export default ContainerModulesInfo;
