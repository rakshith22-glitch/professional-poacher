import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchComplete from "../components/search";
import BuyCard from "../components/buycard"

const BuyItems = () => {
  return (
    <Box
    sx={{
        margin:"100px"
    }}>
      <SearchComplete />
    </Box>
  );
};

export default BuyItems;
