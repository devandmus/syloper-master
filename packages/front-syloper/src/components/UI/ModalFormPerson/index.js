import classNames from 'classnames';
import React, { useState, useContext } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import Button from '../Button';
import { InputStyled, AvatarInputContainerStyled } from '../Input';
import { ModalContainer, ModalForm, Veil } from '../ModalForm/styles';
import AppContext from '../../../contexts/App';
import ServicesUser from '../../../services/ServicesUser';

const ModalPerson = ({ title, section }) => {
  const { setModalIsOpen, modalIsOpen } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
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

  const onChangePassword = (e) => {
    const updatedValue = { password: e.target.value };
    setData({
      ...data,
      ...updatedValue,
    });
    onChangeAnyInput();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    ServicesUser.createUser(data)
      .then(() => {
        setModalIsOpen(false);
        window.location.reload();
      })
      .catch((err) => {
        setErrorMsg(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCloseClick = () => {
    setModalIsOpen(false);
  };

  const onChangeAvatar = (e) => {
    const file = e.target.files[0];
    onChangeAnyInput();
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const base64Avatar = reader.result;
          setData({
            ...data,
            ...{ avatar: base64Avatar },
          });
          resolve();
        };
      } catch (err) {
        reject(err);
      }
    });
  };

  const hasAvatar = data.avatar.length > 0;

  return (
    <>
      <ModalContainer className={classNames({ show: modalIsOpen })}>
        <i onClick={handleCloseClick}>
          <IoCloseSharp color="#000" size="35px" />
        </i>
        <h3>{title}</h3>
        {loading ? (
          'Sending data'
        ) : (
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
                value={data.email}
                onChange={(e) => onChangeEmail(e)}
                placeholder="Enter Email"
              />
            </div>
            <div>
              <label>Password</label>
              <InputStyled
                type="password"
                value={data.password}
                onChange={(e) => onChangePassword(e)}
                placeholder="Enter Password"
              />
            </div>

            <div>
              <label>Avatar</label>
              <AvatarInputContainerStyled htmlFor="avatar">
                <div>
                  {hasAvatar ? 'Done!' : 'Click here to upload an avatar'}
                </div>
                <input
                  id="avatar"
                  type="file"
                  onChange={(e) => onChangeAvatar(e)}
                />
              </AvatarInputContainerStyled>
            </div>

            <Button
              type="button"
              onClick={handleSubmit}
            >{`Create ${section}`}</Button>
          </ModalForm>
        )}
      </ModalContainer>
      <Veil className={classNames({ show: modalIsOpen })} />
    </>
  );
};

export default ModalPerson;
