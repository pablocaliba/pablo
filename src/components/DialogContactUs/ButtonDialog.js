import "./ButtonDialog.css";

const ButtonDialog = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="ButtonDialog" type="submit">
      {label}
    </button>
  );
};

export default ButtonDialog;
