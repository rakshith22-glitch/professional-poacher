// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import BuyItems from "./pages/buy";
import SellItems from "./pages/sell";
import Home from "./pages/home";
import Userlist from './pages/userlist';
import NavBar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/profile";
import DummyProfile from "./pages/dummyprofile";
import { useState } from "react";
import MessageList from './pages/messages';


export default function App() {
  const [userProfile, setUserProfile] = useState(null);

  const handleSignUpSuccess = (userData) => {
    setUserProfile(userData);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
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
        <Route path="/users" element={<Userlist />} />
        <Route path="/user/:userId" element={<DummyProfile />} />
        <Route path="/messages" element={<MessageList />} />
      </Routes>
    </>
  );
}
