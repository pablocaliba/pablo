// import { useRef } from "react"
import "./ModuleCards.css";

const ModuleCards = ({ title, description, img, style }) => {
  // const moduleCardRef = useRef(null)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        className={
          style
            ? "moduleCards moduleCards--container-1"
            : "moduleCards moduleCards--container-2"
        }
      >
        <div
          className="moduleCards--container-description"
          // ref={moduleCardRef}
        >
          <h3>{title}</h3>
          <div>{description}</div>
        </div>
        <div
          className="moduleCards--container-image"
          // style={{ height: `${moduleCardRef?.current?.clientHeight}px` }}
        >
          <span></span>
          <img src={img} alt="" className="moduleCards--image" />
        </div>
      </div>
    </div>
  );
};

export default ModuleCards;
