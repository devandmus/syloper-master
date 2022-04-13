import React, { useState, useEffect } from 'react';
import { useQueryParam, StringParam } from 'use-query-params';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Home from '../Home';
import DetailContainer from './DetailContainer';
import ServicesProjects from '../../../services/ServicesProjects';

const ProjectDetail = () => {
  const [projectIdUrl] = useQueryParam('id', StringParam);
  const [projectData, setprojectData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const updateProject = (project) => {
    const updatedProject = {
      ...projectData,
      ...project,
    };

    ServicesProjects.updateProject(projectIdUrl, updatedProject);
  };

  useEffect(() => {
    ServicesProjects.getProjectDetail(projectIdUrl).then((data) => {
      setprojectData(data);
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
            cost={projectData.project_cost}
            projectDate={projectData.project_date}
            projectDueDate={projectData.project_due_date}
            projectStatus={projectData.project_status}
            projectId={projectIdUrl}
            updateProject={updateProject}
          />
        </DndProvider>
      )}
    </Home>
  );
};
export default ProjectDetail;
