import classNames from 'classnames';
import React, { useState, useEffect, useContext } from 'react';
import { DatePicker } from 'react-rainbow-components';
import { IoCloseSharp } from 'react-icons/io5';
import Select from 'react-select';
import Button from '../Button';
import {InputStyled, TextAreaStyled} from '../Input';
import { ModalContainer, ModalForm, Veil } from './styles';
import AppContext from '../../../contexts/App';
import ServicesCustomer from '../../../services/ServicesCustomer'

const Modal = ({ title, description, section, modalOnSubmit }) => {
  const { setModalIsOpen, modalIsOpen } = useContext(AppContext);

  const [clients, setClients] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [data, setData] = useState({
    title: '',
    description: '',
    dueDate: new Date(),
    customerId: '',
  });

  useEffect(()=>{
    ServicesCustomer.getCustomers().then((data) => {
      setClients(data);
      console.log(clients);
    })
  },[])

  const clienteOptions = []

  clients.map ((client) => {
    clienteOptions.push({value: client.id, label: client.customer_full_name})


  } )

  const options = [
    { value: '624f601783d6ec1bd221a83c', label: 'Yessica' },
    { value: '624f601783d6ec1bd221a83d', label: 'Andres' },
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

  function onChangeClientName(value) {
    const updatedValue = { customerId: value };
    setData(() => ({
      ...data,
      ...updatedValue,
    }));
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
              <Select options={clienteOptions} className="modal-select" 
               onChange={value => onChangeClientName(value)}/>

            </div>
          )}
          <div>
            <label>Description</label>
            <TextAreaStyled
              value={data.description}
              onChange={(e) => onChangeDescripcion(e)}
              placeholder="Enter Project's Description"
            />
          </div>
          <div>
            <DatePicker
              value={data.dueDate}
              onChange={value => onChangeDueDate(value)}
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
