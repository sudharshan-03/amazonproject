import { AppBar, Autocomplete, Box, Button, IconButton, Select, styled, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const CustomTool = styled(AppBar)(({theme}) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: "10px",
    alignItems: "center",
    padding: "5px 15px",
    backgroundColor: "#131921",
    [theme.breakpoints.down('md')]: {
        height: "7.2rem",
        display: "block",
        padding: "0px 5px",
    }
}))

export const LocationBox = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    gap: "0px",
    [theme.breakpoints.down('md')]: {
        display: "none"
    }
}))

export const FontTwelve = styled(Typography)({
    fontSize: "12px",
    fontFamily : "Rubik"
})

export const FontFourteen = styled(Typography)({
    fontSize: "14px",
    fontFamily : "Rubik"
})

export const InputBox = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "stretch",
    justifyContent: "start",
    flex: "1",
    [theme.breakpoints.down('lg')]: {
        flex: "1",
    },
    [theme.breakpoints.down('md')]: {
        flex: "1",
        width: "100%"
    }
}))

export const CustomLangAndNameBox = styled(Box)(({theme}) => ({
    display: "flex",
    width: "28%",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down('lg')]: {
        width: "fit-content"
    }
}))

export const SearchButton = styled(Button)(({theme}) => ({
    backgroundColor: "#febd69",
    minWidth: "50px",
    borderRadius: "0 5px 5px 0",
    "&:hover": {
        backgroundColor: "#fcdd3d",
        alignSelf: "center",
        height: "38.5px",
    },
    [theme.breakpoints.down('md')]: {
    }
}))

export const LangBox = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "5px",
    border: "2px solid transparent",
    "&:hover": {
        border: "2px solid white",
        borderRadius: "5px",
        cursor: "pointer"
    },
    [theme.breakpoints.down('lg')]: {
        display: "none"
    }
}))

export const CommonBox = styled(Box)({
    display: "flex", 
    alignItems: "center",
})

export const CommonTypo = styled(Typography)({
    fontSize: "14px",
    fontWeight: "500",
    fontFamily: "Rubik"
})

export const NameBox = styled(Box)(({theme}) => ({
    border: "2px solid transparent",
    padding: "5px 10px",
    '&:hover': {
        border: "2px solid white",
        borderRadius: "5px",
        cursor: "pointer"
    },
    [theme.breakpoints.down('md')]: {
        display: "none"
    }
}))

export const MenuButton = styled(MenuIcon)(({theme}) => ({
    color: "white",
    display: "none",
    [theme.breakpoints.down('md')]: {
        display: "flex",
        alignSelf: "center"
    }
}))

export const ShopBox = styled(Box)(({theme}) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: "flex",
        alignItems: "center",
        gap: "5px",
    }
}))

export const ImageBox = styled(Box)(({theme}) => ({
    display: "flex",
    cursor: "pointer",
    [theme.breakpoints.down('md')]: {
        display: "flex",
        flex: 0.7,
        alignSelf: "start",
    }
}))

export const CustomSelect = styled(Select)(({theme}) => ({
    backgroundColor: "#eee",
    borderRadius: "5px 0 0 5px",
    width: "15%",
    fontSize: "13px",
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: "black"
    },
    [theme.breakpoints.down('md')]: {
        display: "none"
    }
}))

export const CustomAuto = styled(Autocomplete)(({theme}) => ({
    backgroundColor:"white",
    flex: "1",
    [theme.breakpoints.down('md')]: {
        borderRadius: "5px 0 0 5px",
    },
}))

export const ResponsiveBox = styled(Box)(({theme}) => ({
    display: "flex",
    marginRight: "10px",
    gap: "20px",
    [theme.breakpoints.down('md')]: {
        padding: "10px 10px",
        // width: "100vw",
        justifyContent: "space-between",
    }
}))