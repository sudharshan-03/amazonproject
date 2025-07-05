import React from "react";
import {
  SecondaryButton,
  SecondarySignup,
  SigninBox,
} from "../../styles/footerStyle";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router";

function SigninContainer() {
  const navigate = useNavigate();

  return (
    <>
      <SigninBox>
        <SecondarySignup>See personalised recommendations</SecondarySignup>
        <SecondaryButton size="small" onClick={() =>  navigate('/login')}>Sign In</SecondaryButton>
        <SecondarySignup>
          New customer?{" "}
          <span
            style={{
              color: "#0066C0",
              fontFamily: "Roboto",
              cursor: "pointer",
            }}
            onClick={() =>  navigate('/register')}
          >
            Start here.
          </span>{" "}
        </SecondarySignup>
      </SigninBox>
    </>
  );
}

export default SigninContainer;
