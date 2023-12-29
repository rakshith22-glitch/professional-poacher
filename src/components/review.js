// ReviewComponent.js

import React from 'react';
import {
  Card,
  CardContent,
  IconButton,
  Typography,
  Grid,
  CardMedia,
  CardActions,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ReviewComponent = ({ images, handleRemoveImage }) => {
  return (
    
     
      <CardContent>
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={image.preview}
                  alt={`Image ${index + 1}`}
                />
                
                  <Typography variant="subtitle1" component="div" align="center">
                    Image {index + 1}
                  </Typography>
                
                <CardActions sx={{ justifyContent: 'center' }}>
                  <IconButton
                    aria-label={`delete ${index + 1}`}
                    onClick={() => handleRemoveImage(index)} // Call the handleRemoveImage function
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
   
  );
};

export default ReviewComponent;
