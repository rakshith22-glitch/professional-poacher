// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import BuyItems from "./pages/buy";
import SellItems from "./pages/sell";
import NavBar from "./components/navbar";
import { Routes, Route } from "react-router-dom";

// function DisplayLocations() {
//   const { loading, error, data } = useQuery(GET_LOCATIONS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error : {error.message}</p>;

//   return data.locations.map(({ id, name, description, photo }) => (
//     <div key={id}>
//       <h3>{name}</h3>
//       <img width="400" height="250" alt="location-reference" src={`${photo}`} />
//       <br />
//       <b>About this location:</b>
//       <p>{description}</p>
//       <br />
//     </div>
//   ));
// }
// const GET_LOCATIONS = gql`
//   query GetLocations {
//     locations {
//       id
//       name
//       description
//       photo
//     }
//   }
// `;
export default function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/buy" element={<BuyItems />} />
        <Route path="/sell" element={<SellItems />} />
      </Routes>
    </>
  );
}
