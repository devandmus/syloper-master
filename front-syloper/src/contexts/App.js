import React, { createContext, useState } from 'react';

const values = {
  user: null,
  setUser: () => {},
  modalIsOpen: false,
};

const AppContext = createContext({ ...values });

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(values.user);
  const [modalIsOpen, setModalIsOpen] = useState(values.modalIsOpen);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        modalIsOpen,
        setModalIsOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext as default, AppProvider };
