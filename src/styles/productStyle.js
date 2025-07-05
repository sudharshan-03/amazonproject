import { Box, Button, styled, Typography } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";


export const ProductResBox = styled(Box)(({ theme }) => ({
    width: "86%",
    padding: "20px",
    [theme.breakpoints.down('md')]: {
        width: "100%",
        padding: "0 10px 10px"
    }
}))

export const ProductResHead = styled(Typography)(({ theme }) => ({
    fontSize: "20px",
    fontFamily: "Rubik",
    fontWeight: "500",
    [theme.breakpoints.down('md')]: {
        display: "none"
    }
}))

export const ProductResSub = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontFamily: "Rubik",
    color: "#565959",
    [theme.breakpoints.down('md')]: {
        display: "none"
    }
}))

export const FilterBox = styled(Box)(({ theme }) => ({
    display: "none",
    justifyContent: "end",
    [theme.breakpoints.down('md')]: {
        display: "flex",
    }
}))

export const FilterButton = styled(Button)({
    margin: "5px 0",
    color: "#007185",
    fontSize: "10px",
    fontFamily: "Rubik",
    justifyContent: "end",
})

export const ProductFirstBox = styled(Box)(({theme}) => ({
    width: "21%",
    height: "250px",
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    [theme.breakpoints.down('md')]: {
        width: "35%"
    }
}))

export const ProductSecondBox = styled(Box)(({theme}) => ({
    width: "77%",
    minHeight: "200px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    [theme.breakpoints.down('md')]: {
        width: "65%"
    }
}))

export const ProductImgBox = styled(Box)({
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    height: "75%",
})

export const ProductImg = styled('img')({
    backgroundColor: "#f7f7f7",
    objectFit: "contain",
    height: "95%",
    width: "100%",
    display: "block",
    cursor: "pointer"
})

export const ProductName = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    fontFamily: "Inter",
    width: "85%",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    cursor: "pointer",
    '&:hover': {
        color: "orange"
    },
    [theme.breakpoints.down('md')]: {
        fontSize: "14px",
    }
}))

export const AllProductBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "20px"
})

export const ProductRatingBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "2px"
})


export const ResponseArrow = styled(KeyboardArrowDownOutlinedIcon)(({ theme }) => ({
    color: "#007185",
    [theme.breakpoints.down('md')]: {
        display: "none",
    }
}))

export const RatingsTypo = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    color: "#007185",
    fontFamily: "Rubik",
    [theme.breakpoints.down('md')]: {
        fontSize: "13px",
        display: "none"
    }
}))
export const RatingResTypo = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    color: "#007185",
    fontFamily: "Rubik",
    display: "none",
    [theme.breakpoints.down('md')]: {
        fontSize: "13px",
        display: "block"
    }
}))

export const RatingNumber = styled(Typography)(({ theme }) => ({
    color: "#007185",
    fontSize: "13px",
    display: "none",
    [theme.breakpoints.down('md')]: {
        display: "inline"
    }
}))

export const PepBuyCountTypo = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontFamily: "Rubik",
    color: "#565959",
    [theme.breakpoints.down('md')]: {
        fontSize: "12px"
    }
}))

export const RupeeSymbol = styled(Typography)(({ theme }) => ({
    fontFamily: "Rubik",
    [theme.breakpoints.down('md')]: {
        fontSize: "12.8px"
    }
}))


export const ProductPrice = styled(Typography)(({ theme }) => ({
    fontSize: "1.75rem",
    fontFamily: "Inter",
    [theme.breakpoints.down('md')]: {
        fontSize: "18px",
    }
}))

export const ProductActualPrice = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontFamily: "Rubik",
    color: "#565959",
    [theme.breakpoints.down('md')]: {
        fontSize: "12px",
    }
}))

export const LargeDiscount = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    fontFamily: "Rubik",
    [theme.breakpoints.down('md')]: {
        display: "none",
    }
}))

export const SmallDiscount = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontFamily: "Rubik",
    color: "#565959",
    display: "none",
    [theme.breakpoints.down('md')]: {
        display: "block",
    }
}))

export const ActualPriceBox = styled(Box)({
    display: "flex", 
    alignItems: "end", 
    gap: "5px"
})

export const DiscountedPrice = styled(Typography)(({theme}) => ({
    fontSize: "14px",
    fontFamily: "Rubik",
    backgroundColor: "#74Da89",
    padding: "2px 5px",
    margin: "0 10px 0 0",
    width: "fit-content",
    [theme.breakpoints.down('md')]: {
        fontSize: "12px",
    }
}))

export const DiscountTypo =styled(Typography)(({theme}) => ({
    fontSize: "14px",
    fontFamily: "Rubik",
    color: "#565959",
    [theme.breakpoints.down('md')]: {
        fontSize: "12px",
    }
}))

export const SwapBox = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    [theme.breakpoints.down('md')]: {
        flexDirection: "column-reverse"
    }
}))

export const StockTypo = styled(Typography)({
    fontSize: "14px",
    color: "#cc0c39",
    fontFamily: "Rubik",
    fontWeight: "300"
})

export const BuyButton = styled(Button)({
    fontSize: "13px",
    fontFamily: "Rubik",
    // padding: "8px 10px 8px 11px",
    borderRadius: "20px",
    width: "fit-content",
    backgroundColor: "#ffa41c",
    color: "black",
    border: "none",
    textTransform: "capitalize",
    fontWeight: "normal"
})

export const StockButton = styled(Button)({
    fontWeight: "normal",
    fontSize: "13px",
    fontFamily: "Rubik",
    // padding: "8px 10px 8px 11px",
    borderRadius: "20px",
    width: "fit-content",
    backgroundColor: "white",
    color: "black",
    border: "1px solid black",
    textTransform: "none"
})

export const LargeBox = styled(Box)(({theme}) => ({
    display: "flex", 
    flexDirection: "column", 
    height: "50px",
    [theme.breakpoints.down('md')]: {
        height: "0"
    }
}))