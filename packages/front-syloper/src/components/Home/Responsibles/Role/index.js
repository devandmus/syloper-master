import React, { useState, useEffect, useContext } from 'react';
import { BiTask } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { EditText } from 'react-edit-text';
import { useTheme } from 'styled-components';
import TableBody from '../../Portfolios/Table/styles';
import { SectionTitle } from '../../../Common/styles';
import Button from '../../../UI/Button';
import ServicesResponsible from '../../../../services/ServicesResponsible';
import ModalRole from '../../../UI/ModalFormRole';
import AppContext from '../../../../contexts/App';
import { numberFormatter } from '../../../../utils/number';
import ModalMessage from '../../../UI/ModalMessageBox';

const Role = () => {
  const [roles, setRoles] = useState([]);
  const { setModalRoleIsOpen } = useContext(AppContext);
  const [message, setMessage] = useState('');
  const { setModalMessageIsOpen } = useContext(AppContext);

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
    ServicesResponsible.deleteResponsibleTypes(id).then((response) => {
      if (response.status === 200) {
        setRoles(roles.filter((role) => role.id !== id));
      } else if (response.status === 423) {
        setModalMessageIsOpen(true);
        setMessage(
          `Can't remove it. There are tasks depending on it. Before remove it, you have to unassign them from the tasks.`
        );
      }
    });
  };

  const updateRole = (id, data) => {
    const updatedValue = {
      ...roles.find((role) => role.id === id),
      ...data,
    };
    ServicesResponsible.updateResponsibleTypes(id, updatedValue);
  };

  const handleSaveType = ({ name, value, previousValue }) => {
    if (value !== previousValue) {
      updateRole(name, { type: value });
    }
  };

  const handleSaveHourlyCost = ({ name, value, previousValue }) => {
    if (value !== previousValue) {
      updateRole(name, { hourly_cost: value });
    }
  };

  const theme = useTheme();

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
              <td>
                <EditText
                  name={role.id}
                  onChange={setRoles}
                  onSave={handleSaveType}
                  defaultValue={role.type}
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
                  name={role.id}
                  onChange={setRoles}
                  onSave={handleSaveHourlyCost}
                  defaultValue={numberFormatter(role.hourly_cost)}
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
      <ModalMessage title="Message" message={message} />
    </>
  );
};

export default Role;
