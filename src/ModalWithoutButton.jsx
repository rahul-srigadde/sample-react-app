import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { colors } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function Modal(props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    if (handleOpen) handleOpen();
    setOpen(true);
  };

  const defaultActionsButtons = [
    { button: "ok", callback: () => handleClose(), variant: "contained" },
    { button: "cancel", callback: () => handleClose(), variant: "contained" },
  ];
  const {
    buttonText,
    buttonVariant = "contained",
    title,
    handleOpen,
    renderComponent = <></>,
    actionsButtons = defaultActionsButtons,
    maxWidth = false,
    marginLeft,
  } = props;

  return (
    <React.Fragment>
      <Button
        variant={buttonVariant}
        onClick={handleClickOpen}
        style={{ marginLeft, backgroundColor: "#2E8BC9" }}
      >
        {`buttonText`}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth={maxWidth}
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{ backgroundColor: "#e6e6e6" }}
        >
          {title}
          <IconButton
            aria-describedby={"closeIcon"}
            size="small"
            style={{ cursor: "pointer", float: "right", marginTop: "5px" }}
            onClick={handleClose}
          >
            <CloseIcon></CloseIcon>
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-description"> */}
          {renderComponent}
          {/* </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          {actionsButtons
            .sort((a, b) => a - b)
            .map((x, index) => (
              <Button
                key={index}
                onClick={() => {
                  x.callback();
                  handleClose();
                }}
                autoFocus={x.autoFocus}
                variant={x.variant}
                style={{ backgroundColor: "#2E8BC9", color: "white" }}
              >
                {x.button}
              </Button>
            ))}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
