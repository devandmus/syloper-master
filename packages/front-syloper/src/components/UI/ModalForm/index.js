import classNames from 'classnames';
import React, { useState, useContext } from 'react';
import { DatePicker } from 'react-rainbow-components';
import { IoCloseSharp } from 'react-icons/io5';
import Button from '../Button';
import InputStyled from '../Input';
import { ModalContainer, ModalForm, Veil } from './styles';
import AppContext from '../../../contexts/App';
import Select from 'react-select';

const Modal = ({ title, description, section, modalOnSubmit }) => {
  const [date, setDate] = useState();
  const [name, setName] = useState('');
  const [client, setClient] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const { setModalIsOpen, modalIsOpen } = useContext(AppContext);

  const options = [
    { value: 'Yessica', label: 'Yessica' },
    { value: 'Andres', label: 'Andres' },
    { value: 'Joel', label: 'Joel' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <ModalForm onSubmit={modalOnSubmit}>
          <div>
            <label>{`${section} Name`}</label>
            <InputStyled
              placeholder={`Enter ${section} Name`}
            />
          </div>
          {section === 'Project' && (
            <div>
              <label>Client Name</label>
              <InputStyled placeholder="Enter Client Name" />
            </div>
          )}
          <div>
            <label>Description</label>
            <InputStyled placeholder="Enter Project's Description" />
          </div>
          <div>
            <DatePicker
              value={date}
              onChange={(value) => setDate(value)}
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
          <Button type="button" onClick={handleSubmit}>{`Create ${section}`}</Button>
        </ModalForm>
      </ModalContainer>
      <Veil className={classNames({ show: modalIsOpen })} />
    </>
  );
};

export default Modal;
