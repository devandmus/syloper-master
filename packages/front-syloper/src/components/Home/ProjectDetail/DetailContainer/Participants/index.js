import React from 'react';
import { FiUsers } from 'react-icons/fi';
import { SectionTitle } from '../styles';
import { ParticipantsList, ParticipantsImg } from './styles';
import Avatar from '../../../../UI/avatar';

const Participants = ({ responsibles }) => {
  const calcTranslate = (index) => {
    return `-${index * 2 * 10}`;
  };

  return (
    <div>
      <SectionTitle>
        <i>
          <FiUsers />
        </i>
        <h5>Participants</h5>
      </SectionTitle>
      <ParticipantsList>
        {responsibles.map((user, i) => (
          <Avatar
            key={user.email}
            responsible={user}
            translatex={calcTranslate(i)}
          />
        ))}
      </ParticipantsList>
    </div>
  );
};

export default Participants;
