import { useState, useContext } from "react";
import AppContext from "../../context/AppContext";
import { sendEmail } from "../../services/email";

import { makeStyles } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import ButtonDialog from "./ButtonDialog";

import "./DialogContactUs.css";

const useStyles = makeStyles(() => ({
  container: {
    "& .MuiDialog-paper": {
      padding: "20px 10px",
      borderRadius: "0px",
    },
  },
  title: {
    fontSize: "20px",
    lineHeight: "23px",
    fontFamily: "Hind Siliguri Medium",
  },
  input: {
    color: "red",
    "& .MuiInputBase-root": {
      marginBottom: "30px",
    },
  },
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 8,
    position: "relative",
    border: "1px solid #ced4da",
    fontSize: 18,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Hind Siliguri Medium"],
    "&:focus": {
      boxShadow: ` #8D8D8D 0 0 0 0.1rem`,
      borderColor: "#8D8D8D",
    },
  },
  "& .MuiFormLabel-root-MuiInputLabel-root": {
    color: "#8D8D8D",
    "&:focus": {
      boxShadow: ` #8D8D8D 0 0 0 0.1rem`,
      borderColor: "#8D8D8D",
    },
  },
}));

const DialogContactUs = () => {
  const classes = useStyles();

  const initialState = {
    subject: "Nuevo contacto desde la web de Gloouds",
    to: "hola@gloouds.com",
    template: "newContact",
    lenguage: "us",
    name: "",
    message: "",
    email: "",
    phone: "",
  }
  
  const [form, setForm] = useState(initialState);

  const { open, handleClose } = useContext(AppContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setForm(initialState);
  };
  
  const onSubmit = (e) => {
    e.preventDefault()
    sendEmail(form);
    reset();
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-DialogContactUs"
      aria-describedby="alert-dialog-DialogContactUs"
      className={classes.container}
    >
      <DialogTitle id="DialogContactUs--title" className={classes.title}>
        {
          "Leave us your details and shortly a Gloouds representative will contact you to coordinate a demo will contact you to coordinate a product demo."
        }
      </DialogTitle>
      <form onSubmit={(e) => onSubmit(e)}>
        <DialogContent>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <FormControl variant="standard" className={classes.input}>
              <InputLabel
                shrink
                htmlFor="name-input"
                inputlabelprops={{
                  className: classes.input,
                }}
              >
                Name and surname
              </InputLabel>
              <BootstrapInput
                placeholder="Example: Juan Perez"
                id="name-input"
                name="name"
                onChange={(e) => handleChange(e)}
                value={form.name}
              />
            </FormControl>
            <FormControl variant="standard" className={classes.input}>
              <InputLabel shrink htmlFor="email-input">
                Email
              </InputLabel>
              <BootstrapInput
                placeholder="Example: Juanperez@gmail.com"
                id="email-input"
                name="email"
                onChange={(e) => handleChange(e)}
                value={form.email}
              />
            </FormControl>
            <FormControl variant="standard" className={classes.input}>
              <InputLabel shrink htmlFor="phone-input">
                Contact telephone
              </InputLabel>
              <BootstrapInput
                placeholder="+ Country code + Area code + Phone number"
                id="phone-input"
                name="phone"
                onChange={(e) => handleChange(e)}
                value={form.phone}
              />
            </FormControl>
            <FormControl variant="standard" className={classes.input}>
              <InputLabel shrink htmlFor="message-input">
                Leave us your comments
              </InputLabel>
              <BootstrapInput
                placeholder="Comments..."
                id="message-input"
                name="message"
                onChange={(e) => handleChange(e)}
                value={form.message}
              />
            </FormControl>
          </div>
        </DialogContent>
        <DialogActions style={{ padding: "10px 25px" }}>
          <ButtonDialog label="Send" />
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default DialogContactUs;
