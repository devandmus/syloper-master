import React, { useState, useEffect, useContext } from 'react';
import { BiTask } from 'react-icons/bi';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import Home from '../Home';
import TableBody from '../Portfolios/Table/styles';
import { CustomersMain } from './styles';
import ServicesCustomer from '../../../services/ServicesCustomer';
import { SectionTitle } from '../../Common/styles';
import ModalCustomer from '../../UI/ModalFormCustomer';
import Button from '../../UI/Button';
import AppContext from '../../../contexts/App';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const { setmodalCustomerIsOpen } = useContext(AppContext);

  useEffect(() => {
    ServicesCustomer.getCustomers().then((data) => setCustomers(data));
  }, []);

  const modalOnSubmit = (customer) => {
    const withNewCustomer = [];
    withNewCustomer.push(...customers, customer);
    setCustomers(withNewCustomer);
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
        <Button onClick={() => setmodalCustomerIsOpen(true)}>
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
                <td>{customer.customer_full_name}</td>
                <td>{customer.customer_email}</td>
                <td>{customer.customer_phone}</td>
                <td>
                  {' '}
                  <FaPen
                    size={25}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setModalEditPerson(true)}
                  />
                  <FaTrashAlt
                    size={25}
                    onClick={() => deletePerson(person.id)}
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
    </Home>
  );
};

export default Customers;
