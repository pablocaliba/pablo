import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseCyan from "../Icons/CloseCyan";

import "./DialogCardsHome.css";

const DialogCardsHome = ({ open, onClose, content }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="dialog--custom"
    >
      <DialogContent>
        <div className="alert-dialog">
          <div className="alert-dialog--button-close">
            <button onClick={onClose}>
              {" "}
              <CloseCyan />{" "}
            </button>
          </div>
          <div className="alert-dialog--container">
            <img src={content?.img} alt="" />
            <h2>{content?.title}</h2>
            <p>{content?.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCardsHome;
