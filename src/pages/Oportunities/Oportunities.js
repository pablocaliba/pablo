import "./Oportunities.css";
import oportunities_cell from "../../assets/Oportunities/OppMap.png";
// components
import TitlePage from "../../components/TitlePage/TitlePage";

const cardsOportunities = [
  {
    id: "1",
    title: "Promise Zone",
    content:
      "An area in which the players special qualities promise a potential growth in competition during the season.",
  },
  {
    id: "2",
    title: "Illusion Zone",
    content:
      "Zone of hope to achieve by the player, with real basis, the expected performance for the competition in the season and whose consequence is to reach the zone of Success.",
  },
  {
    id: "3",
    title: "Success Zone",
    content:
      "Zone where the player achieves the expected result for the competition and season happily and satisfactorily; realizing the dream undertaken.",
  },
];

const Oportunities = () => {
  return (
    <div>
      <TitlePage title="Oportunities map" />
      <span className="oportunities--span-1"></span>
      <div className="oportinities--description">
        <p>
          This tool allows players to develop their potential, understand their
          evolution with equal opportunities, form their professional career in
          any Confederation and build their own destiny. It provides
          opportunities for players to participate in different leagues around
          the world according to the evaluations and data collected on our
          platform, segmented by zones of Promise, Illusion and Success.
        </p>
      </div>
      <div className="oportunities--container-box">
        {cardsOportunities.map((card) => {
          return (
            <div key={card.id} className="oportunities--box">
              <h2>{card.title}</h2>
              <p>{card.content}</p>
            </div>
          );
        })}
      </div>
      <div className="oportunities--image">
        <img src={oportunities_cell} alt="" />
      </div>
    </div>
  );
};

export default Oportunities;
