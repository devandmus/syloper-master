import React, { useState, useEffect, useContext } from 'react';
import { IoPeopleOutline } from 'react-icons/io5';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { EditText } from 'react-edit-text';
import { useTheme } from 'styled-components';
import TableBody from '../../Portfolios/Table/styles';
import { SectionTitle } from '../../../Common/styles';
import Button from '../../../UI/Button';
import ServicesUser from '../../../../services/ServicesUser';
import AppContext from '../../../../contexts/App';
import ModalPerson from '../../../UI/ModalFormPerson';
import Avatar from '../../../../images/avatar.jpg';
import { AssignImg } from '../../../UI/avatar/styles';
import ModalAvatar from '../../../UI/ModalFormAvatar';

const People = () => {
  const theme = useTheme();
  const [people, setPeople] = useState([]);
  const { setModalPeopleIsOpen } = useContext(AppContext);
  const { setModalAvatarIsOpen } = useContext(AppContext);

  useEffect(() => {
    ServicesUser.getUsers().then((data) => {
      setPeople(data);
    });
  }, []);

  const modalOnSubmit = (person) => {
    const withNewPerson = [];
    withNewPerson.push(...people, person);
    setPeople(withNewPerson);
    setModalPeopleIsOpen(false);
  };

  const updatePerson = (id, data) => {
    const updatedValue = {
      ...people.find((person) => person.id === id),
      ...data,
    };
    ServicesUser.updateUser(id, updatedValue);
  };

  const handleSaveEmail = ({ name, value, previousValue }) => {
    if (value !== previousValue) {
      updatePerson(name, { email: value });
    }
  };

  const handleSaveName = ({ name, value, previousValue }) => {
    if (value !== previousValue) {
      updatePerson(name, { name: value });
    }
  };

  const deletePerson = (id) => {
    ServicesUser.deleteUser(id).then(
      setPeople(people.filter((person) => person.id !== id))
    );
  };

  return (
    <>
      <SectionTitle className="task-title">
        <div>
          <i>
            <IoPeopleOutline />
          </i>
          <h5>People</h5>
        </div>
        <Button onClick={() => setModalPeopleIsOpen(true)}>Add People</Button>
      </SectionTitle>
      <TableBody>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.email}>
              <td style={{ textAlign: 'center', width: '200px' }}>
                <AssignImg
                  src={person.avatar}
                  onClick={setModalAvatarIsOpen(true)}
                  style={{ cursor: 'pointer' }}
                />
              </td>
              <td style={{ textAlign: 'center', width: '200px' }}>
                <EditText
                  name={person.id}
                  onChange={setPeople}
                  onSave={handleSaveName}
                  defaultValue={person.name}
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
              <td style={{ textAlign: 'center', width: '200px' }}>
                <EditText
                  name={person.id}
                  onChange={setPeople}
                  onSave={handleSaveEmail}
                  defaultValue={person.email}
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
                  onClick={() => deletePerson(person.id)}
                  style={{ cursor: 'pointer' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </TableBody>
      <ModalPerson title="New Person" modalOnSubmit={modalOnSubmit} />
    </>
  );
};

export default People;
