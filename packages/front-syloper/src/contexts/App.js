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
  const [modalCustomerIsOpen, setmodalCustomerIsOpen] = useState(
    values.modalCustomerIsOpen
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
        modalCustomerIsOpen,
        setmodalCustomerIsOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext as default, AppProvider };
