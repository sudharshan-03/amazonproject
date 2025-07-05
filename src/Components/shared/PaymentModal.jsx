import * as React from "react";
import Box from "@mui/material/Box";
import {
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import {
  CustomModal,
  PaymentBox,
  PaymentButton,
  PaymentCvv,
  PaymentHead,
  PaymentInput,
  PaymentRadio,
  SuccessButton,
  SuccessHead,
  SuccessTypo,
} from "../../styles/paymentStyle";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function PaymentModal({ open, handleClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [radioItem, setRadioItem] = useState("");
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [cardDetails, setcardDetails] = useState({
    number: "",
    name: "",
    date: "",
    cvv: "",
    upi: "",
  });
  const [cardHelper, setCardHelper] = useState({
    numbHelp: "",
    nameHelp: "",
    dateHelp: "",
    cvvHelp: "",
    upiHelp: "",
  });

  const cardNumberPattern = /^\d{16}$/;
  const datePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const cvvPattern = /^\d{3}$/;

  const CheckCardNumber = (value) => {
    if (!value) {
      setCardHelper((prev) => ({
        ...prev,
        numbHelp: "Card Number is required",
      }));
      return false;
    } else if (!cardNumberPattern.test(value)) {
      setCardHelper((prev) => ({
        ...prev,
        numbHelp: "Card Number must be 16 digits",
      }));
      return false;
    } else {
      setCardHelper((prev) => ({ ...prev, numbHelp: "" }));
      return true;
    }
  };

  const CheckCardName = (value) => {
    if (!value) {
      setCardHelper((prev) => ({
        ...prev,
        nameHelp: "Cardholder Name is required",
      }));
      return false;
    } else {
      setCardHelper((prev) => ({ ...prev, nameHelp: "" }));
      return true;
    }
  };

  const CheckCardDate = (value) => {
    if (!value) {
      setCardHelper((prev) => ({
        ...prev,
        dateHelp: "Expiry Date is required",
      }));
      return false;
    } else if (!datePattern.test(value)) {
      setCardHelper((prev) => ({
        ...prev,
        dateHelp: "Expiry Date must be MM/YY",
      }));
      return false;
    } else {
      setCardHelper((prev) => ({ ...cardHelper, dateHelp: "" }));
      return true;
    }
  };

  const CheckCardCvv = (value) => {
    if (!value) {
      setCardHelper((prev) => ({ ...prev, cvvHelp: "CVV is required" }));
      return false;
    } else if (!cvvPattern.test(value)) {
      setCardHelper((prev) => ({
        ...prev,
        cvvHelp: "CVV must be 3 digits",
      }));
      return false;
    } else {
      setCardHelper((prev) => ({ ...cardHelper, cvvHelp: "" }));
      return true;
    }
  };

  const CheckUpi = (value) => {
    if (!value) {
      setCardHelper((prev) => ({
        ...prev,
        upiHelp: "UPI ID is required",
      }));
      return false;
    } else {
      setCardHelper((prev) => ({ ...prev, upiHelp: "" }));
      return true;
    }
  };

  const handlePaymentClick = () => {
    if (radioItem === "card") {
      const number = CheckCardNumber(cardDetails.number);
      const name = CheckCardName(cardDetails.name);
      const date = CheckCardDate(cardDetails.date);
      const cvv = CheckCardCvv(cardDetails.cvv);
      if (number && name && date && cvv) {
        setSuccess(true);
      }
    } else if (radioItem === "upi") {
      const upi = CheckUpi(cardDetails.upi);
      if (upi) {
        setSuccess(true);
      }
    } else {
      setSuccess(true);
    }
  };

  const handlePaymentClose = () => {
    navigate("/landing");
  };

  useEffect(() => {
    setcardDetails({ number: "", name: "", date: "", cvv: "", upi: "" });
    setCardHelper({
      numbHelp: "",
      nameHelp: "",
      dateHelp: "",
      cvvHelp: "",
      upiHelp: "",
    });
  }, [radioItem, open]);

  useEffect(() => {
    setRadioItem("");
    setSuccess(false);
  }, [open]);

  return (
    <div>
      <CustomModal open={open} onClose={handleClose}>
        <Slide direction="down" in={open}>
          <PaymentBox>
            {!success && (
              <>
                <PaymentHead>Select Payment Method</PaymentHead>
                <Divider sx={{ borderBottomWidth: "2px" }} />
                <FormControl sx={{ margin: "20px 0 30px" }}>
                  <RadioGroup
                    name="radio-buttons-group"
                    value={radioItem}
                    onChange={(e) => setRadioItem(e.target.value)}
                  >
                    <FormControlLabel
                      value="card"
                      control={<PaymentRadio />}
                      label="Debit Card or Credit Card"
                    />
                    <FormControlLabel
                      value="upi"
                      control={<PaymentRadio />}
                      label="UPI"
                    />
                    <FormControlLabel
                      value="cash"
                      control={<PaymentRadio />}
                      label="Cash on Delivery"
                    />
                  </RadioGroup>
                </FormControl>
                {radioItem === "card" && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                      margin: "20px 0",
                    }}
                  >
                    <PaymentInput
                      variant="outlined"
                      fullWidth
                      label="Card number"
                      required
                      helperText={cardHelper.numbHelp}
                      error={cardHelper.numbHelp}
                      onChange={(e) => {
                        setcardDetails({
                          ...cardDetails,
                          number: e.target.value,
                        });
                        CheckCardNumber(e.target.value);
                      }}
                      onBlur={() => CheckCardNumber(cardDetails.number)}
                    ></PaymentInput>
                    <PaymentInput
                      variant="outlined"
                      fullWidth
                      label="Cardholder Name"
                      required
                      helperText={cardHelper.nameHelp}
                      error={cardHelper.nameHelp}
                      onChange={(e) => {
                        setcardDetails({
                          ...cardDetails,
                          name: e.target.value,
                        });
                        CheckCardName(e.target.value);
                      }}
                      onBlur={() => CheckCardName(cardDetails.name)}
                    ></PaymentInput>
                    <PaymentInput
                      variant="outlined"
                      fullWidth
                      label="Expiry Date (MM/YY)"
                      helperText={cardHelper.dateHelp}
                      error={cardHelper.dateHelp}
                      onChange={(e) => {
                        setcardDetails({
                          ...cardDetails,
                          date: e.target.value,
                        });
                        CheckCardDate(e.target.value);
                      }}
                      onBlur={() => CheckCardDate(cardDetails.date)}
                    ></PaymentInput>
                    <Box>
                      <PaymentCvv>CVV</PaymentCvv>
                      <PaymentInput
                        variant="outlined"
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        helperText={cardHelper.cvvHelp}
                        error={cardHelper.cvvHelp}
                        onChange={(e) => {
                          setcardDetails({
                            ...cardDetails,
                            cvv: e.target.value,
                          });
                          CheckCardCvv(e.target.value);
                        }}
                        onBlur={() => CheckCardCvv(cardDetails.cvv)}
                        slotProps={{
                          input: {
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  sx={{ color: "black" }}
                                  onClick={togglePassword}
                                >
                                  {showPassword ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOffIcon />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          },
                        }}
                      ></PaymentInput>
                    </Box>
                  </Box>
                )}
                {radioItem === "upi" && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                      margin: "20px 0",
                    }}
                  >
                    <PaymentInput
                      variant="outlined"
                      fullWidth
                      label="UPI ID"
                      helperText={cardHelper.upiHelp}
                      error={cardHelper.upiHelp}
                      onChange={(e) => {
                        setcardDetails({
                          ...cardDetails,
                          upi: e.target.value,
                        });
                        CheckUpi(e.target.value);
                      }}
                      onBlur={() => CheckUpi(cardDetails.upi)}
                    ></PaymentInput>
                  </Box>
                )}

                <PaymentButton
                  variant="contained"
                  fullWidth
                  onClick={handlePaymentClick}
                >
                  proceed to pay
                </PaymentButton>
              </>
            )}
            {success && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <CheckCircleIcon sx={{ color: "green", fontSize: "100px" }} />
                  <SuccessHead>Payment Successful!</SuccessHead>
                  <SuccessTypo>
                    Your payment has been processed successfully.
                  </SuccessTypo>
                  <SuccessButton
                    variant="contained"
                    fullWidth
                    onClick={handlePaymentClose}
                  >
                    continue to shopping
                  </SuccessButton>
                </Box>
              </>
            )}
          </PaymentBox>
        </Slide>
      </CustomModal>
    </div>
  );
}
