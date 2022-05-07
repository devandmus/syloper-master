import React, { useState, useEffect, useContext } from 'react';
import { BiTask } from 'react-icons/bi';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import TableBody from '../../Portfolios/Table/styles';
import { SectionTitle } from '../../../Common/styles';
import Button from '../../../UI/Button';
import ServicesResponsible from '../../../../services/ServicesResponsible';
import ModalRole from '../../../UI/ModalFormRole';
import AppContext from '../../../../contexts/App';

const Role = () => {
  const [roles, setRoles] = useState([]);
  const { setModalRoleIsOpen } = useContext(AppContext);

  useEffect(() => {
    ServicesResponsible.getResponsibles().then((data) => {
      setRoles(data);
    });
  }, []);

  const modalOnSubmit = (role) => {
    const withNewRole = [];
    withNewRole.push(...roles, role);
    setRoles(withNewRole);
    setModalRoleIsOpen(false);
  };

  const deleteRole = (id) => {
    ServicesResponsible.deleteResponsibleTypes(id).then(
      setRoles(roles.filter((role) => role.id !== id))
    );
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
        <Button onClick={() => setModalRoleIsOpen(true)}>Add Role</Button>
      </SectionTitle>
      <TableBody>
        <thead>
          <tr>
            <th>Role</th>
            <th>Hourly Cost</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr>
              <td>{role.type}</td>
              <td>$ {role.hourly_cost}</td>
              <td>
                <FaPen size={25} style={{ cursor: 'pointer' }} />
                <FaTrashAlt
                  onClick={() => deleteRole(role.id)}
                  size={25}
                  style={{ cursor: 'pointer' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </TableBody>
      <ModalRole title="New Role" modalOnSubmit={modalOnSubmit} />
    </>
  );
};

export default Role;
