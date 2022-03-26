import classNames from 'classnames';
import React, { useState, useContext } from 'react';
import { DatePicker } from 'react-rainbow-components';
import { IoCloseSharp } from 'react-icons/io5';
import Select from 'react-select';
import Button from '../Button';
import InputStyled from '../Input';
import { ModalContainer, ModalForm, Veil } from './styles';
import AppContext from '../../../contexts/App';

const Modal = ({ title, description, section, modalOnSubmit }) => {
  const { setModalIsOpen, modalIsOpen } = useContext(AppContext);

  const [client, setClient] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [data, setData] = useState({
    title: '',
    description: '',
    dueDate: null,
  });

  const options = [
    { value: 'Yessica', label: 'Yessica' },
    { value: 'Andres', label: 'Andres' },
    { value: 'Joel', label: 'Joel' },
  ];

  function onChangeAnyInput() {
    setErrorMsg('');
  }

  function onChangeTitle(e) {
    const updatedValue = { title: e.target.value };
    setData(() => ({
      ...data,
      ...updatedValue,
    }));

    onChangeAnyInput();
  }

  function onChangeClientName(e) {
    setClient(e.target.value);
    onChangeAnyInput();
  }

  function onChangeDescripcion(e) {
    const updatedValue = { description: e.target.value };
    setData(() => ({
      ...data,
      ...updatedValue,
    }));
    onChangeAnyInput();
  }

  function onChangeDueDate(e) {
    const updatedValue = { dueDate: e.target.value };
    setData(() => ({
      ...data,
      ...updatedValue,
    }));
    onChangeAnyInput();
  }

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
        <p>{description}</p>
        <ModalForm>
          <div>
            <label>{`${section} Name`}</label>
            <InputStyled
              value={data.title}
              onChange={(e) => onChangeTitle(e)}
              placeholder={`Enter ${section} Name`}
            />
          </div>
          {section === 'Project' && (
            <div>
              <label>Client Name</label>
              <InputStyled
                value={client}
                onChange={onChangeClientName}
                placeholder="Enter Client Name"
              />
            </div>
          )}
          <div>
            <label>Description</label>
            <InputStyled
              value={data.description}
              onChange={(e) => onChangeDescripcion(e)}
              placeholder="Enter Project's Description"
            />
          </div>
          <div>
            <DatePicker
              value={data.dueDate}
              onChange={(e) => onChangeDueDate(e)}
              label="Due Date"
              formatStyle="large"
              className="datepicker"
              placeholder="Select Due Date"
            />
          </div>
          {section === 'Task' && (
            <div>
              <label>Assignee</label>
              <Select options={options} className="modal-select" />
            </div>
          )}
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

export default Modal;
