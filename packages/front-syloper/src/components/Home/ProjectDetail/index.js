/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { useQueryParam, StringParam } from 'use-query-params';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Home from '../Home';
import DetailContainer from './DetailContainer';
import ServicesProjects from '../../../services/ServicesProjects';
import ServicesBff from '../../../services/BFF';

const ProjectDetail = () => {
  const [projectIdUrl] = useQueryParam('id', StringParam);
  const [projectData, setprojectData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [projectContext, setProjectContext] = useState({});

  const updateProject = (project) => {
    const updatedProject = {
      ...projectData,
      ...project,
    };

    ServicesProjects.updateProject(projectIdUrl, updatedProject);
  };

  useEffect(() => {
    ServicesBff.getProject(projectIdUrl).then((data) => {
      const {
        customer_id,
        progress,
        project_date,
        project_description,
        project_due_date,
        project_status,
        project_title,
        tasks_left,
        tasks,
        responsibles,
        id,
      } = data;

      setprojectData({
        customer_id,
        project_title,
        project_description,
        project_date,
        project_due_date,
        id,
        project_status,
      });

      setProjectContext({
        progress,
        project_status,
        tasks_left,
        tasks,
        responsibles,
      });

      setIsLoading(false);
    });
  }, [projectIdUrl]);

  return (
    <Home title="Project Detail">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <DndProvider backend={HTML5Backend}>
          <DetailContainer
            customerId={projectData.customer_id}
            projectTitle={projectData.project_title}
            projectDescription={projectData.project_description}
            projectDate={projectData.project_date}
            projectDueDate={projectData.project_due_date}
            projectId={projectData.id}
            projectContext={projectContext}
            updateProject={updateProject}
          />
        </DndProvider>
      )}
    </Home>
  );
};
export default ProjectDetail;
