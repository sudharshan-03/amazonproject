import React, { useEffect, useState } from "react";
import { getApi } from "../../api/config";
import { landing, topBanner } from "../../api/apiPath";
import { Box } from "@mui/material";
import {
  CardinImg,
  CardinTypo,
  CardResPrice,
  CardResTypo,
  LandingBox,
  LandingCard,
  LandingTypo,
  WrapBox,
} from "../../styles/landingStyle";
import { useNavigate } from "react-router";

function Landing() {
  const [banner, setBanner] = useState([]);
  const [lands, setLands] = useState([]);
  const navigate = useNavigate();

  const getBanner = async () => {
    try {
      const bannerData = await getApi(topBanner);
      const landingData = await getApi(landing);
      setBanner(bannerData);
      setLands(landingData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <>
      <WrapBox>
        <img
          src={banner[0]?.bannerImagePath.replace("http://api-ecommerce-app.bluetickcoders.com", "/api")}
          alt="banner"
          style={{
            width: "100%",
            display: "block",
            cursor: "pointer",
            zIndex: "999999",
          }}
        />
        <LandingTypo>Top products picked for you</LandingTypo>
        <LandingBox>
          {lands.map((land, index) => (
            <LandingCard key={index}>
              <CardinTypo>{land.name}</CardinTypo>
              <CardinImg
                src={
                  land.product[0].fileBaseUrl.replace("http://api-ecommerce-app.bluetickcoders.com", "/api") +
                  land.product[0].productImages[0].productImagePath
                }
                alt="Product images"
                onClick={() => navigate(`/product?subCategoryId=${land.id}`)}
              />
              <CardResTypo>{land.product[0].name}</CardResTypo>
              <CardResPrice>
                <span style={{ fontSize: "12px", verticalAlign: "super" }}>
                  ₹
                </span>
                {Math.floor(
                  land.product[0].actualPrice *
                    (1 - land.product[0].discount / 100)
                ).toLocaleString()}
              </CardResPrice>
            </LandingCard>
          ))}
        </LandingBox>
      </WrapBox>
    </>
  );
}

export default Landing;
