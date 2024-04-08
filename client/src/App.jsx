// import { useState } from 'react'
import "./App.css";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PageNotFound from "./pages/404";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import UserOrderPage from "./pages/UserOrderPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "./features/auth/components/Protected";
import { useEffect } from "react";
import { fetchItemsByUserIdAsync } from "./features/cart/CartSlice";
import { selectLoggedInUser } from "./features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import LogOut from "./features/auth/components/Logout";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ProtectedAdmin from "./features/auth/components/ProtectedAdmin";
import AdminHome from "./pages/AdminHome";
import AdminProductDetailsPage from "./pages/AdminProductDetailsPage";
import UserProfilePage from "./pages/UserProfilePage";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import AddProductPage from "./pages/AddProductPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import ScrollToTop from "./app/ScrollToTop";
import Navbar from "./features/Navbar/Navbar";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user._id));
      dispatch(fetchLoggedInUserAsync(user._id));
    }
  }, [user]);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Protected>
                <Navbar />
                <Home />
              </Protected>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/fp" element={<ForgotPasswordPage />} />
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <PageNotFound />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <Protected>
                <Navbar />
                <CartPage />
              </Protected>
            }
          />
          <Route
            path="/checkout"
            element={
              <Protected>
                <Navbar />
                <Checkout />
              </Protected>
            }
          />
          <Route
            path="/product-detail/:id"
            element={
              <Protected>
                <Navbar />
                <ProductDetailsPage />
              </Protected>
            }
          />
          <Route
            path="/profile"
            element={
              <Protected>
                <Navbar />
                <UserProfilePage />
              </Protected>
            }
          />
          <Route
            path="/orders"
            element={
              <Protected>
                <Navbar />
                <UserOrderPage />
              </Protected>
            }
          />
          <Route
            path="/order-success/:id"
            element={
              <Protected>
                <Navbar />
                <OrderSuccessPage />
              </Protected>
            }
          />
          <Route
            path="/admin/product-detail/:id"
            element={
              <>
                <Navbar />
                <AdminProductDetailsPage />
              </>
            }
          />
          <Route
            path="/admin/product-form"
            element={
              <>
                <Navbar />
                <AddProductPage />
              </>
            }
          />
          <Route
            path="/admin/product-form/edit/:id"
            element={
              <>
                <Navbar />
                <AddProductPage />
              </>
            }
          />

          <Route
            path="/admin/orders"
            element={
              <>
                <Navbar />
                <AdminOrdersPage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
