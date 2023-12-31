// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import BuyItems from "./pages/buy";
import SellItems from "./pages/sell";
import Home from "./pages/home";
import NavBar from "./components/navbar";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/buy" element={<BuyItems />} />
        <Route path="/sell" element={<SellItems />} />
      </Routes>
    </>
  );
}
