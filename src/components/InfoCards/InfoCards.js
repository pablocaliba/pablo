import "./InfoCards.css";

const InfoCards = ({ title, img, myKey, label, onClick }) => {
  return (
    <div key={myKey} className="infoCard--container">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{label}</p>
      <button onClick={onClick}>+ info</button>
    </div>
  );
};

export default InfoCards;
