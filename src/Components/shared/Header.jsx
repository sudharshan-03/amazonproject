import {
  AppBar,
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  TextField,
  Autocomplete,
  Drawer,
  SwipeableDrawer,
} from "@mui/material";
import { imageBar, indianFlag } from "../../constants/images";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { useEffect, useRef, useState } from "react";
import {
  FontTwelve,
  FontFourteen,
  InputBox,
  CustomLangAndNameBox,
  SearchButton,
  LangBox,
  CommonBox,
  CommonTypo,
  NameBox,
  LocationBox,
  MenuButton,
  ShopBox,
  ImageBox,
  CustomTool,
  CustomSelect,
  CustomAuto,
  ResponsiveBox,
} from "../../styles/headerStyle";
import CustomToolTip from "./CustomToolTip";
import MobileMenu from "./MobileMenu";
import { useNavigate } from "react-router";
import { SDrawer } from "../../styles/mobileMenuStyle";
import { getApi, postApi } from "../../api/config";
import { category, getCategory, subCategory } from "../../api/apiPath";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/snackSlice";
import { getCookie } from "../../utils/cookies";

const languages = [
  { name: "English - EN" },
  { name: "हिन्दी - HI" },
  { name: "தமிழ் - TA" },
  { name: "తెలుగు - TE" },
  { name: "ಕನ್ನಡ - KN" },
  { name: "മലയാളം - ML" },
  { name: "বাংলা - BN" },
  { name: "मराठी - MR" },
];

function Header() {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [allSubCategories, setAllSubCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null);
  const [inputVal, setInputVal] = useState("");

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  //redux
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.snack.userName);
  const isLogin = useSelector((state) => state.snack.isLogin);

  const fetchCategory = async () => {
    try {
      const res = await getApi(getCategory);
      setCategories(res);
      const data = await postApi(subCategory);
      setSubCategories(data.rows);
      setAllSubCategories(data.rows);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubCategoryChange = (event, newValue) => {
    const selected = subCategories.find((item) => item.name === newValue);
    console.log(selected);

    if (selected) {
      setSelectedSubCategoryId(selected.id);
      setCategoryId(selected.categoryId);
    } else {
      setSelectedSubCategoryId(null);
      setCategoryId("");
    }
  };

  const handleSearchClick = () => {
    if (selectedSubCategoryId) {
      navigate(`/product?subCategoryId=${selectedSubCategoryId}`);
    } else if (categoryId) {
      navigate(`/subCategory?id=${categoryId}`);
    } else {
      navigate(`/category`);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  useEffect(() => {
    if (categoryId) {
      const filtered = allSubCategories.filter(
        (item) => String(item.categoryId) === String(categoryId)
      );
      setSubCategories(filtered);
    } else {
      setSubCategories(allSubCategories);
    }
  }, [categoryId]);

  useEffect(() => {
    const token = getCookie("token");
    const name = getCookie("name");
    if (token && name) {
      dispatch(login(name));
    }
  }, []);

  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <>
      <CustomTool position="static">
        <ResponsiveBox>
          <MenuButton fontSize="large" onClick={toggleDrawer}  />
          <ImageBox onClick={() => navigate("/landing")}>
            <img
              src={imageBar}
              alt="Logo"
              style={{ width: "118px", height: "44px" }}
            />
          </ImageBox>

          <LocationBox>
            <FmdGoodOutlinedIcon />
            <Box>
              <FontTwelve>Deliver to</FontTwelve>
              <FontFourteen>Update location</FontFourteen>
            </Box>
          </LocationBox>

          <ShopBox>
            <Box>
              <FontFourteen sx={{ fontWeight: "600" }}>Hello,</FontFourteen>
              <FontFourteen sx={{ fontWeight: "600" }}>
                {isLogin ? userName : "Sign in"}
              </FontFourteen>
            </Box>
            <LocalGroceryStoreOutlinedIcon
              sx={{ color: "white", fontSize: "2.5rem" }}
            />
          </ShopBox>
        </ResponsiveBox>

        <InputBox>
          <CustomSelect
            value={categoryId}
            onChange={(e) => {
              setCategoryId(e.target.value);
              setInputVal("");
              setSelectedSubCategoryId("");
            }}
            displayEmpty
            size="small"
          >
            <MenuItem value="" sx={{ fontFamily: "Roboto", fontSize: "13px" }}>
              All
            </MenuItem>
            {categories.map((category, index) => (
              <MenuItem
                value={category.id}
                key={index}
                sx={{ fontFamily: "Roboto", fontSize: "13px" }}
              >
                {category.name}
              </MenuItem>
            ))}
          </CustomSelect>
          <CustomAuto
            id="free-solo-demo"
            freeSolo
            options={subCategories.map((option) => option.name)}
            inputValue={inputVal}
            onInputChange={(event, newValue) => setInputVal(newValue)}
            onChange={handleSubCategoryChange}
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                placeholder="Search Amazon.in"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "black",
                    },
                  },
                }}
              />
            )}
            componentsProps={{
              paper: {
                sx: {
                  fontFamily: "Rubik",
                },
              },
            }}
          />
          <SearchButton onClick={handleSearchClick}>
            <SearchIcon sx={{ color: "black" }} />
          </SearchButton>
        </InputBox>

        <CustomLangAndNameBox>
          <CustomToolTip arr={languages}>
            <LangBox>
              <img src={indianFlag} alt="flag" width="23px" height="23px" />
              <CommonBox>
                <CommonTypo>EN</CommonTypo>
                <ArrowDropDownIcon />
              </CommonBox>
            </LangBox>
          </CustomToolTip>
          <CustomToolTip
            arr={[{ name: isLogin ? "Sign out" : "Sign in" }]}
            link="log"
          >
            <NameBox>
              <FontTwelve>Hello, {isLogin ? userName : "Sign in"}</FontTwelve>
              <CommonBox>
                <CommonTypo>Accounts & Lists </CommonTypo>
                <ArrowDropDownIcon />
              </CommonBox>
            </NameBox>
          </CustomToolTip>
        </CustomLangAndNameBox>
      </CustomTool>
      <SDrawer open={open} onClose={toggleDrawer}>
        <MobileMenu toggleDrawer={toggleDrawer} />
      </SDrawer>
    </>
  );
}

export default Header;
