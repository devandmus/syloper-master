import React, { createContext, useContext } from 'react';

const viewportContext = createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(
    typeof window !== 'undefined' && window.innerWidth
  );
  const [height, setHeight] = React.useState(
    typeof window !== 'undefined' && window.innerHeight
  );
  const handleWindowResize = () => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () =>
      typeof window !== 'undefined' &&
      window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

export const useViewport = () => {
  const { width, height } = useContext(viewportContext);
  return { width, height };
};

export default ViewportProvider;
