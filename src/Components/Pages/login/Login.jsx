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
  CustomBox,
  CustomButton,
  CustomContainer,
  CustomHeading,
  CustomLabel,
  CustomLink,
  CustomTextField,
  NavigateBox,
  NavigateButton,
  SellerBox,
} from "../../../styles/StyleComponent";
import { imageAsset } from "../../../constants/images";
import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { postDApi } from "../../../api/config";
import { login } from "../../../api/apiPath";
import { useDispatch, useSelector } from "react-redux";
import { handleClick, handleMessage } from "../../../store/snackSlice";
import { getCookie, setCookie } from "../../../utils/cookies";
import Loading from "../Loading";

function Login() {
  const mobile = useSelector((state) => state.user.mobile);
  const password = useSelector((state) => state.user.password);
  const [userDetails, setUserDetails] = useState({
    mobileNo: mobile,
    password: password,
  });
  const [userHelp, setUserHelp] = useState({
    mobileNoHelp: "",
    passwordHelp: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  const mailOmobPattern = /^(?:[^\s@]+@[^\s@]+\.[^\s@]+|\d{10})$/;

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

  const logFunction = async () => {
    try {
      let res = await postDApi(login, userDetails);
      dispatch(handleMessage("Login Successfully"));
      dispatch(handleClick());
      setCookie("name", res.name);
      setCookie("token", res.token);
      console.log(res.name);

      navigate("/landing");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        dispatch(handleMessage(error.response.data.error));
        dispatch(handleClick());
      }
    }
  };

  const handleClickLogin = () => {
    const mobileNo = CheckUserDetails(
      "mobileNoHelp",
      userDetails.mobileNo,
      mailOmobPattern,
      "Mobile or Email"
    );
    const password = CheckUserDetails(
      "passwordHelp",
      userDetails.password,
      "",
      "Password"
    );
    if (mobileNo && password) {
      logFunction();
      // navigate("/landing");
    }
  };

  useEffect(() => {
    const token = getCookie("token");
    const name = getCookie("name");
    if (token && name) navigate("/landing");
  }, []);
  const isLoading = useSelector((state) => state.user.isLoading);

  return (
    <>
      {isLoading && <Loading />}
      <CustomContainer>
        <img src={imageAsset} alt="" />
        <CustomBox>
          <CustomHeading>Sign in or create account</CustomHeading>
          <Box>
            <CustomLabel>Email or mobile number</CustomLabel>
            <CustomTextField
              fullWidth
              size="small"
              helperText={userHelp.mobileNoHelp}
              error={userHelp.mobileNoHelp}
              value={userDetails.mobileNo}
              onChange={(e) => {
                setUserDetails({ ...userDetails, mobileNo: e.target.value });
                CheckUserDetails(
                  "mobileNoHelp",
                  e.target.value,
                  mailOmobPattern,
                  "Mobile or Email"
                );
              }}
              onBlur={() =>
                CheckUserDetails(
                  "mobileNoHelp",
                  userDetails.mobileNo,
                  mailOmobPattern,
                  "Mobile or Email"
                )
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleClickLogin();
                }
              }}
            ></CustomTextField>
          </Box>
          <Box>
            <CustomLabel>Password</CustomLabel>
            <CustomTextField
              fullWidth
              type={show ? "text" : "password"}
              size="small"
              value={userDetails.password}
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
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleClickLogin();
                }
              }}
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
            onClick={handleClickLogin}
          >
            Continue
          </CustomButton>

          <SellerBox>
            <CustomLink variant="p">Login in Business Account?</CustomLink>
            <CustomLink variant="p" onClick={() => navigate('/landing')}>Go Back</CustomLink>
          </SellerBox>
        </CustomBox>

        <NavigateBox>
          <Divider>New to Amazon?</Divider>
          <NavigateButton
            variant="contained"
            fullWidth
            size="small"
            disableElevation
            onClick={() => navigate("/register")}
          >
            Create new account
          </NavigateButton>
        </NavigateBox>
      </CustomContainer>
    </>
  );
}

export default memo(Login);
