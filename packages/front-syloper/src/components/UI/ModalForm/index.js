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
  const [projectTitle, setProjectTitle] = useState('');
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

  function onChangeAnyInput() {
    setErrorMsg('');
  }

  function onChangeProjectTitle(e) {
    setProjectTitle(e.target.value);
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
    console.log(e.target.value);
    setDate(e.target.value);
    onChangeAnyInput();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const project = {
      customer_id: '622e7b309c6a98bb6282bc1b',
      project_due_date: date,
      project_title: projectTitle,
      project_description: projectDescription,
      project_date: '2022-03-13T23:21:36.075Z',
      project_cost: 49792,
      project_responsable: 'Jesus',
      project_status_id: '622e7a9d6b3414b67e211b79',
    };

    ServiceProjects.createProject(project).then(() => {
      setModalIsOpen(false);
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
              value={projectTitle}
              onChange={onChangeProjectTitle}
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
              value={date}
              onChange={setDate}
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
