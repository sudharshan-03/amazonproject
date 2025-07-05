import { AppBar, Box, styled, Tab, Tabs, Typography } from "@mui/material";

export const CustomNav = styled(AppBar)({
    height: "3rem",
    backgroundColor: "#232f3e",
    boxShadow: "none"
})

export const ResponseTab = styled(Tabs)(({theme}) => ({
  [theme.breakpoints.down('md')]:{
    display: "none"
  }
}))


export const WhiteTab = styled(Tab)({
    color: "white !important",
    textTransform: "capitalize",
    fontSize: "14px",
    fontWeight: "normal",
    fontFamily: "PT Sans",
    border: "2px solid transparent",
    padding: "5px 10px",
    '&:hover': {
        border: "2px solid white"
    }
})

export const ToolBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "8px"
})

export const ToolTypo = styled(Typography)({
    fontFamily: "Rubik", 
    fontSize: "14px",
    cursor: "pointer",
    '&:hover': {
        color: "orange",
        textDecoration: "underline"
    }
})

export const ResponseBox = styled(Box)(({theme}) => ({
  display: "none",
  height: "53px",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  }
}))