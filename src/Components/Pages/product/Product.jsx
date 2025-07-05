import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Rating, Card } from "@mui/material";
import {
  ActualPriceBox,
  FilterBox,
  FilterButton,
  LargeDiscount,
  PepBuyCountTypo,
  ProductActualPrice,
  ProductFirstBox,
  ProductImg,
  ProductImgBox,
  ProductName,
  ProductPrice,
  ProductRatingBox,
  ProductResBox,
  ProductResHead,
  ProductResSub,
  ProductSecondBox,
  RatingNumber,
  RatingsTypo,
  ResponseArrow,
  RupeeSymbol,
  SmallDiscount,
  DiscountedPrice,
  DiscountTypo,
  SwapBox,
  StockTypo,
  BuyButton,
  StockButton,
  AllProductBox,
  RatingResTypo,
  LargeBox,
} from "../../../styles/productStyle";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useNavigate, useSearchParams } from "react-router";
import { postApi, postDApi } from "../../../api/config";
import { getProducts } from "../../../api/apiPath";
import PaymentModal from "../../shared/PaymentModal";
import { useSelector } from "react-redux";

function Product() {
  const isLogin = useSelector((state) => state.snack.isLogin);

  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    isLogin ? setOpen(true) : navigate("/login");
  };
  const handleClose = () => setOpen(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  let subCategoryId = searchParams.get("subCategoryId");
  const payload = {
    filters: [
      {
        field: "subCategoryId",
        value: `${subCategoryId}`,
        type: "eq",
      },
    ],
    sorting: [
      {
        column: "createdAt",
        order: "desc",
      },
    ],
  };

  const fetchProducts = async () => {
    try {
      let res = await postDApi(getProducts, payload);
      setProducts(res.rows);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [subCategoryId]);

  return (
    <>
      <ProductResBox>
        <LargeBox>
          <ProductResHead variant="p">Result</ProductResHead>
          <ProductResSub variant="p">
            Check each product page for other buying options.
          </ProductResSub>
        </LargeBox>
        <FilterBox>
          <FilterButton
            variant="outlined"
            size="small"
            endIcon={<KeyboardArrowDownOutlinedIcon />}
          >
            Filters(0)
          </FilterButton>
        </FilterBox>
        <AllProductBox>
          {products.map((product, index) => (
            <Card
              key={index}
              sx={{
                padding: "0",
                display: "flex",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
              }}
            >
              <ProductFirstBox>
                <ProductImgBox>
                  <ProductImg
                    src={
                      product.fileBaseUrl.replace("http://api-ecommerce-app.bluetickcoders.com", "/api") +
                      product.productImages[0].productImagePath
                    }
                    alt="product"
                    onClick={() =>
                      navigate(`/viewProductDetail?productId=${product.id}`)
                    }
                  />
                </ProductImgBox>
              </ProductFirstBox>
              <ProductSecondBox>
                <ProductName variant='p'
                  onClick={() =>
                    navigate(`/viewProductDetail?productId=${product.id}`)
                  }
                >
                  {product.name}
                </ProductName>
                <ProductRatingBox>
                  <RatingNumber>{product.overallRatings}</RatingNumber>
                  <Rating
                    defaultValue={product.overallRatings}
                    precision={0.5}
                    readOnly
                  />
                  <ResponseArrow />
                  <RatingsTypo>
                    {product.noOfRatings === 0 ? "No" : product.noOfRatings} rating{product.noOfRatings > 1 && "s"}
                  </RatingsTypo>
                  <RatingResTypo>
                    {product.noOfRatings > 0
                      ? `(${product.noOfRatings})`
                      : "no rating"}
                  </RatingResTypo>
                </ProductRatingBox>
                <PepBuyCountTypo variant="p">
                  {product.bought} peoples bought in past
                </PepBuyCountTypo>
                <SwapBox>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <ActualPriceBox>
                      <Box sx={{ display: "flex" }} >
                        <RupeeSymbol variant='p'>₹</RupeeSymbol>
                        <ProductPrice variant='p'>
                          {product.discountedPrice.toLocaleString()}
                        </ProductPrice>
                      </Box>
                      <Box>
                        <ProductActualPrice
                          sx={{ display: product.discount ? "block" : "none" }}
                        >
                          M.R.P.{" "}
                          <span style={{ textDecoration: "line-through" }}>
                            {product.actualPrice.toLocaleString()}
                          </span>
                        </ProductActualPrice>
                      </Box>
                      <LargeDiscount
                        sx={{ display: product.discount ? "block" : "none" }}
                      >
                        ({product.discount}%
                      </LargeDiscount>
                    </ActualPriceBox>
                    <Box>
                      <LargeDiscount
                        sx={{ display: product.discount ? "block" : "none" }}
                      >
                        off)
                      </LargeDiscount>
                      {product.discount && (
                        <SmallDiscount>({product.discount}% off)</SmallDiscount>
                      )}
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <DiscountedPrice>
                      Save ₹
                      {(
                        product.actualPrice - product.discountedPrice
                      ).toLocaleString()}
                    </DiscountedPrice>
                    <DiscountTypo>with this offer</DiscountTypo>
                  </Box>
                </SwapBox>
                <StockTypo
                  sx={{
                    display:
                      product.quantity > 5 || product.quantity == 0
                        ? "none"
                        : "block",
                  }}
                >
                  Only {product.quantity} left in stock
                </StockTypo>
                {product.quantity ? (
                  <BuyButton
                    variant="outlined"
                    size="small"
                    onClick={handleOpen}
                  >
                    Buy now
                  </BuyButton>
                ) : (
                  <StockButton variant="outlined" size="small">
                    Out of stock
                  </StockButton>
                )}
              </ProductSecondBox>
            </Card>
          ))}
        </AllProductBox>
      </ProductResBox>
      <PaymentModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </>
  );
}

export default Product;
