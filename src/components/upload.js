import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  CardContent,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import ReviewComponent from './review'; // Import the ReviewComponent to display images

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const onDrop = (acceptedFiles) => {
    const newImages = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setImages([...images, ...newImages]);
  };


  const { getRootProps, getInputProps } = useDropzone({ onDrop });



  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  }

  return (

      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper {...getRootProps()} elevation={3} style={dropzoneStyles}>
              <input {...getInputProps()} />
              <Typography align="center" variant="body1">
                Drag & drop images here, or click to select images
              </Typography>
            </Paper>
          </Grid>
          {images.length > 0 && (
            <Grid item xs={12}>
              <ReviewComponent images={images} handleRemoveImage={handleRemoveImage} /> 
            </Grid>
          )}
        </Grid>
      </CardContent>
  );
};

const dropzoneStyles = {
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default ImageUploader;
