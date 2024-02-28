import { Slide, Snackbar, Typography, styled } from "@mui/material";
import { Close } from "@mui/icons-material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import React from "react";

const StyledSnackbar = styled(Snackbar)(() => ({
  maxWidth: 550,
  top: 0,
}));
const StyledTypographyToastContext = styled(Typography)(() => ({
  maxWidth: 270,
  margin: "25px 125px 25px 25px",
  fontSize: "14px",
}));

const StyledTypographyClose = styled(Typography)(() => ({
  display: "flex",
  justifyContent: "flex-end",
}));
const StyledCheckCircleOutlinedIcon = styled(CheckCircleOutlinedIcon)(() => ({
  marginLeft: "15px",
}));

const StyledErrorOutlineIcon = styled(ErrorOutlineIcon)(() => ({
  marginLeft: "15px",
}));
const StyledClose = styled(Close)(() => ({
  cursor: "pointer",
  marginBottom: "30px",
  marginRight: "10px",
}));
function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}

export const ToastMessage = (props) => {
  const StyledTypography = styled(Typography)(() => ({
    display: "flex",
    borderRadius: "5px",
    alignItems: "center",
    justifyContent: "space-betweeen",
    color: "white",
    backgroundColor: props.props.successpopup ? "#13AA10" : "#EF4242",
  }));

  return (
    <>
      <StyledSnackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={props.open}
        autoHideDuration={2000}
        TransitionComponent={SlideTransition}
        onClose={props.handleClose}
      >
        <StyledTypography component="div">
          {props.props.successpopup ? (
            <StyledCheckCircleOutlinedIcon />
          ) : (
            <StyledErrorOutlineIcon />
          )}
          <StyledTypographyToastContext component="div">
            {props.props.content}
          </StyledTypographyToastContext>
          <StyledTypographyClose component="div">
            <StyledClose onClick={props.handleClose} />
          </StyledTypographyClose>
        </StyledTypography>
      </StyledSnackbar>
    </>
  );
};
