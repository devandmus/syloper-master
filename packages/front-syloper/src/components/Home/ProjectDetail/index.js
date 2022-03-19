import React, { useState, useEffect } from 'react';
import { useQueryParam, StringParam } from 'use-query-params';
import Home from '../Home';
import DetailContainer from './DetailContainer';
import ServicesProjects from '../../../services/ServicesProjects';

const ProjectDetail = () => {
  const [projectIdUrl] = useQueryParam('id', StringParam);
  const [projectData, setprojectData] = useState({});

  useEffect(() => {
    ServicesProjects.getProjectDetail(projectIdUrl).then((data) => {
      console.log(data);
      setprojectData(data);
    });
  }, [projectIdUrl]);
  return (
    <Home title="Project Detail">
      <DetailContainer
        customerId={projectData.customer_id}
        projectTitle={projectData.project_title}
        projectDescription={projectData.project_description}
        cost={projectData.project_cost}
        projectDate={projectData.project_date}
        projectDueDate={projectData.project_due_date}
        projectId={projectIdUrl}
      />
    </Home>
  );
};
export default ProjectDetail;
