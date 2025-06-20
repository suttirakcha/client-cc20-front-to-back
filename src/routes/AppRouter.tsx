import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/admin/Dashboard";
import Manage from "../pages/admin/Manage";
import AdminLayout from "../layouts/AdminLayout";
import Layout from "../layouts/Layout";
import HomeUser from "../pages/user/HomeUser";
import ProtectedRoutes from "./ProtectedRoutes";

function AppRouter() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route
        path="user"
        element={<ProtectedRoutes el={<Layout />} allows={["USER", "ADMIN"]} />}
      >
        <Route index element={<HomeUser />} />
      </Route>

      {/* Private */}
      <Route
        path="admin"
        element={<ProtectedRoutes el={<AdminLayout />} allows={["ADMIN"]} />}
      >
        <Route index element={<Dashboard />} />
        <Route path="manage" element={<Manage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
