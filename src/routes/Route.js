import { lazy } from "react";

export const Landing = lazy(() => import("../Components/Pages/Landing"));
export const Category = lazy(() => import("../Components/Pages/category/Category"));
export const SubCategory = lazy(() => import("../Components/Pages/category/SubCategory"));
export const Product = lazy(() => import("../Components/Pages/product/Product"));
export const ViewProductDetail = lazy(() => import("../Components/Pages/product/ViewProductDetail"));
export const Login = lazy(() => import("../Components/Pages/login/Login"));
export const Register = lazy(() => import("../Components/Pages/login/Register"));
export const NotFound = lazy(() => import("../Components/shared/NotFound"))