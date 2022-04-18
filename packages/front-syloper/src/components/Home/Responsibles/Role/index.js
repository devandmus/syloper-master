import React, { useState, useEffect, useContext } from 'react';
import { BiTask } from 'react-icons/bi';
import TableBody from '../../Portfolios/Table/styles';
import { SectionTitle } from '../../../Common/styles';
import Button from '../../../UI/Button';
import ServicesResponsible from '../../../../services/ServicesResponsible';
import ModalPerson from '../../../UI/ModalFormPerson';
import AppContext from '../../../../contexts/App';

const Role = () => {
  const [roles, setRoles] = useState([]);
  const { setModalIsOpen } = useContext(AppContext);

  useEffect(() => {
    ServicesResponsible.getResponsibles().then((data) => {
      setRoles(data);
    });
  }, []);

  const modalOnSubmit = (customer) => {
    const updatedValue = {
      customer_full_name: customer.name,
      customer_email: customer.email,
      customer_phone: customer.phone,
    };

    ServicesResponsible.createResponsibleTypes(updatedValue).then(() => {
      const withNewRole = [];
      withNewRole.push(...roles, updatedValue);
      setRoles(withNewRole);
      setModalIsOpen(false);

      setModalIsOpen(false);
    });
  };

  return (
    <>
      <SectionTitle className="task-title">
        <div>
          <i>
            <BiTask />
          </i>
          <h5>Role & Cost</h5>
        </div>
        <Button onClick={() => setModalIsOpen(true)}>Add Role</Button>
      </SectionTitle>
      <TableBody>
        <thead>
          <tr>
            <th>Role</th>
            <th>Hourly Cost</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr>
              <td>{role.type}</td>
              <td>$ {role.hourly_cost}</td>
            </tr>
          ))}
        </tbody>
      </TableBody>
      <ModalPerson
        title="New Role"
        description="Add role details"
        section="Role"
        modalOnSubmit={modalOnSubmit}
      />
    </>
  );
};

export default Role;
