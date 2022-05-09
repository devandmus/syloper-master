import classNames from 'classnames';
import React, { useContext } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import Button from '../Button';
import { ModalMessageContainer, ModalForm, Veil } from '../ModalForm/styles';
import AppContext from '../../../contexts/App';

const ModalMessage = ({ title, message, entries }) => {
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
          <p>{message}</p>

          {entries ? (
            <>
              <p> Before remove it, you have to unassign them from</p>

              {entries.map((entry) => (
                <ol>
                  <li>{entry}</li>
                </ol>
              ))}
            </>
          ) : null}
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
