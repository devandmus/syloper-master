import React, { createContext, useState } from 'react';

const values = {
  user: null,
  setUser: () => {},
  modalIsOpen: false,
  modalPeopleIsOpen: false,
  modalRoleIsOpen: false,
  modalCustomerIsOpen: false,
  modalAvatarIsOpen: false,
  modalMessageIsOpen: false,
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
  const [modalCustomerIsOpen, setModalCustomerIsOpen] = useState(
    values.modalCustomerIsOpen
  );
  const [modalAvatarIsOpen, setModalAvatarIsOpen] = useState(
    values.modalAvatarIsOpen
  );
  const [modalMessageIsOpen, setModalMessageIsOpen] = useState(
    values.modalMessageIsOpen
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
        setModalCustomerIsOpen,
        modalAvatarIsOpen,
        setModalAvatarIsOpen,
        modalMessageIsOpen,
        setModalMessageIsOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext as default, AppProvider };
