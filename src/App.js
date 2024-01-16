// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import Userlist from './pages/user/userlist';
import NavBar from "./components/navbar"
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/profile";
import DummyProfile from "./pages/dummyprofile";
import { useState } from "react";
import MessageList from './pages/chat/messages';
import ChatWithPage from "./pages/chat/chatwith";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    background: {
      default: '#1976d2'
    },
  },
  // ...other theme options
});
export default function App() {
  const [userProfile, setUserProfile] = useState(null);

  const handleSignUpSuccess = (userData) => {
    setUserProfile(userData);
  };

  return (
    <ThemeProvider theme={theme}>
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
        <Route path="/users" element={<Userlist />} />
        <Route path="/user/:userId" element={<DummyProfile />} />
        <Route path="/messages" element={<MessageList />} />
        <Route path="/chat/:chatWith" element={<ChatWithPage />} />
      </Routes>
    </ThemeProvider>
  );
}
