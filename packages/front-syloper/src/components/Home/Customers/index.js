import React, { useState, useEffect, useContext } from 'react';
import { BiTask } from 'react-icons/bi';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { EditText } from 'react-edit-text';
import { useTheme } from 'styled-components';
import Home from '../Home';
import TableBody from '../Portfolios/Table/styles';
import { CustomersMain } from './styles';
import ServicesCustomer from '../../../services/ServicesCustomer';
import { SectionTitle } from '../../Common/styles';
import ModalCustomer from '../../UI/ModalFormCustomer';
import Button from '../../UI/Button';
import AppContext from '../../../contexts/App';
import ModalMessage from '../../UI/ModalMessageBox';

const Customers = () => {
  const theme = useTheme();
  const [customers, setCustomers] = useState([]);
  const { setModalCustomerIsOpen } = useContext(AppContext);
  const [message, setMessage] = useState('');
  const { setModalMessageIsOpen } = useContext(AppContext);

  useEffect(() => {
    ServicesCustomer.getCustomers().then((data) => setCustomers(data));
  }, []);

  const deleteCustomer = (id) => {
    ServicesCustomer.deleteCustomer(id).then((response) => {
      setModalMessageIsOpen(true);
      if (response.status === 423) {
        setMessage(`Can't remove it. There are projects depending on it.`);
      } else if (response.status === 200) {
        setMessage(`Successfully removed`);
      }
    });
  };

  const modalOnSubmit = (customer) => {
    const withNewCustomer = [];
    withNewCustomer.push(...customers, customer);
    setCustomers(withNewCustomer);
  };

  const updateCustomer = (id, data) => {
    const updatedValue = {
      ...customers.find((customer) => customer.id === id),
      ...data,
    };
    ServicesCustomer.updateCustomer(id, updatedValue);
  };

  const handleSaveName = ({ name, value, previousValue }) => {
    if (value !== previousValue) {
      updateCustomer(name, { customer_full_name: value });
    }
  };

  const handleSaveEmail = ({ name, value, previousValue }) => {
    if (value !== previousValue) {
      updateCustomer(name, { customer_email: value });
    }
  };

  const handleSavePhone = ({ name, value, previousValue }) => {
    if (value !== previousValue) {
      updateCustomer(name, { customer_phone: value });
    }
  };

  return (
    <Home title="Customers">
      <SectionTitle className="task-title">
        <div>
          <i>
            <BiTask />
          </i>
          <h5>People</h5>
        </div>
        <Button onClick={() => setModalCustomerIsOpen(true)}>
          Add Customer
        </Button>
      </SectionTitle>
      <CustomersMain>
        <TableBody>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr>
                <td>
                  <EditText
                    name={customer.id}
                    onChange={setCustomers}
                    onSave={handleSaveName}
                    defaultValue={customer.customer_full_name}
                    style={{
                      textAlign: 'center',
                      width: '100%',
                      fontWeight: 500,
                      fontSize: '1.08rem',
                      lineHeight: 1.35,
                      fontFamily: theme.font.family,
                    }}
                  />
                </td>
                <td>
                  <EditText
                    name={customer.id}
                    onChange={setCustomers}
                    onSave={handleSaveEmail}
                    defaultValue={customer.customer_email}
                    style={{
                      textAlign: 'center',
                      width: '100%',
                      fontWeight: 500,
                      fontSize: '1.08rem',
                      lineHeight: 1.35,
                      fontFamily: theme.font.family,
                    }}
                  />
                </td>
                <td>
                  <EditText
                    name={customer.id}
                    onChange={setCustomers}
                    onSave={handleSavePhone}
                    defaultValue={customer.customer_phone}
                    style={{
                      textAlign: 'center',
                      width: '100%',
                      fontWeight: 500,
                      fontSize: '1.08rem',
                      lineHeight: 1.35,
                      fontFamily: theme.font.family,
                    }}
                  />
                </td>
                <td>
                  <FaTrashAlt
                    size={25}
                    onClick={() => deleteCustomer(customer.id)}
                    style={{ cursor: 'pointer' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </TableBody>
        <ModalCustomer
          title="New Customer"
          description="Add task details"
          section="Customer"
          modalOnSubmit={modalOnSubmit}
        />
      </CustomersMain>
      <ModalMessage title="message" message={message} />
    </Home>
  );
};

export default Customers;
