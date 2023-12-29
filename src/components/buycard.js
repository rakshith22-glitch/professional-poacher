import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const BuyCard = ({ title, year, imdbID }) => {
  const [selected, setSelected] = useState(false);

  const handleCardClick = () => {
    setSelected(!selected);
  };

  return (
    <Card
      variant="outlined"
      style={{ marginBottom: '10px', cursor: 'pointer', backgroundColor: selected ? 'lightblue' : 'white' }}
      onClick={handleCardClick}
    >
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">Year: {year}</Typography>
        <Typography variant="body2">IMDb ID: {imdbID}</Typography>
      </CardContent>
    </Card>
  );
};

export default BuyCard;
