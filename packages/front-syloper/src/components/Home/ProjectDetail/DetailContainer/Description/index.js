import React, { useState } from 'react';
import { BsCardText } from 'react-icons/bs';
import { EditTextarea } from 'react-edit-text';
import { useTheme } from 'styled-components';
import { SectionTitle } from '../../../../Common/styles';
import { DescriptionTxt } from './styles';
import 'react-edit-text/dist/index.css';

const Description = ({ projectDescription, updateProject }) => {
  const theme = useTheme();

  const handleOnSave = ({ value, previousValue }) => {
    if (value !== previousValue) {
      updateProject({ project_description: value });
    }
  };

  const [description, setDescription] = useState(projectDescription);

  return (
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
          onSave={handleOnSave}
          onChange={setDescription}
          value={description}
          style={{
            width: '100%',
            fontWeight: 300,
            fontSize: '1.08rem',
            lineHeight: 1.35,
            fontFamily: theme.font.family,
          }}
          inline
        />
      </DescriptionTxt>
    </div>
  );
};

export default Description;
