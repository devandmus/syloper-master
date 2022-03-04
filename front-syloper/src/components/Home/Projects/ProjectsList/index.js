import React from 'react';
import { ProjectsGrid } from './styles';
import Project from './Project';

const projectsData = [
  {
    customer_id: '61ca2996422d3ada42b6f34a',
    customer_name: 'Pepsi', // new
    project_date: '2021-12-30T11:21:16.000Z',
    project_description: 'Esta es una descripcion de ejemplo',
    project_cost: 50750,
    project_responsable: 'Joel Sanchez',
    project_status_id: '61ca2081c22d3adae79cf34a',
    project_status_name: 'in progress',
    due_date: '2022-12-30T16:39:01.485Z',
    createdAt: '2021-12-30T16:39:01.485Z',
    updatedAt: '2021-12-30T16:39:01.485Z',
    id: '61cde0a5c9973bbc0ce7de9b',
    title: 'Este es un titulo de ejemplo', // new
  },
  {
    customer_id: '61ca2996422d3ada42b6f34a',
    customer_name: 'Pepsi', //new
    project_date: '2021-12-30T11:21:16.000Z',
    project_description: 'Esta es una descripcion de ejemplo',
    project_cost: 50750,
    project_responsable: 'Joel Sanchez',
    project_status_id: '61ca2081c22d3adae79cf34a',
    project_status_name: 'in progress',
    due_date: '2022-12-30T16:39:01.485Z',
    createdAt: '2021-12-30T16:39:01.485Z',
    updatedAt: '2021-12-30T16:39:01.485Z',
    id: '4gu7um8nvy98lt8vom9qvmgb',
    title: 'Este es un titulo de ejemplo',
  },
  {
    customer_id: '61ca2996422d3ada42b6f34a',
    customer_name: 'Pepsi', //new
    project_date: '2021-12-30T11:21:16.000Z',
    project_description: 'Esta es una descripcion de ejemplo',
    project_cost: 50750,
    project_responsable: 'Joel Sanchez',
    project_status_id: '61ca2081c22d3adae79cf34a',
    project_status_name: 'in progress',
    due_date: '2022-12-30T16:39:01.485Z',
    createdAt: '2021-12-30T16:39:01.485Z',
    updatedAt: '2021-12-30T16:39:01.485Z',
    id: 'lmx8a1ozzwrvxir4yr8wtr5f',
    title: 'Este es un titulo de ejemplo',
  },
  {
    customer_id: '61ca2996422d3ada42b6f34a',
    customer_name: 'Pepsi', //new
    project_date: '2021-12-30T11:21:16.000Z',
    project_description: 'Esta es una descripcion de ejemplo',
    project_cost: 50750,
    project_responsable: 'Joel Sanchez',
    project_status_id: '61ca2081c22d3adae79cf34a',
    project_status_name: 'in progress',
    due_date: '2022-12-30T16:39:01.485Z',
    createdAt: '2021-12-30T16:39:01.485Z',
    updatedAt: '2021-12-30T16:39:01.485Z',
    id: 'ykpk3aubpzcf6a5e9i5sqk84',
    title: 'Este es un titulo de ejemplo',
  },
];

const ProjectsList = () => (
  <ProjectsGrid>
    {projectsData.map((project, index) => (
      <Project
        key={index}
        customerId={project.customer_id}
        customerName={project.customer_name}
        description={project.project_description}
        cost={project.project_cost}
        responsable={project.project_responsable}
        statusId={project.project_status_id}
        statusName={project.project_status_name}
        dueDate={project.due_date}
        createdAt={project.createdAt}
        updatedAt={project.updatedAt}
        id={project.id}
        title={project.title}
      />
    ))}
  </ProjectsGrid>
);

export default ProjectsList;
