import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme, { GlobalStyle } from '../../theme';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default Layout;
