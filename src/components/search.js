import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import BuyCard from './buycard'; // Import the BuyCard component

// Example JSON data of movies
const moviesData = [
  {
    "Title": "Inception",
    "Year": "2010",
    "imdbID": "tt1375666"
  },
  {
    "Title": "The Shawshank Redemption",
    "Year": "1994",
    "imdbID": "tt0111161"
  },
  // ... (other movie data)
];

const SearchComplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleSearch = (value) => {
    setInputValue(value);

    // Filter movies based on the search input
    const filteredMovies = moviesData.filter(movie =>
      movie.Title.toLowerCase().includes(value.toLowerCase())
    );

    setOptions(filteredMovies);
  };

  const handleSelect = (event, value) => {
    if (value) {
      const movieExists = selectedMovies.some((movie) => movie.imdbID === value.imdbID);

      if (!movieExists) {
        setSelectedMovies([...selectedMovies, value]);
      }
    }
  };

  const handleClear = () => {
    setInputValue('');
    setOptions([]);
    setSelectedMovies([]); // Clear selected movies
  };

  return (
    <div>
      <Autocomplete
        id="movie-search"
        freeSolo
        options={options}
        inputValue={inputValue}
        onInputChange={(event, newValue) => handleSearch(newValue)}
        onChange={handleSelect}
        getOptionLabel={(option) => option.Title}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Movies"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <>
                  {inputValue && (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClear} size="small">
                        <ClearIcon />
                      </IconButton>
                    </InputAdornment>
                  )}
                </>
              ),
            }}
          />
        )}
      />
      {selectedMovies.length > 0 && (
        <div>
          {selectedMovies.map((movie) => (
            <BuyCard
              key={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              imdbID={movie.imdbID}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComplete;
