import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { getCategory } from "../../../api/apiPath";
import { getApi } from "../../../api/config";
import { CategoryOutBox, CategoryHead, CategoryInBox, CategoryImage } from "../../../styles/categoryStyle";
import { useNavigate } from "react-router";

function Category() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate()

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
      <Box sx={{padding: "16px 0"}}>
        <CategoryHead>
          Shop by Category
        </CategoryHead>
        <CategoryOutBox>
          {categories.map((category, index) => (
            <Box key={index} sx={{cursor: "pointer"}}>
              <CategoryInBox onClick={() => navigate(`/subCategory?id=${category.id}`)}>
                <CategoryImage
                  src={category.categoryImagePath.replace("http://api-ecommerce-app.bluetickcoders.com", "/api")}
                  alt="" />
              </CategoryInBox>
              <Typography sx={{ textAlign: "center", fontSize: "14px", fontWeight: "500", paddingBlock: "6px", color: "#2f2f2f" }}>
                {category.name}
              </Typography>
            </Box>
          ))}
        </CategoryOutBox>
      </Box>
    </>
  );
}

export default Category;
