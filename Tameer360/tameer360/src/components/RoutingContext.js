// RoutingContext.js
import React, { createContext, useState } from 'react';

const RoutingContext = createContext();

export const RoutingProvider = ({ children }) => {
  const [basename] = useState('/'); // Initial value for basename

  return (
    <RoutingContext.Provider value={{ basename }}>
      {children}
    </RoutingContext.Provider>
  );
};

export default RoutingContext;
