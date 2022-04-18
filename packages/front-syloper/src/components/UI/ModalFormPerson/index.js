import classNames from 'classnames';
import React, { useState, useEffect, useContext } from 'react';
import { DatePicker } from 'react-rainbow-components';
import { IoCloseSharp } from 'react-icons/io5';
import Select from 'react-select';
import Button from '../Button';
import { InputStyled, TextAreaStyled } from '../Input';
import { ModalContainer, ModalForm, Veil } from '../ModalForm/styles';
import AppContext from '../../../contexts/App';

const ModalPerson = ({ title, description, section, modalOnSubmit }) => {
  const { setModalIsOpen, modalIsOpen } = useContext(AppContext);

  const [errorMsg, setErrorMsg] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  function onChangeAnyInput() {
    setErrorMsg('');
  }

  function onChangeName(e) {
    const updatedValue = { name: e.target.value };
    setData(() => ({
      ...data,
      ...updatedValue,
    }));

    onChangeAnyInput();
  }

  function onChangeEmail(value) {
    const updatedValue = { email: value.value };
    setData(() => ({
      ...data,
      ...updatedValue,
    }));
    onChangeAnyInput();
  }

  const onChangePassword = (value) => {
    const updatedValue = { password: value.value };
    setData(() => ({
      ...data,
      ...updatedValue,
    }));
    onChangeAnyInput();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    modalOnSubmit(data);
  };

  const handleCloseClick = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <ModalContainer className={classNames({ show: modalIsOpen })}>
        <i onClick={handleCloseClick}>
          <IoCloseSharp color="#000" size="35px" />
        </i>
        <h3>{title}</h3>
        <ModalForm>
          <div>
            <label>{`${section} Name`}</label>
            <InputStyled
              value={data.name}
              onChange={(e) => onChangeName(e)}
              placeholder={`Enter ${section} Name`}
            />
          </div>
          <div>
            <label>Email</label>
            <InputStyled
              value={data.name}
              onChange={(e) => onChangeEmail(e)}
              placeholder="Enter Email"
            />
          </div>
          <div>
            <label>Password</label>
            <InputStyled
              value={data.password}
              onChange={(e) => onChangePassword(e)}
              placeholder="Enter Password"
            />
          </div>

          <Button
            type="button"
            onClick={handleSubmit}
          >{`Create ${section}`}</Button>
        </ModalForm>
      </ModalContainer>
      <Veil className={classNames({ show: modalIsOpen })} />
    </>
  );
};

export default ModalPerson;
