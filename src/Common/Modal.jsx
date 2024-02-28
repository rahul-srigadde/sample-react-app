/* eslint-disable react/prop-types */
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function Modal(props) {
  const defaultActionsButtons = [
    { button: "ok", callback: () => handleClose(), variant: "contained" },
    { button: "cancel", callback: () => handleClose(), variant: "contained" },
  ];
  const {
    buttonText,
    buttonVariant = "contained",
    title,
    open = false,
    setOpen,
    handleOpen,
    renderComponent = <></>,
    actionsButtons = defaultActionsButtons,
    maxWidth = false,
    marginLeft,
    disableActions = false,
  } = props;

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    if (handleOpen) handleOpen();
    setOpen(true);
  };

  return (
    <React.Fragment>
      <Button
        variant={buttonVariant}
        onClick={handleClickOpen}
        style={{ marginLeft, backgroundColor: "#2E8BC9" }}
      >
        {buttonText}
      </Button>
      <Dialog
        open={open}
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
        <DialogContent>{renderComponent}</DialogContent>
        {!disableActions && (
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
        )}
      </Dialog>
    </React.Fragment>
  );
}
