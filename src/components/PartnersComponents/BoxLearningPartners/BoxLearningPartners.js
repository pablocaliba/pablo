import "./BoxLearningPartners.css";

const BoxLearningPartners = ({ title, title2, label, label2 }) => {
  return (
    <div className="boxLearningPartners--container">
      <h1>
        <p> {title} </p>
        <p> {title2} </p>
      </h1>
      <h2>{label}</h2>
      <h3>{label2}</h3>
    </div>
  );
};

export default BoxLearningPartners;
