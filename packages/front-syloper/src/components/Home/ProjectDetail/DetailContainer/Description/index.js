import React from 'react';
import { BsCardText } from 'react-icons/bs';
import { SectionTitle } from '../styles';
import { DescriptionTxt } from './styles';

const Description = ({ description }) => (
  <div>
    <SectionTitle>
      <i>
        <BsCardText />
      </i>
      <h5>Description</h5>
    </SectionTitle>
    <DescriptionTxt>{description}</DescriptionTxt>
  </div>
);

export default Description;
