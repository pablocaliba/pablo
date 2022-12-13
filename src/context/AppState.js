import { useState, useRef } from "react";
import AppContext from "./AppContext";

const AppState = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ref = useRef(null);

  const goToDiv = () => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AppContext.Provider
      value={{
        handleClickOpen,
        handleClose,
        goToDiv,
        ref,
        open,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppState;
