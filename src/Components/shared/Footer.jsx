import { Box, Typography } from "@mui/material";
import React from "react";
import {
  FooteRBox,
  FooterBox,
  FooteRContainer,
  FooterContainer,
  FooterHead,
  FooterLink,
  LangTypo,
  LastBox,
  LastBoxTypo,
  LastContainer,
  LastTypo,
  MoveRespBox,
  MoveResTypo,
  MoveTopBox,
} from "../../styles/footerStyle";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import LanguageIcon from "@mui/icons-material/Language";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../store/snackSlice";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const userName = useSelector((state) => state.snack.userName);
  const isLogin = useSelector((state) => state.snack.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const footFunction = () => {
    isLogin ? dispatch(logout()) : navigate('/login')
  }

  return (
    <>
      <MoveTopBox onClick={handleScrollToTop}>
        <MoveResTypo>Back to top</MoveResTypo>
        <MoveRespBox>
          <ArrowDropUpIcon fontSize="small" />
          <Typography sx={{ fontSize: "12px", fontFamily: "Rubik" }}>
            TOP OF PAGE
          </Typography>
        </MoveRespBox>
      </MoveTopBox>
      <FooterContainer>
        <FooterBox>
          <FooterHead>Get to Know Us</FooterHead>
          <FooterLink>About Us</FooterLink>
          <FooterLink>Careers</FooterLink>
          <FooterLink>Press Releases</FooterLink>
          <FooterLink>Amazon Science</FooterLink>
        </FooterBox>
        <FooterBox>
          <FooterHead>Connect with Us</FooterHead>
          <FooterLink>Facebook</FooterLink>
          <FooterLink>Twitter</FooterLink>
          <FooterLink>Instagram</FooterLink>
        </FooterBox>
        <FooterBox>
          <FooterHead>Make Money with Us</FooterHead>
          <FooterLink>Sell on Amazon</FooterLink>
          <FooterLink>Sell under Amazon Accelerator</FooterLink>
          <FooterLink>Protect and Build Your Brand</FooterLink>
          <FooterLink>Amazon Global Selling</FooterLink>
          <FooterLink>Supply to Amazon</FooterLink>
          <FooterLink>Become an Affiliate</FooterLink>
          <FooterLink>Fulfilment by Amazon</FooterLink>
          <FooterLink>Advertise Your Products</FooterLink>
          <FooterLink>Amazon Pay on Merchants</FooterLink>
        </FooterBox>
        <FooterBox>
          <FooterHead>Let Us Help You</FooterHead>
          <FooterLink>Your Account</FooterLink>
          <FooterLink>Returns Centre</FooterLink>
          <FooterLink>Recalls and Product Safety Alerts</FooterLink>
          <FooterLink>100% Purchase Protection</FooterLink>
          <FooterLink>Amazon App Download</FooterLink>
          <FooterLink>Help</FooterLink>
        </FooterBox>
      </FooterContainer>
      <FooteRContainer>
        <FooteRBox>Amazon.in</FooteRBox>
        <FooteRBox>{isLogin ? userName : "Your"} Amazon.in</FooteRBox>
        <FooteRBox>Your Orders</FooteRBox>
        <FooteRBox>Your Lists</FooteRBox>
        <FooteRBox>Your Account</FooteRBox>
        <FooteRBox>Your Recently Viewed items</FooteRBox>
        <FooteRBox>Returns</FooteRBox>
        <FooteRBox>Sell</FooteRBox>
        <FooteRBox>Customer Service</FooteRBox>
        <FooteRBox>Help</FooteRBox>
      </FooteRContainer>
      <LastContainer>
        <LangTypo>
          <LanguageIcon sx={{ width: "14px", height: "14px" }} />
          English
        </LangTypo>
        <LastTypo>Switch Accounts</LastTypo>
        <LastTypo onClick={footFunction}>{isLogin ? "Sign Out" : "Sign In"}</LastTypo>
        <LastBox>
          <LastBoxTypo>Conditions to Use</LastBoxTypo>
          <LastBoxTypo>Privacy Notice</LastBoxTypo>
          <LastBoxTypo>Interest-Based Ads</LastBoxTypo>
          <LastBoxTypo>
            @1996-2024, Amazon.com, Inc. or its affliates
          </LastBoxTypo>
        </LastBox>
      </LastContainer>
    </>
  );
}

export default Footer;
