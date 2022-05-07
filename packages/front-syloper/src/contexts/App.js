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
  const [modalPeopleIsOpen, setModalPeopleIsOpen] = useState(
    values.modalPeopleIsOpen
  );
  const [modalRoleIsOpen, setModalRoleIsOpen] = useState(
    values.modalPeopleIsOpen
  );

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        modalIsOpen,
        setModalIsOpen,
        modalPeopleIsOpen,
        setModalPeopleIsOpen,
        modalRoleIsOpen,
        setModalRoleIsOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext as default, AppProvider };
