import classNames from 'classnames';
import React, { useState, useContext } from 'react';
import { DatePicker } from 'react-rainbow-components';
import { IoCloseSharp } from 'react-icons/io5';
import Select from 'react-select';
import Button from '../Button';
import InputStyled from '../Input';
import { ModalContainer, ModalForm, Veil } from './styles';
import AppContext from '../../../contexts/App';
import ServiceProjects from '../../../services/ServicesProjects';

const Modal = ({ title, description, section, modalOnSubmit }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState();
  const [client, setClient] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const { setModalIsOpen, modalIsOpen } = useContext(AppContext);

  const options = [
    { value: 'Yessica', label: 'Yessica' },
    { value: 'Andres', label: 'Andres' },
    { value: 'Joel', label: 'Joel' },
  ];

  function generateUUID() {
    return Math.floor((1 + Math.random()) * 0x100000000000)
      .toString(16)
      .substring(1);
  }

  function onChangeAnyInput() {
    setErrorMsg('');
  }

  function onChangeName(e) {
    setName(e.target.value);
    onChangeAnyInput();
  }

  function onChangeClientName(e) {
    setClient(e.target.value);
    onChangeAnyInput();
  }

  function onChangeDescripcion(e) {
    setProjectDescription(e.target.value);
    onChangeAnyInput();
  }

  function onChangeDueDate(e) {
    setDate(e.target.value);
    onChangeAnyInput();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = {
      id: generateUUID(),
      customer_id: '622e7b309c6a98bb6282bc1b',
      project_due_date: '2022-03-13T23:21:36.075Z',
      project_description: projectDescription,
      project_date: '2022-03-13T23:21:36.075Z',
      project_cost: 49792,
      project_responsable: 'Jesus',
    };

    console.log(project);
    ServiceProjects.createProject(project).then(() => {
      console.log(project);
    });
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
              value={name}
              onChange={onChangeName}
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
              value={projectDescription}
              onChange={onChangeDescripcion}
              placeholder="Enter Project's Description"
            />
          </div>
          <div>
            <DatePicker
              value={new Date().getTime()}
              onChange={onChangeDueDate}
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
