import { Box, Button, Modal, Radio, styled, TextField, Typography } from "@mui/material";


export const CustomModal = styled(Modal)({
  backgroundColor: "#ffffff00",
  backdropFilter: "blur(6px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
})


export const PaymentBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "450px",
  backgroundColor: "white",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  padding: "20px 20px 30px",
  overflowY: "auto",  
  maxHeight: "70%",
  [theme.breakpoints.down('sm')]: {
    width: "95%"
  }
}))

export const PaymentHead = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  margin: "0 0 7px",
  fontWeight: "500"
}))

export const PaymentButton = styled(Button)({
  backgroundColor: "#fcdd3d",
  color: "black",
  borderRadius: "20px"
})


export const PaymentRadio = styled(Radio)({
  "&.Mui-checked": {
    color: "black",
  },
})

export const PaymentInput = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black', // label color when focused
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'black', // border color when focused
    },
  },
  '& .MuiOutlinedInput-root.Mui-error': {
    '&.Mui-focused fieldset': {
      borderColor: "red",
    },
  },
  '& label.Mui-error.Mui-focused': {
    color: "red",
  },
})

export const PaymentCvv = styled(Typography)({
  fontSize: "14px",
  fontWeight: "500"
})


export const SuccessHead = styled(Typography)(({theme}) => ({
  fontSize: "24px",
  marginTop: "5px",
  [theme.breakpoints.down('sm')]: {
    fontSize: "20px"
  }
}))

export const SuccessTypo = styled(Typography)(({theme}) => ({
  fontSize: "16px",
  whiteSpace: "nowrap",
  marginBottom: "5px",
  [theme.breakpoints.down('sm')]: {
    fontSize: "14px"
  }
}))

export const SuccessButton = styled(Button)({
  backgroundColor: "black",
  color: "white",
  width: "fit-content",
  marginBottom: "20px"
})