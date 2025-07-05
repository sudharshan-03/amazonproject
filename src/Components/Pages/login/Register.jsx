import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {
  CustomRBox,
  CustomButton,
  CustomContainer,
  CustomTextField,
  NavigateRBox,
  NavigateButton,
  CustomLabel,
} from "../../../styles/StyleComponent";
import { imageAsset } from "../../../constants/images";
import { useState } from "react";
import { useNavigate } from "react-router";
import { postDApi } from "../../../api/config";
import { register } from "../../../api/apiPath";
import { useDispatch, useSelector } from "react-redux";
import { handleClick, handleMessage } from "../../../store/snackSlice";
import { handleCreditials } from "../../../store/userSlice";
import Loading from "../Loading";

function Register() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    mobileNo: "",
    email: "",
    password: "",
  });
  const [userHelp, setUserHelp] = useState({
    nameHelp: "",
    mobileHelp: "",
    emailHelp: "",
    passwordHelp: "",
  });
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleShow = () => {
    setShow(!show);
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobilePattern = /^\d{10}$/;

  const CheckUserDetails = (name, value, pattern, message) => {
    if (!value) {
      setUserHelp((prev) => ({ ...prev, [name]: `${message} is Required` }));
      return false;
    } else if (pattern && !pattern.test(value)) {
      setUserHelp((prev) => ({ ...prev, [name]: `Invalid ${message}` }));
      return false;
    } else {
      setUserHelp((prev) => ({ ...prev, [name]: "" }));
      return true;
    }
  };

  const regFunction = async () => {
    try {
      let res = await postDApi(register, userDetails);
      console.log(res);
      dispatch(handleMessage(res.message));
      dispatch(handleClick());
      dispatch(
        handleCreditials({
          mobile: userDetails.mobileNo,
          password: userDetails.password,
        })
      );
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        dispatch(handleMessage(error.response.data.error));
        dispatch(handleClick());
      }
    }
  };

  const handleClickRegister = () => {
    const name = CheckUserDetails("nameHelp", userDetails.name, "", "Name");
    const mobile = CheckUserDetails(
      "mobileHelp",
      userDetails.mobileNo,
      mobilePattern,
      "Mobile Number"
    );
    const email = CheckUserDetails(
      "emailHelp",
      userDetails.email,
      emailPattern,
      "Email"
    );
    const password = CheckUserDetails(
      "passwordHelp",
      userDetails.password,
      "",
      "Password"
    );
    if (name && mobile && email && password) {
      regFunction();
    }
  };
  const isLoading = useSelector((state) => state.user.isLoading);

  return (
    <>
      {isLoading && <Loading   />}
      <CustomContainer sx={{ gap: "5px" }}>
        <img src={imageAsset} alt="" />
        <CustomRBox sx={{ gap: "5px" }}>
          <Typography variant="h5">Create your account</Typography>
          <Box>
            <CustomLabel>Name</CustomLabel>
            <CustomTextField
              fullWidth
              size="small"
              helperText={userHelp.nameHelp}
              error={userHelp.nameHelp}
              onChange={(e) => {
                setUserDetails({ ...userDetails, name: e.target.value });
                CheckUserDetails("nameHelp", e.target.value, "", "Name");
              }}
              onBlur={() =>
                CheckUserDetails("nameHelp", userDetails.name, "", "Name")
              }
            ></CustomTextField>
          </Box>
          <Box>
            <CustomLabel>Mobile number</CustomLabel>
            <CustomTextField
              fullWidth
              size="small"
              helperText={userHelp.mobileHelp}
              error={userHelp.mobileHelp}
              onChange={(e) => {
                setUserDetails({ ...userDetails, mobileNo: e.target.value });
                CheckUserDetails(
                  "mobileHelp",
                  e.target.value,
                  mobilePattern,
                  "Mobile Number"
                );
              }}
              onBlur={() =>
                CheckUserDetails(
                  "mobileHelp",
                  userDetails.mobileNo,
                  mobilePattern,
                  "Mobile Number"
                )
              }
            ></CustomTextField>
          </Box>
          <Box>
            <CustomLabel>Email</CustomLabel>
            <CustomTextField
              type="email"
              fullWidth
              size="small"
              helperText={userHelp.emailHelp}
              error={userHelp.emailHelp}
              onChange={(e) => {
                setUserDetails({ ...userDetails, email: e.target.value });
                CheckUserDetails(
                  "emailHelp",
                  e.target.value,
                  emailPattern,
                  "Email"
                );
              }}
              onBlur={() =>
                CheckUserDetails(
                  "emailHelp",
                  userDetails.email,
                  emailPattern,
                  "Email"
                )
              }
            ></CustomTextField>
          </Box>
          <Box>
            <CustomLabel>Password</CustomLabel>
            <CustomTextField
              fullWidth
              size="small"
              type={show ? "text" : "password"}
              helperText={userHelp.passwordHelp}
              error={userHelp.passwordHelp}
              onChange={(e) => {
                setUserDetails({ ...userDetails, password: e.target.value });
                CheckUserDetails(
                  "passwordHelp",
                  e.target.value,
                  "",
                  "Password"
                );
              }}
              onBlur={() =>
                CheckUserDetails(
                  "passwordHelp",
                  userDetails.password,
                  "",
                  "Password"
                )
              }
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton sx={{ color: "black" }} onClick={toggleShow}>
                        {show ? <Visibility /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            ></CustomTextField>
          </Box>
          <CustomButton
            disableElevation
            variant="contained"
            sx={{ marginBottom: "8px", borderRadius: "5px", marginTop: "25px" }}
            onClick={handleClickRegister}
          >
            Register
          </CustomButton>
        </CustomRBox>

        <NavigateRBox>
          <Divider>Already have an account?</Divider>
          <NavigateButton
            variant="contained"
            fullWidth
            size="small"
            disableElevation
            onClick={() => navigate("/login")}
          >
            Go to Login
          </NavigateButton>
        </NavigateRBox>
      </CustomContainer>
    </>
  );
}

export default Register;
