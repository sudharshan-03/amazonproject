import React from "react";
import { ToolBox, ToolTypo } from "../../styles/navbarStyle";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/snackSlice";

function BoxTool({ arr, link }) {
  const navigate = useNavigate();

  const isLogin = useSelector((state) => state.snack.isLogin);
  const dispatch = useDispatch();

  console.log(link);

  const navigateFunction = (e, item) => {
    e.stopPropagation();
    if (link === "product") {
      navigate(`/product?subCategoryId=${item}`);
    } else if (link === "log") {
      isLogin ? dispatch(logout()) : navigate("/login");
    } else {
      return;
    }
  };

  return (
    <>
      <ToolBox>
        {arr.map((sub, index) => (
          <ToolTypo key={index} onClick={(e) => navigateFunction(e, sub.id)}>
            {sub.name}
          </ToolTypo>
        ))}
      </ToolBox>
    </>
  );
}

export default BoxTool;
