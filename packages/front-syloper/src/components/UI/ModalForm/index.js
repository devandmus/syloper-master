import classNames from 'classnames';
import React, { useState, useEffect, useContext } from 'react';
import { DatePicker } from 'react-rainbow-components';
import { IoCloseSharp } from 'react-icons/io5';
import Select from 'react-select';
import Button from '../Button';
import { InputStyled, TextAreaStyled } from '../Input';
import { ModalContainer, ModalForm, Veil } from './styles';
import AppContext from '../../../contexts/App';
import ServicesCustomer from '../../../services/ServicesCustomer';
import ServicesUser from '../../../services/ServicesUser';
import ServicesResponsible from '../../../services/ServicesResponsible';
import ServicesProjects from '../../../services/ServicesProjects';

const Modal = ({ title, description, section, modalOnSubmit, projectId }) => {
  const { setModalIsOpen, modalIsOpen } = useContext(AppContext);

  const [clients, setClients] = useState([]);
  const [responsibles, setResponsibles] = useState([]);
  const [resProfile, setResProfile] = useState([]);
  const [projects, setProjects] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [data, setData] = useState({
    title: '',
    description: '',
    dueDate: new Date(),
    customerId: '',
    responsibleId: '',
    responsibleProfileId: '',
    estimatedHours: 0,
    projectId,
  });

  useEffect(() => {
    ServicesCustomer.getCustomers().then((customerData) => {
      setClients(customerData);
    });
    ServicesUser.getUsers().then((userData) => {
      setResponsibles(userData);
    });
    if (section === 'Task') {
      ServicesResponsible.getResponsibles().then((resData) => {
        setResProfile(resData);
      });

      ServicesProjects.getProjects().then((projData) => {
        setProjects(projData);
      });
    }
  }, []);

  const clienteOptions = [];

  clients.forEach((client) => {
    clienteOptions.push({ value: client.id, label: client.customer_full_name });
  });

  const responsiblesOptions = [];

  responsibles.forEach((responsible) => {
    responsiblesOptions.push({
      value: responsible.id,
      label: responsible.name,
    });
  });

  const projectsOptions = [];

  projects.forEach((project) => {
    projectsOptions.push({
      value: project.id,
      label: project.project_title,
    });
  });

  const defaultV = projectsOptions
    .map((project) => project.value)
    .indexOf(projectId);

  const resProfileOptions = [];

  resProfile.forEach((responsible) => {
    resProfileOptions.push({
      value: responsible.id,
      label: `${responsible.type} $${responsible.hourly_cost}`,
    });
  });

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

  function onChangeClientName(value) {
    const updatedValue = { customerId: value.value };
    setData(() => ({
      ...data,
      ...updatedValue,
    }));
    onChangeAnyInput();
  }

  const onChangeResponsible = (value) => {
    const updatedValue = { responsibleId: value.value };
    setData(() => ({
      ...data,
      ...updatedValue,
    }));
    onChangeAnyInput();
  };

  const onChangeProfile = (value) => {
    const updatedValue = { responsibleProfileId: value.value };
    setData(() => ({
      ...data,
      ...updatedValue,
    }));
    onChangeAnyInput();
  };

  const onChangeEstimatedHour = (e) => {
    const updatedValue = { estimatedHours: e.target.value };
    setData(() => ({
      ...data,
      ...updatedValue,
    }));
    onChangeAnyInput();
  };

  function onChangeDescripcion(e) {
    const updatedValue = { description: e.target.value };
    setData(() => ({
      ...data,
      ...updatedValue,
    }));
    onChangeAnyInput();
  }

  function onChangeProject(value) {
    const updatedValue = { projectId: value.value };
    setData(() => ({
      ...data,
      ...updatedValue,
    }));
    onChangeAnyInput();
  }

  function onChangeDueDate(value) {
    const updatedValue = { dueDate: value };
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
              <Select
                options={clienteOptions}
                className="modal-select"
                onChange={(value) => onChangeClientName(value)}
              />
            </div>
          )}
          <div>
            <DatePicker
              value={data.dueDate}
              onChange={(value) => onChangeDueDate(value)}
              label="Due Date"
              formatStyle="large"
              className="datepicker"
              placeholder="Select Due Date"
            />
          </div>
          {section === 'Task' ? (
            <div>
              <label>Estimated Hour</label>
              <InputStyled
                value={data.estimatedHours}
                onChange={(e) => onChangeEstimatedHour(e)}
              />
            </div>
          ) : null}

          <div>
            <label>
              {section === 'Task' ? `Assignee` : `Project Responsible`}
            </label>
            <Select
              options={responsiblesOptions}
              className="modal-select"
              onChange={(value) => onChangeResponsible(value)}
            />
          </div>
          {section === 'Task' ? (
            <div>
              <label> Profile</label>
              <Select
                options={resProfileOptions}
                className="modal-select"
                onChange={(value) => onChangeProfile(value)}
              />
            </div>
          ) : null}

          {section === 'Task' ? (
            <div>
              <label> Project </label>
              <Select
                defaultValue={projectsOptions[defaultV]}
                options={projectsOptions}
                className="modal-select"
                onChange={(value) => onChangeProject(value)}
              />
            </div>
          ) : null}

          <div>
            <label>Description</label>
            <TextAreaStyled
              value={data.description}
              onChange={(e) => onChangeDescripcion(e)}
              placeholder="Enter Project's Description"
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

export default Modal;
