import "./ButtonFooter.css";

const ButtonFooter = ({ src, onClick }) => {
  return (
    <button onClick={onClick} className="ButtonFooter">
      <img src={src} alt="" />
    </button>
  );
};

export default ButtonFooter;
