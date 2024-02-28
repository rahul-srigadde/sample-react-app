import React from "react";
import { Typography, styled } from "@mui/material";
import loader from "../../assets/Loader.svg";

const StyledTypography = styled(Typography)(() => ({
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100vh",
  background: " rgba(0,0,0,0.4)",
  zIndex: 9999,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledImg = styled("img")(() => ({
  animation: "rotation 1.5s infinite linear",
  "@keyframes rotation": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(359deg)",
    },
  },
}));

export const GlobalLoader = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <StyledTypography component="div">
          <StyledImg src={loader} alt={"loading"} />
        </StyledTypography>
      ) : (
        <></>
      )}
    </>
  );
};
