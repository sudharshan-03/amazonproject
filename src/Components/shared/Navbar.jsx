import React, { useEffect, useState } from "react";
import { getCategory } from "../../api/apiPath";
import { getApi } from "../../api/config";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  CustomNav,
  ResponseBox,
  ResponseTab,
  WhiteTab,
} from "../../styles/navbarStyle";
import CustomToolTip from "./CustomToolTip";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { useNavigate } from "react-router";
import CustomNavTip from "./CustomNavTip";

function Navbar() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const fetchCategory = async () => {
    try {
      const res = await getApi(getCategory);
      setCategories(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <>
      <CustomNav position="static">
        <ResponseTab value={false} variant="scrollable" scrollButtons="auto">
          <WhiteTab
            disableRipple
            label="All Category"
            onClick={() => navigate("/category")}
          />
          {categories && categories.map((category, index) => (
            <WhiteTab
              disableRipple
              key={index}
              onClick={() => navigate(`/subCategory?id=${category.id}`)}
              label={
                <CustomNavTip arr={category.subCategories} link="product" >
                  {category.name}
                </CustomNavTip>
              }
            />
          ))}
        </ResponseTab>
        <ResponseBox>
          <IconButton sx={{ color: "white" }}>
            <FmdGoodOutlinedIcon />
          </IconButton>
          <Typography sx={{ alignSelf: "center", fontFamily: "Rubik", fontSize: "14px" }}>
            Deliver to - Update location
          </Typography>
        </ResponseBox>
      </CustomNav>
    </>
  );
}

export default Navbar;
