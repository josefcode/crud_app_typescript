import React, { createContext, useState, useContext, ReactNode } from 'react';

interface OpenStateContextType {
    isOpen: boolean;
    toggleOpen: () => void;
  }
  
  interface OpenStateProviderProps {
    children: ReactNode;
  }

const OpenStateContext = createContext<OpenStateContextType>({ isOpen: false, toggleOpen: () => {} });

const OpenStateProvider = ({ children }: OpenStateProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(prev => !prev);
  };

  const value = {
    isOpen,
    toggleOpen,
  };

  return (
    <OpenStateContext.Provider value={value}>
      {children}
    </OpenStateContext.Provider>
  );
};

const useOpenState = () => {
  const context = useContext(OpenStateContext);
  if (!context) {
    throw new Error('useOpenState must be used within an OpenStateProvider');
  }
  return context;
};

export { OpenStateProvider, useOpenState };