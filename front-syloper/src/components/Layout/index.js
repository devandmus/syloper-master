import React from 'react';
import { ThemeProvider } from 'styled-components';
import ViewportProvider from '../../contexts/viewportSize';
import Theme, { GlobalStyle } from '../../theme';

const Layout = ({ children }) => {
  return (
    <ViewportProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ViewportProvider>
  );
}

export default Layout;
