import React from 'react';
import { useTheme } from 'styled-components';
import StatusButtonStyle from './styles/StatusButtonStyle';

const StatusButton = ({ status }) => {
  const theme = useTheme();
  const color = [
    `${theme.color.chartOrange}`,
    `${theme.color.chartYellow}`,
    `${theme.color.chartGreen}`,
  ];
  if (typeof status === 'number') {
    const projectStatus = ['To do', 'Doing', 'Done'];
    return (
      <StatusButtonStyle color={color[status]}>
        {projectStatus[status]}
      </StatusButtonStyle>
    );
  }

  let i = 0;

  switch (status) {
    case 'Ready to Start':
      i = 0;
      break;
    case 'In progress':
      i = 1;
      break;
    case 'Completed':
      i = 2;
      break;
  }

  return <StatusButtonStyle color={color[i]}>{status}</StatusButtonStyle>;
};

export default StatusButton;
