import React from 'react';
import { navigate } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import useUser from '../../hooks/useUser';
import ViewportProvider from '../../contexts/viewportSize';
import { AppProvider } from '../../contexts/App';
import Theme, { GlobalStyle } from '../../theme';
import NoAccess from '../NoAccess';

const Layout = ({ children, location }) => {
  const { pathname } = location;
  const user = useUser();
  const publicPaths = ['/', '/recover-password'];
  const hasAccess = Boolean(user) || publicPaths.includes(pathname);

  if (!hasAccess) return <NoAccess />;
  if (user && pathname === '/') {
    navigate('/home');
    return <div />;
  }

  return children;
};

const ContextWrapper = ({ children, location }) => (
  <AppProvider>
    <ViewportProvider>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Layout location={location}>{children}</Layout>
      </ThemeProvider>
    </ViewportProvider>
  </AppProvider>
);

export default ContextWrapper;
