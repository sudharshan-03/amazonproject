import { Box, Card, styled, Typography } from "@mui/material";

export const WrapBox = styled(Box)(({ theme }) => ({
    position: "relative",
    background: "#eee",
    height: "auto",
    zIndex: "",
    [theme.breakpoints.down('md')]: {
        background: "white",
    }
}))


export const LandingTypo = styled(Typography)(({ theme }) => ({
    display: "none",
    backgroundColor: "#ccc",
    fontWeight: "500",
    padding: "5px 10px",
    marginTop: "-1px",
    cursor: "pointer",
    [theme.breakpoints.down('md')]: {
        display: "block"
    }
}))

export const LandingBox = styled(Box)(({ theme }) => ({
    position: "relative",
    top: "-18.5rem",
    marginBottom: '-17.25rem',
    height: "auto",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    padding: "20px",
    [theme.breakpoints.down('lg')]: {
        top: "-14rem"
    },
    [theme.breakpoints.down('md')]: {
        marginBottom: '0',
        padding: "10px 0",
        position: "static",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    }
}))

export const LandingCard = styled(Card)(({ theme }) => ({
    height: "11rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 15px",
    gap: "5px",
    boxShadow: "none",
    [theme.breakpoints.down('md')]: {
        padding: "0",
        gap: "0",
        backgroundColor: "#f5f5f5",
        borderRadius: "0px",
        height: "fit-content",
    }
}))

export const CardinTypo = styled(Typography)(({ theme }) => ({
    fontSize: "21px",
    fontWeight: "500",
    [theme.breakpoints.down('md')]: {
        display: "none",
    }
}))

export const CardinImg = styled('img')({
    objectFit: "contain",
    height: "121px",
    width: "121px",
    cursor: "pointer",
})

export const CardResTypo = styled(Typography)(({ theme }) => ({
    display: "none",
    backgroundColor: "white",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    fontSize: "13px",
    fontFamily: "Inter",
    [theme.breakpoints.down('md')]: {
        display: "block"
    }
}))

export const CardResPrice = styled(Typography)(({ theme }) => ({
    display: "none",
    backgroundColor: "white",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    fontFamily: "Rubik",
    [theme.breakpoints.down('md')]: {
        display: "block"
    }
}))