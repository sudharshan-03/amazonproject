import React, { Suspense } from "react";
import Layout from "./Layout";
import { Routes, Route, Navigate } from "react-router";
import { ROUTE_PATH } from "../../routes/Routepath";
import Loading from "./Loading";
import {
  Category,
  Landing,
  Login,
  NotFound,
  Product,
  Register,
  SubCategory,
  ViewProductDetail,
} from "../../routes/Route";



const routes = [
  { path: ROUTE_PATH.login, element: <Login /> },
  { path: ROUTE_PATH.register, element: <Register /> },
  { path: "*", element: <NotFound /> },
];

const nestedRoutes = [
  { path: ROUTE_PATH.home, element: <Navigate to="landing" replace /> },
  { path: ROUTE_PATH.landing, element: <Landing /> },
  { path: ROUTE_PATH.category, element: <Category /> },
  { path: ROUTE_PATH.subCategory, element: <SubCategory /> },
  { path: ROUTE_PATH.product, element: <Product /> },
  { path: ROUTE_PATH.viewProduct, element: <ViewProductDetail /> },
];

function Root() {
  return (
    <>
        <Suspense fallback={<Loading />}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}

            <Route path="/" element={<Layout />}>
              {nestedRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Route>
          </Routes>
        </Suspense>
    </>
  );
}

export default Root;
