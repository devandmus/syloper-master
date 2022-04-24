import React from 'react';
import StatusButtonStyle from './styles/StatusButtonStyle';

const StatusButton = ({ status, projectStatus }) => {
  const color = ['#FFC107', '#17A2B8', '#28A745'];
  console.log(projectStatus);

  return (
    <StatusButtonStyle color={color[status]}>{projectStatus}</StatusButtonStyle>
  );
};

export default StatusButton;
