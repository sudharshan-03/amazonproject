import { Box, styled, Typography, SwipeableDrawer, Drawer } from "@mui/material";

export const MenuBox = styled(Box)({
    width: "80vw",
    backgroundColor: "white",
})

export const MenuSmall = styled(Box)({
    width: "100%",
    backgroundColor: "#232f3e",
    padding: "16px 20px",
    height: "7rem",
})

export const MenuRightTypo = styled(Typography)({
    fontWeight: "600",
    fontSize: "14px",
    textAlign: "right",
    color: "white",
})

export const MenuMainSub = styled(Typography)({
    fontWeight: "600",
    fontSize: "18px",
    fontFamily: "Roboto",
    color: "white",
})

export const MenuMainHead = styled(Typography)({
    fontWeight: "600",
    fontSize: "22px",
    fontFamily: "Roboto",
    color: "white",
})

export const MenuMid = styled(Box)({
    height: "4.4rem",
    backgroundColor: "white",
    color: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px"
})

export const MenuEnd = styled(Box)({
    padding: "15px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
})

export const SDrawer = styled(Drawer)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down('md')]: {
        display: "block"
    }
}))