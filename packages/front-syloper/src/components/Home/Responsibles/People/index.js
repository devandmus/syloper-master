import React, { useState, useEffect, useContext } from 'react';
import { BiTask } from 'react-icons/bi';
import TableBody from '../../Portfolios/Table/styles';
import { SectionTitle } from '../../../Common/styles';
import Button from '../../../UI/Button';
import ServicesUser from '../../../../services/ServicesUser';
import AppContext from '../../../../contexts/App';
import ModalPerson from '../../../UI/ModalFormPerson';

const People = () => {
  const [people, setPeople] = useState([]);
  const { setModalIsOpen } = useContext(AppContext);

  useEffect(() => {
    ServicesUser.getUsers().then((data) => {
      setPeople(data);
    });
  }, []);

  const modalOnSubmit = (task) => {
    const updatedValue = {
      project_id: projectId,
      title: task.title,
      task_due_date: task.dueDate,
      task_description: task.description,
      task_responsible_user_id: task.responsibleId,
      responsible_profile_id: task.responsibleProfileId,
      estimated_hours: task.estimatedHours,
      status: 0,
    };
    ServicesTasks.createTask(updatedValue).then(() => {
      const withNewTask = [];
      withNewTask.push(...tasksData, updatedValue);
      setTasksData(withNewTask);
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
          <h5>People</h5>
        </div>
        <Button onClick={() => setModalIsOpen(true)}>Add People</Button>
      </SectionTitle>
      <TableBody>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr>
              <td>{person.name}</td>
              <td>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </TableBody>
      <ModalPerson
        title="New Person"
        description="Add task details"
        section="Responsible"
        modalOnSubmit={modalOnSubmit}
      />
    </>
  );
};

export default People;
