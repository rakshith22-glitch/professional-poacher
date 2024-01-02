// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import BuyItems from "./pages/buy";
import SellItems from "./pages/sell";
import Home from "./pages/home";
import NavBar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/profile";
import { useState } from "react";

export default function App() {
  const [userProfile, setUserProfile] = useState(null);

  const handleSignUpSuccess = (userData) => {
    setUserProfile(userData);
  };

  const handleLoginSuccess = (userData) => {
    setUserProfile(userData);
};
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route
          path="/signup"
          element={<SignUp onSignupSuccess={handleSignUpSuccess} />}
        />
        <Route
          path="/profile"
          element={<ProfilePage profile={userProfile} />}
        />
        <Route path="/buy" element={<BuyItems />} />
        <Route path="/sell" element={<SellItems />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}
