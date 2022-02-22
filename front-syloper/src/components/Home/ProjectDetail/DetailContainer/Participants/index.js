import React from 'react';
import { SectionTitle } from '../styles';
import { ParticipantsList, ParticipantsImg } from './styles';
import { FiUsers } from 'react-icons/fi'
import { HiPlus } from 'react-icons/hi'

const Participants = () => {
  const users = ["user1", "user2", "user3", "user4"];

  const calcTranslate = (index) => {
    return `-${index * 2 * 10}`
  }

  return (
    <div>
      <SectionTitle>
        <i><FiUsers /></i>
        <h5>Participants</h5>
      </SectionTitle>
      <ParticipantsList>
        {
          users.map((
            user,
            i
          ) => {
            return <ParticipantsImg key={i}
                                    translatex={calcTranslate(i)}></ParticipantsImg>
          })
        }
        <ParticipantsImg translatex="-80">
          <i><HiPlus color="#fff" /></i>
        </ParticipantsImg>
      </ParticipantsList>
    </div>
  );
}

export default Participants;
