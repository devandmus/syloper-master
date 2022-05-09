import classNames from 'classnames';
import React, { useState, useContext } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import Button from '../Button';
import { InputStyled, AvatarInputContainerStyled } from '../Input';
import { ModalContainer, ModalForm, Veil } from '../ModalForm/styles';
import AppContext from '../../../contexts/App';
import ServicesCustomer from '../../../services/ServicesCustomer';

const ModalCustomer = ({ title, modalOnSubmit }) => {
  const { setModalCustomerIsOpen, modalCustomerIsOpen } =
    useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  function onChangeAnyInput() {
    setErrorMsg('');
  }

  function onChangeName(e) {
    const updatedValue = { name: e.target.value };
    setData({
      ...data,
      ...updatedValue,
    });
    onChangeAnyInput();
  }

  function onChangeEmail(e) {
    const updatedValue = { email: e.target.value };
    setData({
      ...data,
      ...updatedValue,
    });
    onChangeAnyInput();
  }

  const onChangePhone = (e) => {
    const updatedValue = { phone: e.target.value };
    setData({
      ...data,
      ...updatedValue,
    });
    onChangeAnyInput();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedValue = {
      customer_full_name: data.name,
      customer_email: data.email,
      customer_phone: data.phone,
    };

    ServicesCustomer.createCustomer(updatedValue)
      .then(() => {
        setModalCustomerIsOpen(false);
        modalOnSubmit(updatedValue);
        // window.location.reload();
      })
      .catch((err) => {
        setErrorMsg(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCloseClick = () => {
    setModalCustomerIsOpen(false);
  };

  return (
    <>
      <ModalContainer className={classNames({ show: modalCustomerIsOpen })}>
        <i onClick={handleCloseClick}>
          <IoCloseSharp color="#000" size="35px" />
        </i>
        <h3>{title}</h3>
        {loading ? (
          'Sending data'
        ) : (
          <ModalForm>
            <div>
              <label>{`${title} Name`}</label>
              <InputStyled
                value={data.name}
                onChange={(e) => onChangeName(e)}
                placeholder={`Enter ${title} Name`}
              />
            </div>
            <div>
              <label>Email</label>
              <InputStyled
                value={data.email}
                onChange={(e) => onChangeEmail(e)}
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label>Phone</label>
              <InputStyled
                type="text"
                value={data.phone}
                onChange={(e) => onChangePhone(e)}
                placeholder="Enter Phone"
              />
            </div>

            <Button type="button" onClick={handleSubmit}>
              Create Customer
            </Button>
          </ModalForm>
        )}
      </ModalContainer>
      <Veil className={classNames({ show: modalCustomerIsOpen })} />
    </>
  );
};

export default ModalCustomer;
