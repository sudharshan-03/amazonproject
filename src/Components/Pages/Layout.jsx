import Header from "../shared/Header";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../shared/Footer";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import SigninContainer from '../shared/SigninContainer';

function Layout() {
  const isLoading = useSelector(state => state.user.isLoading)
  const isLogin = useSelector(state => state.snack.isLogin)

  return (
    <>
      <Header />
      <Navbar />
        <main>
          {isLoading && <Loading />}
          <Outlet />
        </main>
      {!isLogin && <SigninContainer />}
      <Footer />  
    </>
  );
}

export default Layout;
