import { Box, Button, Divider, styled, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const BackButton = styled(Typography)({
    fontSize: "12px",
    fontFamily: "Rubik",
    color: "#565959",
    cursor: "pointer",
    "&:hover": { textDecoration: "underline" },
})

export const ViewProductBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    margin: "10px 0",
    height: "fit-content",
    [theme.breakpoints.down('md')]: {
        flexDirection: "column"
    }
}))

export const ProductImageBox = styled(Box)(({ theme }) => ({
    width: "40%",
    height: "79vh",
    [theme.breakpoints.down('lg')]: {
        width: "30%"
    },
    [theme.breakpoints.down('md')]: {
        minWidth: "100%",
        maxHeight: "fit-content",
    },
}))

export const ProductImage = styled('img')(({ theme }) => ({
    width: "80%",
    height: "100%",
    objectFit: "contain",
    cursor: "zoom-in",
    borderRadius: "5px",
    border: "1px solid #0000001f",
    [theme.breakpoints.down('lg')]: {
        width: "90%"
    },
    [theme.breakpoints.down('md')]: {
        width: "100%"
    }
}))

export const ProductDetailBox = styled(Box)(({ theme }) => ({
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    [theme.breakpoints.down('md')]: {
        minWidth: "100%",
    }
}))

export const ProductName = styled(Typography)(({ theme }) => ({
    fontSize: "1.2rem",
    fontFamily: "Rubik",
    [theme.breakpoints.down('lg')]: {
        fontSize: "1.1rem"
    },
    [theme.breakpoints.down('md')]: {
        fontSize: "14px"
    }
}))

export const ProductRatingBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    gap: "4px",
})

export const ProductTwoRatingBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    cursor: "pointer",
    [theme.breakpoints.down('md')]: {
        display: "none"
    }
}))

export const ProductResponseRating = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontFamily: "Rubik",
    color: "#007185",
    display: "none",
    [theme.breakpoints.down('md')]: {
        display: "block",
    }
}))

export const ProductResponseIcon = styled(KeyboardArrowDownIcon)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: "none"
    }
}))

export const ProductRatingTypo = styled(Typography)({
    fontSize: "14px",
    fontFamily: "Rubik",
    color: "#007185"
})

export const ProductBoughtTypo = styled(Typography)({
    fontSize: "12px",
    fontFamily: "Rubik"
})

export const ProductPriceBox = styled(Box)({
    display: "flex",
    gap: "10px",
    alignItems: "center"
})

export const ProductDiscountTypo = styled(Typography)({
    fontSize: "1.5rem",
    fontFamily: "Rubik",
    color: "#cc0c69",
    fontWeight: "200",
})

export const ProductPriceTypo = styled(Typography)({
    fontSize: "1.75rem",
    fontFamily: "Rubik"
})

export const ProductActualPriceTypo = styled(Typography)({
    fontSize: "12px",
    fontFamily: "Rubik",
    color: "#565959",
    textDecoration: "line-through",
})

export const LargeDivider = styled(Divider)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: "none"
    }
}))

export const SmallDivider = styled(Divider)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down('md')]: {
        display: "block",
    }
}))

export const ProductFeatureBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0",
    [theme.breakpoints.down('md')]: {
        display: "none"
    }
}))

export const ProductIndividualFeatureBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90px"
})

export const ProductFeatureTypo = styled(Typography)({
    fontSize: "12px",
    fontFamily: "Rubik",
    color: "#007185",
})

export const ProductGeneralDetailsHeading = styled(Typography)({
    fontSize: "1.25rem",
    fontFamily: "Rubik",
    margin: "0 0 10px",
    fontWeight: "500",
})

export const ProductGeneralDetailsGrid = styled(Box)({
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "20px",
    marginBottom: "10px"
})

export const ProductGeneralDesc = styled(Typography)({
    fontSize: "14px",
    fontFamily: "Rubik",
    fontWeight: "500",
})

export const ProductGeneralTypo = styled(Typography)({
    fontSize: "14px",
    fontFamily: "Rubik",
})

export const ProductAboutBox = styled(Box)({
    fontSize: "14px",
    fontFamily: "Rubik",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    margin: "20px 0",
})

export const ProductAboutHead = styled(Typography)({
    fontSize: "1rem",
    fontWeight: "500",
    fontFamily: "Rubik",
})


export const ProductInfoBox = styled(Box)(({ theme }) => ({
    width: "240px",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #0000001f",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    height: "max-content",
    [theme.breakpoints.down('sm')]: {
        width: "100%"
    }
}))

export const ProductDeliveryBox = styled(Box)({
    display: "flex",
    gap: "5px",
    alignItems: "center",
})

export const ProductDeliveryTypo = styled(Typography)({
    color: "#007185",
    fontSize: "12px",
    fontFamily: "Rubik"
})

export const ProductStockTypo = styled(Typography)({
    fontSize: "18px",
    fontFamily: "Rubik",
    color: "#007600"
})

export const ProductOutStockTypo = styled(Typography)({
    fontSize: "14px",
    fontFamily: "Rubik",
    color: "#cc0c39",
    fontWeight: "500"
})

export const ProductStockBox = styled(Box)({
    display: "flex",
    justifyContent: "space-between"
})

export const ProductStockDesc = styled(Typography)({
    fontSize: "12px",
    fontFamily: "Rubik",
    color: "#565959"
})

export const ProductStockDescInfo = styled(Typography)({
    fontSize: "12px",
    fontFamily: "Rubik",
    color: "#007185"
})

export const ProductBuyButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#ffa41c",
    color: "black",
    borderRadius: "20px",
    fontSize: "13px",
    textTransform: "capitalize",
    fontFamily: "Rubik",
    fontWeight: "normal",
    [theme.breakpoints.down('md')]: {
        display: "none"
    }
}))

export const ProductRBuyButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#ffa41c",
    color: "black",
    borderRadius: "20px",
    fontSize: "13px",
    textTransform: "capitalize",
    fontFamily: "Rubik",
    fontWeight: "normal",
    display: "none",
    width: "40%",
    [theme.breakpoints.down('md')]: {
        display: "block"
    }
}))


export const ProductSpecHead = styled(Typography)({
    fontSize: "20px",
    fontFamily: "Rubik",
    fontWeight: "500",
    marginTop: "10px",
})

export const ProductSpecBox = styled(Box)(({ theme }) => ({
    width: "40%",
    marginTop: "10px",
    [theme.breakpoints.down('md')]: {
        width: "100%"
    }
}))

export const ProductSpecDesc = styled(Typography)({
    width: "40%",
    backgroundColor: "#ebebeb",
    fontSize: "14px",
    fontFamily: "Rubik",
    padding: "12px 10px",
})

export const ProductSpecInfo = styled(Typography)({
    width: "60%",
    fontSize: "14px",
    fontFamily: "Rubik",
    padding: "12px 10px",
})

export const ShowMoreLessTypo = styled(Typography)({
    mt: 1,
    cursor: "pointer",
    fontSize: "12px",
    color: "#1976d2",
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    userSelect: "none",
})