import React, { useState, useEffect, useContext } from 'react';
import { BiTask } from 'react-icons/bi';
import Home from '../Home';
import TableBody from '../Portfolios/Table/styles';
import { CustomersMain } from './styles';
import ServicesCustomer from '../../../services/ServicesCustomer';
import { SectionTitle } from '../../Common/styles';
import ModalPerson from '../../UI/ModalFormPerson';
import Button from '../../UI/Button';
import AppContext from '../../../contexts/App';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const { setModalIsOpen } = useContext(AppContext);

  useEffect(() => {
    ServicesCustomer.getCustomers().then((data) => setCustomers(data));
  }, []);

  const modalOnSubmit = (customer) => {
    const updatedValue = {
      customer_full_name: customer.name,
      customer_email: customer.email,
      customer_phone: customer.phone,
    };
    ServicesCustomer.createCustomer(updatedValue).then(() => {
      const withNewCustomer = [];
      withNewCustomer.push(...customers, updatedValue);
      setCustomers(withNewCustomer);
      setModalIsOpen(false);

      setModalIsOpen(false);
    });
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
        <Button onClick={() => setModalIsOpen(true)}>Add Customer</Button>
      </SectionTitle>
      <CustomersMain>
        <TableBody>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr>
                <td>{customer.customer_full_name}</td>
                <td>{customer.customer_email}</td>
                <td>{customer.customer_phone}</td>
              </tr>
            ))}
          </tbody>
        </TableBody>
        <ModalPerson
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
