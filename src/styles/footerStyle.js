import { Box, styled, Typography, Button } from "@mui/material";


export const MoveTopBox = styled(Box)(({theme}) => ({
    backgroundColor: "#37475a",
    width: "100%",
    padding: "13px",
    fontSize: "14px",
    color: "white",
    textAlign: "center",
    cursor: "pointer",
    zIndex: 9999,
    position: "relative",
    [theme.breakpoints.down('md')]: {
        padding: "5px 10px 10px",
    }
}))

export const MoveResTypo = styled(Typography)(({theme}) => ({
    fontSize: "14px",
    fontFamily: "Rubik",
    padding: "0",
    letterSpacing: "0.5px",
    [theme.breakpoints.down('md')]: {
        display: "none",
    }
}))

export const MoveRespBox = styled(Box)(({theme}) => ({
    display: "none",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2px",
    [theme.breakpoints.down('md')]: {
        display: "flex"
    }
}))

export const FooterContainer = styled(Box)(({theme}) => ({
    background: "#232f3e",
    minHeight: "250px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, 250px)",
    placeContent: "center",
    rowGap: "20px",
    columnGap: "40px",
    padding: "30px 0px",
    flexWrap: "wrap",
    zIndex: 9999,
    position: "relative",
    [theme.breakpoints.down('md')]: {
        display: "none"
    }
}))

export const FooteRContainer = styled(Box)(({theme}) => ({
    background: "#232f3e",
    minHeight: "250px",
    justifyContent: "space-around",
    alignItems: "start",
    padding: "20px",
    flexWrap: "wrap",
    display: "none",
    [theme.breakpoints.down('md')]: {
        display: "flex",
    }
}))

export const FooterBox = styled(Box)({
    color: "white",
    // width: "25%"
})
export const FooteRBox = styled(Box)({
    color: "white",
    width: "50%",
    fontSize: "14px",
})

export const FooterHead = styled(Typography)({
    fontWeight: "500",
    color: "white",
    fontFamily: "Rubik",
    cursor: "text"
})

export const FooterLink = styled(Typography)({
    fontSize: "14px",
    cursor: "pointer",
    fontFamily: "Rubik",
    color: "#ddd",
    '&:hover': {
        textDecoration: "underline"
    }
})


export const LastContainer = styled(Box)(({theme}) => ({
    display: "none",
    flexDirection: "column",
    background:"#131a22",
    padding: "20px",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    [theme.breakpoints.down('md')]: {
        display: "flex"
    }
}))

export const LangTypo = styled(Typography)({
    color:  "#999", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "space-between",
    gap: "10px",
    fontSize: "14px", fontFamily: "Rubik"
})

export const LastTypo = styled(Typography)({
    color:  "white", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
    fontSize: "1rem",
    fontFamily: "Rubik"
})

export const LastBox = styled(Box)({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    // alignContent: "center",
    gap: "10px",
})

export const LastBoxTypo = styled(Typography)({
    fontSize: "12px",
    fontFamily: "Rubik",
    color: "#999",
    whiteSpace: "nowrap"
})


export const SigninBox = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "8rem",
    backgroundColor: "white",
    gap: "5px",
    position: "relative",
    zIndex: 999,
    borderTop: "1px solid #c2bebe",
    [theme.breakpoints.down('md')]: {
        display: "none"
    }
}))

export const SecondarySignup = styled(Typography)({
    fontSize: "12px",
    fontFamily: "Rubik",
})

export const SecondaryButton = styled(Button)({
    fontFamily: "Rubik",
    backgroundColor: "#ffc52f",
    color: "black",
    width: "14rem",
    textTransform: "capitalize",
    fontSize: "12px",
    border: "1px solid #e6a400",
})