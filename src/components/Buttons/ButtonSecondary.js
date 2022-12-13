import "./ButtonSecondary.css";

const ButtonSecondary = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="buttonSecondary">
      {label}
    </button>
  );
};

export default ButtonSecondary;
