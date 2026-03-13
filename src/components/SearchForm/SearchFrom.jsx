import React, { useEffect } from 'react';

import { Container } from './SearchForm.styled';
import { IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useTheme } from '../../context/useTheme';

export default function SearchForm({ handleSubmit, setQuery, searchQuery }) {
  const theme = useTheme();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Enter') {
        handleSubmit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleSubmit]);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <Container theme={theme}>
      <TextField
        sx={{ color: theme.mainTextColor }}
        onChange={handleChange}
        value={searchQuery}
        label="Find City or Region"
        variant="outlined"
        size="medium"
        color="primary"
        autoFocus
      />
      <IconButton
        sx={{ color: theme.btnColor }}
        type="submit"
        onClick={handleSubmit}
        size="large"
      >
        <SearchIcon fontSize="inherit" />
      </IconButton>
    </Container>
  );
}
