import "./BoxPartnershipProgram.css";

const BoxPartnershipProgram = ({ title, text, myid }) => {
  return (
    <div className="partnership--box-description" key={myid}>
      <div className="partnership--box-description-title">
        <h4>{title}</h4>
      </div>
      <div className="partnership--box-description-text">
        <h2>{title}</h2>
        {text}
      </div>
    </div>
  );
};

export default BoxPartnershipProgram;
