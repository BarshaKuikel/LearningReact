import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// Pages
import HomeScreen from "./pages/homepage/HomeScreen";
import ProductScreen from "./pages/homepage/ProductScreen";
import ProductDescription from "./pages/user/product/ProductDescription";
import Cart from "./pages/user/cart/Cart";
import OrderList from "./pages/user/order/OrderList";
import Profile from "./pages/user/profile/Profile";
import AddressForm from "./pages/address/AddressForm";

import Login from "./pages/login/LoginScreen";
import Register from "./pages/register/RegisterScreen";
import ForgotPassword from "./pages/forgetpassword/ForgetPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import VerifyEmail from "./pages/verifyEmail/VerifyEmail";

import AboutUs from "./pages/constant/AboutUs";
import Contactus from "./pages/constant/Contactus";

// Admin
import AdminDashboard from "./pages/admin/AdminDashboard";
import Category from "./pages/admin/category/Category";
import Product from "./pages/admin/product/Product";
import UpdateProduct from "./pages/admin/product/ProductUpdate";
import ViewOrders from "./pages/admin/order/ViewOrders";
import ViewUsers from "./pages/admin/users/ViewUsers";

import AdminRoutes from "./protected_routes/AdminRoutes";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:5500/api/auth/validate-token",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.success) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("token");
          toast.error("Session expired. Please log in again.");
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Token validation failed:", error);
        localStorage.removeItem("token");
        toast.error("Invalid session. Please log in again.");
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    validateToken();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <Navbar />
      <ToastContainer />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/product" element={<ProductScreen />} />
        <Route path="/productdescription/:id" element={<ProductDescription />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contactus />} />

        {/* Auth Routes */}
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />

        {/* User Routes */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderlist" element={<OrderList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/address" element={<AddressForm />} />

        {/* Admin Protected Routes */}
        <Route element={<AdminRoutes />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/category" element={<Category />} />
          <Route path="/admin/product" element={<Product />} />
          <Route path="/admin/update/:id" element={<UpdateProduct />} />
          <Route path="/admin/orders" element={<ViewOrders />} />
          <Route path="/admin/customers" element={<ViewUsers />} />
        </Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
