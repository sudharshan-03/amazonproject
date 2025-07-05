import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  MenuBox,
  MenuEnd,
  MenuMainHead,
  MenuMainSub,
  MenuMid,
  MenuRightTypo,
  MenuSmall,
} from "../../styles/mobileMenuStyle";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { postApi } from "../../api/config";
import { subCategory } from "../../api/apiPath";
import { useNavigate } from "react-router";

function MobileMenu({toggleDrawer}) {
  const [subCategories, setSubCategories] = useState([]);
  const navigate = useNavigate();
  const fetchSubCategory = async () => {
    try {
      const data = await postApi(subCategory);
      setSubCategories(data.rows);
    } catch (err) {
      console.log(err);
    }
  };

  const gotoLanding = () => {
    navigate('/landing');
    toggleDrawer();
  }
  
  const gotoProduct = (id) => {
    navigate(`/product?subCategoryId=${id}`);
    toggleDrawer();
  }
  
  const gotoCategory = () => {
    navigate('/category');
    toggleDrawer();
  }

  useEffect(() => {
    fetchSubCategory();
  }, []);


  return (
    <>
      <MenuBox>
        <MenuSmall>
          <MenuRightTypo>Your Account</MenuRightTypo>
          <MenuMainSub>Browse</MenuMainSub>
          <MenuMainHead>Amazon</MenuMainHead>
        </MenuSmall>
        <MenuMid onClick={gotoLanding}>
          <Typography sx={{ fontWeight: "600" }}>Amazon Home</Typography>
          <HomeOutlinedIcon
            sx={{ width: "35px", height: "35px", color: "#666" }}
          />
        </MenuMid>
        <Divider />
        <MenuEnd>
          <Typography sx={{ fontWeight: "600" }}>Shop by Categories</Typography>
          {subCategories.slice(0, 12).map((sub, index) => (
            <Typography key={index} onClick={()=>gotoProduct(sub.id)}>{sub.name}</Typography>
          ))}
          <Typography onClick={gotoCategory}>See All Categories</Typography>
        </MenuEnd>
      </MenuBox>
    </>
  );
}

export default MobileMenu;
