import {
  Box,
  Button,
  Collapse,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useEffect, useRef, useState } from "react";
import { ProductFeatureImage } from "../../../constants/images";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import {
  BackButton,
  LargeDivider,
  ProductAboutBox,
  ProductAboutHead,
  ProductActualPriceTypo,
  ProductBoughtTypo,
  ProductBuyButton,
  ProductDeliveryBox,
  ProductDeliveryTypo,
  ProductDetailBox,
  ProductDiscountTypo,
  ProductFeatureBox,
  ProductFeatureTypo,
  ProductGeneralDesc,
  ProductGeneralDetailsGrid,
  ProductGeneralDetailsHeading,
  ProductGeneralTypo,
  ProductImage,
  ProductImageBox,
  ProductIndividualFeatureBox,
  ProductInfoBox,
  ProductName,
  ProductOutStockTypo,
  ProductPriceBox,
  ProductPriceTypo,
  ProductRatingBox,
  ProductRatingTypo,
  ProductRBuyButton,
  ProductResponseIcon,
  ProductResponseRating,
  ProductSpecBox,
  ProductSpecDesc,
  ProductSpecHead,
  ProductSpecInfo,
  ProductStockBox,
  ProductStockDesc,
  ProductStockDescInfo,
  ProductStockTypo,
  ProductTwoRatingBox,
  ShowMoreLessTypo,
  SmallDivider,
  ViewProductBox,
} from "../../../styles/viewProductStyle";
import { getApi } from "../../../api/config";
import { product } from "../../../api/apiPath";
import { useNavigate, useSearchParams } from "react-router";
import PaymentModal from "../../shared/PaymentModal";
import { useSelector } from "react-redux";

function ViewProductDetail() {
  const isLogin = useSelector((state) => state.snack.isLogin);
  const [Details, setDetails] = useState({});
  // const [isExpanded, setIsExpanded] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    isLogin ? setOpen(true) : navigate("/login");
  };
  const handleClose = () => setOpen(false);
  const htmlRef = useRef();
  let productId = searchParams.get("productId");

  const fetchProductDetails = async () => {
    const res = await getApi(`${product}/${productId}`);
    setDetails(res);
  };

  const [showMoreProps, setShowMoreProps] = useState(false);
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showToggle, setShowToggle] = useState(false); // Controls button visibility
  const visibleProps = Details?.propertyValues?.slice(0, 4);
  const hiddenProps = Details?.propertyValues?.slice(4);

  useEffect(() => {
    if (Details?.about && htmlRef.current) {
      htmlRef.current.innerHTML = Details.about;

      // Delay measurement until DOM updates
      requestAnimationFrame(() => {
        const collapsedHeight = 200;
        const actualHeight = htmlRef.current.scrollHeight;

        setShowToggle(actualHeight > collapsedHeight);
      });
    }
  }, [Details?.about, productId]);

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  useEffect(() => {
    if (Details?.about && htmlRef.current) {
      htmlRef.current.innerHTML = Details.about;
    }
  }, [Details?.about, productId]);

  return (
    <>
      <Box sx={{ padding: "10px 20px" }}>
        <BackButton onClick={() => navigate(-1)}>
          &lt; Back to results{" "}
        </BackButton>
        <ViewProductBox>
          <ProductImageBox>
            <ProductImage
              src={Details.productImages?.[0]?.productImagePath.replace(
                "http://api-ecommerce-app.bluetickcoders.com",
                "/api"
              )}
              alt="product image"
            />
          </ProductImageBox>
          <ProductDetailBox>
            <ProductName>{Details.name}</ProductName>
            <Box sx={{ display: "flex", gap: "30px" }}>
              <ProductRatingBox>
                <Typography sx={{ fontFamily: "Rubik", fontSize: "14px" }}>
                  {Details.overallRatings}
                </Typography>
                <Rating
                  value={Number(Details.overallRatings)}
                  precision={0.5}
                  readOnly
                />
                <ProductResponseIcon />
                <ProductResponseRating>
                  ({Details.noOfRatings})
                </ProductResponseRating>
              </ProductRatingBox>
              <ProductTwoRatingBox>
                <ProductRatingTypo>
                  {Details.noOfRatings ? Details.noOfRatings : "No"} Rating
                  {Details.noOfRatings > 1 && "s"}
                </ProductRatingTypo>
                <ProductRatingTypo>|</ProductRatingTypo>
                <ProductRatingTypo>Search in this page</ProductRatingTypo>
              </ProductTwoRatingBox>
            </Box>
            <Box>
              <ProductBoughtTypo>
                {Details.bought} peoples in past month
              </ProductBoughtTypo>
            </Box>
            <SmallDivider />
            <ProductPriceBox>
              <ProductDiscountTypo>-{Details.discount} %</ProductDiscountTypo>
              <ProductPriceTypo>
                ₹{Details.discountedPrice?.toLocaleString()}
              </ProductPriceTypo>
            </ProductPriceBox>
            <Box>
              <ProductActualPriceTypo>
                M.R.P : ₹{Details.actualPrice?.toLocaleString()}
              </ProductActualPriceTypo>
            </Box>
            <ProductRBuyButton onClick={handleOpen}>Buy now</ProductRBuyButton>
            <SmallDivider />
            <LargeDivider />
            <ProductFeatureBox>
              {Details.hasCashOnDelivery !== 0 && (
                <ProductIndividualFeatureBox>
                  <img
                    src={ProductFeatureImage.cashOnDeliver}
                    alt="features"
                    width={35}
                    height={35}
                  />
                  <ProductFeatureTypo>Pay on Delivery</ProductFeatureTypo>
                </ProductIndividualFeatureBox>
              )}
              {Details.hasFreeDelivery !== 0 && (
                <ProductIndividualFeatureBox>
                  <img
                    src={ProductFeatureImage.freeDelivery}
                    alt="features"
                    width={35}
                    height={35}
                  />
                  <ProductFeatureTypo>Free Delivery</ProductFeatureTypo>
                </ProductIndividualFeatureBox>
              )}
              {Details.isInstallationAvailable !== 0 && (
                <ProductIndividualFeatureBox>
                  <img
                    src={ProductFeatureImage.installation}
                    alt="features"
                    width={35}
                    height={35}
                  />
                  <ProductFeatureTypo>
                    Installation Available
                  </ProductFeatureTypo>
                </ProductIndividualFeatureBox>
              )}
              {Details.isTopBrand !== 0 && (
                <ProductIndividualFeatureBox>
                  <img
                    src={ProductFeatureImage.brand}
                    alt="features"
                    width={35}
                    height={35}
                  />
                  <ProductFeatureTypo>Top Brand</ProductFeatureTypo>
                </ProductIndividualFeatureBox>
              )}
            </ProductFeatureBox>
            <LargeDivider />
            <Box sx={{ marginTop: "20px" }}>
              {Details?.propertyValues?.length > 0 && (
                <>
                  <ProductGeneralDetailsHeading>
                    General Details
                  </ProductGeneralDetailsHeading>
                  {visibleProps?.map((item, index) => (
                    <ProductGeneralDetailsGrid key={index}>
                      <ProductGeneralDesc>{item.name}</ProductGeneralDesc>
                      <ProductGeneralTypo>{item.value}</ProductGeneralTypo>
                    </ProductGeneralDetailsGrid>
                  ))}

                  <Collapse in={showMoreProps}>
                    {hiddenProps?.map((item, index) => (
                      <ProductGeneralDetailsGrid key={index + 4}>
                        <ProductGeneralDesc>{item.name}</ProductGeneralDesc>
                        <ProductGeneralTypo>{item.value}</ProductGeneralTypo>
                      </ProductGeneralDetailsGrid>
                    ))}
                  </Collapse>

                  {Details.propertyValues.length > 4 && (
                    <ShowMoreLessTypo
                      onClick={() => setShowMoreProps((prev) => !prev)}
                    >
                      <KeyboardArrowDownIcon
                        sx={{
                          ml: 0.5,
                          transform: showMoreProps
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition: "transform 0.3s",
                          fontSize: "large",
                        }}
                      />
                      {showMoreProps ? "Show Less" : "Show More"}
                    </ShowMoreLessTypo>
                  )}
                </>
              )}
            </Box>
            {Details?.about && (
              <ProductAboutBox>
                <ProductAboutHead>About this product</ProductAboutHead>
                <Collapse in={showMoreAbout} collapsedSize={200}>
                  <Box
                    ref={htmlRef}
                    sx={{
                      "& ul li": { mb: 1 },
                      "& ul": { ml: "30px" },
                    }}
                  />
                </Collapse>

                {showToggle && (
                  <ShowMoreLessTypo
                    onClick={() => setShowMoreAbout((prev) => !prev)}
                  >
                    <KeyboardArrowDownIcon
                      sx={{
                        ml: 0.5,
                        transform: showMoreAbout
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    />
                    {showMoreAbout ? "Show Less" : "Show More"}
                  </ShowMoreLessTypo>
                )}
              </ProductAboutBox>
            )}
          </ProductDetailBox>
          <ProductInfoBox>
            <ProductDeliveryBox>
              <FmdGoodOutlinedIcon fontSize="small" />
              <ProductDeliveryTypo variant="p">
                Deliver to - Sign in to update location
              </ProductDeliveryTypo>
            </ProductDeliveryBox>
            {Details.quantity === 0 ? (
              <ProductOutStockTypo variant="p">
                Out of Stock
              </ProductOutStockTypo>
            ) : Details.quantity <= 5 ? (
              <ProductOutStockTypo variant="p">
                Only {Details.quantity} left in stock
              </ProductOutStockTypo>
            ) : (
              <ProductStockTypo variant="p">In Stock</ProductStockTypo>
            )}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                marginBottom: "20px",
              }}
            >
              <ProductStockBox>
                <ProductStockDesc>Payment</ProductStockDesc>
                <ProductStockDescInfo>Secure Transaction</ProductStockDescInfo>
              </ProductStockBox>
              <ProductStockBox>
                <ProductStockDesc>Ships from</ProductStockDesc>
                <ProductStockDescInfo>Amazon</ProductStockDescInfo>
              </ProductStockBox>
              <ProductStockBox>
                <ProductStockDesc>Sold by</ProductStockDesc>
                <ProductStockDescInfo>
                  {Details?.sellerUser?.seller?.storeName}
                </ProductStockDescInfo>
              </ProductStockBox>
            </Box>
            {Details.quantity !== 0 && (
              <ProductBuyButton onClick={handleOpen}>Buy now</ProductBuyButton>
            )}
          </ProductInfoBox>
        </ViewProductBox>
        {Details?.description?.length >= 1 && (
          <>
            <Divider />
            <Box>
              <ProductSpecHead>Product Specifications</ProductSpecHead>
              <ProductSpecBox>
                {Details?.description?.map((item, index) => (
                  <Box key={index}>
                    <Divider />
                    <Box sx={{ display: "flex" }}>
                      <ProductSpecDesc>{item.name}</ProductSpecDesc>
                      <ProductSpecInfo>{item.value}</ProductSpecInfo>
                    </Box>
                  </Box>
                ))}
              </ProductSpecBox>
            </Box>
          </>
        )}
      </Box>
      <PaymentModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </>
  );
}

export default ViewProductDetail;
