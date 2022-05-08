import classNames from 'classnames';
import React, { useContext } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import Button from '../Button';
import { ModalMessageContainer, ModalForm, Veil } from '../ModalForm/styles';
import AppContext from '../../../contexts/App';

const ModalMessage = ({ title, message }) => {
  const { setModalMessageIsOpen, modalMessageIsOpen } = useContext(AppContext);

  const handleCloseClick = () => {
    setModalMessageIsOpen(false);
  };

  return (
    <>
      <ModalMessageContainer
        className={classNames({ show: modalMessageIsOpen })}
      >
        <i onClick={handleCloseClick}>
          <IoCloseSharp color="#000" size="35px" />
        </i>
        <h3>{title}</h3>
        <ModalForm>
          <h4>{message}</h4>
          <Button type="button" onClick={handleCloseClick}>
            Close
          </Button>
        </ModalForm>
      </ModalMessageContainer>
      <Veil className={classNames({ show: modalMessageIsOpen })} />
    </>
  );
};

export default ModalMessage;
