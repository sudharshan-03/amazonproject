import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { category } from "../../../api/apiPath";
import { getApi } from "../../../api/config";
import {
  CategoryOutBox,
  CategoryHead,
  CategoryInBox,
  CategoryImage,
} from "../../../styles/categoryStyle";
import { useNavigate, useSearchParams } from "react-router";

function SubCategory() {
  const [searchParams] = useSearchParams();
  const [sCategories, setSCategories] = useState([]);
  const [name, setName] = useState('')
  const navigate = useNavigate();
  const id = searchParams.get('id');
  

  const fetchCategory = async () => {
    try {
      const res = await getApi(`${category}/${id}`);
      setSCategories(res.subCategories);
      setName(res.name)
    } catch (err) {
      console.log(err);
    }
  };  

  useEffect(() => {
    fetchCategory();
  },[id]);
  return (
    <>
      <Box>
        <CategoryHead sx={{margin: "32px 0"}} onClick={() => navigate(`/viewProductDetail?productId=$`)}>{name}</CategoryHead>
        <CategoryOutBox sx={{padding: "20px 15px 15px",}}>
          {sCategories.map((category, index) => (
            <Box key={index}>
              <CategoryInBox onClick={() => navigate(`/product?subCategoryId=${category.id}`)}>
                <CategoryImage src={category?.product[0]?.productImages[0].productImagePath.replace("http://api-ecommerce-app.bluetickcoders.com", "/api")} alt="" />
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

export default SubCategory;
