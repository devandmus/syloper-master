import React from 'react';
import { BsCardText } from 'react-icons/bs';
import { EditTextarea } from 'react-edit-text';
import { SectionTitle } from '../styles';
import { DescriptionTxt } from './styles';
import 'react-edit-text/dist/index.css';

const Description = ({ description }) => (
  <div>
    <SectionTitle>
      <i>
        <BsCardText />
      </i>
      <h5>Description</h5>
    </SectionTitle>
    <DescriptionTxt>
      <EditTextarea
        name="description"
        style={{ width: '200px' }}
        defaultValue={description}
        inline
      />
    </DescriptionTxt>
  </div>
);

export default Description;
