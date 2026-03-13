import React from 'react';
import { themeContext } from './themeContext';
import { colors } from '../theme';

export default function ThemeProvider({ children }) {
  return (
    <themeContext.Provider value={colors}>{children}</themeContext.Provider>
  );
}
