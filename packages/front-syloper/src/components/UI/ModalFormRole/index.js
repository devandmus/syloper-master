import classNames from 'classnames';
import React, { useState, useContext } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import Button from '../Button';
import { InputStyled } from '../Input';
import { ModalContainer, ModalForm, Veil } from '../ModalForm/styles';
import AppContext from '../../../contexts/App';
import ServicesResponsible from '../../../services/ServicesResponsible';

const ModalRole = ({ title, modalOnSubmit }) => {
  const { setModalRoleIsOpen, modalRoleIsOpen } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [data, setData] = useState({
    name: '',
    hourlyCost: 0,
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

  function onChangeHourlyCost(e) {
    const updatedValue = { hourlyCost: e.target.value };
    setData({
      ...data,
      ...updatedValue,
    });
    onChangeAnyInput();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    ServicesResponsible.createResponsibleTypes({
      hourly_cost: data.hourlyCost,
      type: data.name,
    })
      .then(() => {
        setModalRoleIsOpen(false);
        modalOnSubmit({
          hourly_cost: data.hourlyCost,
          type: data.name,
        });
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
    setModalRoleIsOpen(false);
  };

  return (
    <>
      <ModalContainer className={classNames({ show: modalRoleIsOpen })}>
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
              <label>Hourly Cost</label>
              <InputStyled
                type="number"
                value={data.hourlyCost}
                onChange={(e) => onChangeHourlyCost(e)}
                placeholder="Enter hourly cost"
              />
            </div>

            <Button type="button" onClick={handleSubmit}>
              Create role
            </Button>
          </ModalForm>
        )}
      </ModalContainer>
      <Veil className={classNames({ show: modalRoleIsOpen })} />
    </>
  );
};

export default ModalRole;
