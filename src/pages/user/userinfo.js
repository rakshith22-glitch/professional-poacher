import React  from "react";
import { styled } from "@mui/material/styles";
import {
  Card,

  Typography,
  Avatar,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {useMediaQuery} from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import Stack from '@mui/material/Stack';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
}));



const UserInfo = ({ user, onClick, selected }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const HighlightedCard = styled(Card)(({ theme, selected }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: "auto",
    padding: theme.spacing(2),
    marginTop: "20px",
    backgroundColor: selected ? theme.palette.action.selected : "#fff",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    '&:hover': {
      cursor: 'pointer',
      boxShadow: theme.shadows[4],
    },
    transition: 'box-shadow 0.2s',
    maxWidth: isMobile ? '100%' : '30%',
  }));

  return (


    <HighlightedCard selected={selected} onClick={() => onClick(user)}>

      <StyledAvatar
        alt={user.name}
        src={user.image || "/default-profile.png"}
      />
      <Box ml={2}>
        <Typography variant="subtitle1">{user.name}</Typography>
        <Typography variant="body2">{user.address.city}</Typography>
        <Typography variant="body2" color="text.secondary" marginRight={2}>
          {user.age} • {user.sex}
        </Typography>
      </Box>
      <Box ml="auto" display="flex" alignItems="center">
        <Stack direction="column" alignItems="center" spacing={0}>
          <PersonIcon />
          <Typography variant="body2" color="text.secondary">
            {user.rating.singles}
          </Typography>
        </Stack>
        <Stack direction="column" alignItems="center" spacing={0} sx={{ ml: 2 }}>
          <GroupIcon />
          <Typography variant="body2" color="text.secondary">
            {user.rating.doubles}
          </Typography>
        </Stack>
      </Box>

    </HighlightedCard>


  );
};

export default UserInfo;
