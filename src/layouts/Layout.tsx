import { Outlet } from "react-router";
import MainNavbar from "../components/MainNavbar";

function Layout() {
  return (
    <div>
      <MainNavbar />
      <Outlet />
    </div>
  );
}

export default Layout;
