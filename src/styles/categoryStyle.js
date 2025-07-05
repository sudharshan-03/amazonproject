import { Box, Card, styled, Typography } from "@mui/material";

export const CategoryHead = styled(Typography)({
    fontSize: "22px",
    margin: "16px 0",
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: "0.00938em",
    cursor: "text"
})

export const CategoryOutBox = styled(Box)({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "45px",
    columnGap: "32px",
    padding: "32px 15px 15px",
    alignContent: "center",
    margin: "0 auto",
})

export const CategoryInBox = styled(Card)({
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    cursor: "pointer",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
 })

export const CategoryImage = styled('img')({
    width: "100%",
    margin: "0 auto",
    height: "100%",
    objectFit: "contain",
})