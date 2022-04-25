import React, { useState, useEffect, useContext } from 'react';
import { BiTask } from 'react-icons/bi';
import TableBody from '../../Portfolios/Table/styles';
import { SectionTitle } from '../../../Common/styles';
import Button from '../../../UI/Button';
import ServicesUser from '../../../../services/ServicesUser';
import AppContext from '../../../../contexts/App';
import ModalPerson from '../../../UI/ModalFormPerson';
import Avatar from '../../../../images/avatar.jpg';


const People = () => {
  const [people, setPeople] = useState([]);
  const { setModalIsOpen } = useContext(AppContext);

  useEffect(() => {
    ServicesUser.getUsers().then((data) => {
      setPeople(data);
    });
  }, []);

  return (
    <>
      <SectionTitle className="task-title">
        <div>
          <i>
            <BiTask />
          </i>
          <h5>People</h5>
        </div>
        <Button onClick={() => setModalIsOpen(true)}>Add People</Button>
      </SectionTitle>
      <TableBody>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.email}>
              <td>
                <img src={person.avatar || Avatar} alt="Avatar" />
              </td>
              <td>{person.name}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </TableBody>
      <ModalPerson title="New Person" description="Add task details" />
    </>
  );
};

export default People;
