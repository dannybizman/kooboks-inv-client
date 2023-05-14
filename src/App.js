import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import PasswordReset from "./pages/passwordReset/PasswordReset";
import Footer from "./components/footer/Footer";
import Dashboard from "./pages/dashboard/Dashboard";
import AddProduct from "./pages/product/AddProduct";
import UserProfile from "./pages/userprofile/UserProfile";
import Setting from "./pages/setting/Setting";
import Users from "./pages/users/Users";
import Report from "./pages/report/Report";

const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/forget/password" element={<ForgotPassword />} />
          <Route exact path="/password/reset" element={<PasswordReset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/add/product" element={<AddProduct/>} />
          <Route exact path="/user/profile" element={<UserProfile/>} />
          <Route exact path="/settings" element={<Setting/>} />
          <Route exact path="/users" element={<Users/>} />
          <Route exact path="/report" element={<Report />} />
        </Routes>
         <Footer />
      </>
      
    </Router>
    
  );
};

export default App;
