import "./ButtonPrimary.css";

const ButtonPrimary = ({ label, onClick }) => {
  return (
    <div className="buttonPrimaryContainer">
      <button onClick={onClick} className="buttonPrimary">
        <p> {label} </p>
      </button>
    </div>
  );
};

export default ButtonPrimary;
