import React, { useState, useEffect, useContext } from 'react';
import { BiTask } from 'react-icons/bi';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import TableBody from '../../Portfolios/Table/styles';
import { SectionTitle } from '../../../Common/styles';
import Button from '../../../UI/Button';
import ServicesUser from '../../../../services/ServicesUser';
import AppContext from '../../../../contexts/App';
import ModalPerson from '../../../UI/ModalFormPerson';
import Avatar from '../../../../images/avatar.jpg';
import { AssignImg } from '../../../UI/avatar/styles';

const People = () => {
  const [people, setPeople] = useState([]);
  const { setModalPeopleIsOpen } = useContext(AppContext);

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
            <BiTask />
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
              <td>
                <AssignImg src={person.avatar} />
              </td>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>
                <FaPen
                  size={25}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setModalEditPerson(true)}
                />
                {person.id === '624f601783d6ec1bd221a83c' ||
                person.id === '624f601783d6ec1bd221a83d' ? null : (
                  <FaTrashAlt
                    size={25}
                    onClick={() => deletePerson(person.id)}
                    style={{ cursor: 'pointer' }}
                  />
                )}
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
