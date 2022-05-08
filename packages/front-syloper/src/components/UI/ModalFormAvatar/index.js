import classNames from 'classnames';
import React, { useState, useContext } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import Button from '../Button';
import { InputStyled, AvatarInputContainerStyled } from '../Input';
import { ModalContainer, ModalForm, Veil } from '../ModalForm/styles';
import AppContext from '../../../contexts/App';
import ServicesUser from '../../../services/ServicesUser';

const ModalAvatar = ({ title, id }) => {
  const { setModalAvatarIsOpen, modalAvatarIsOpen } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [data, setData] = useState({
    avatar: '',
  });

  function onChangeAnyInput() {
    setErrorMsg('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    ServicesUser.createUser(data)
      .then(() => {
        setModalAvatarIsOpen(false);
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
    setModalAvatarIsOpen(false);
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
      <ModalContainer
        key={id}
        className={classNames({ show: modalAvatarIsOpen })}
      >
        <i onClick={handleCloseClick}>
          <IoCloseSharp color="#000" size="35px" />
        </i>
        <h3>{title}</h3>
        {loading ? (
          'Sending data'
        ) : (
          <ModalForm>
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

            <Button type="button" onClick={handleSubmit}>
              Submit
            </Button>
          </ModalForm>
        )}
      </ModalContainer>
      <Veil className={classNames({ show: modalAvatarIsOpen })} />
    </>
  );
};

export default ModalAvatar;
