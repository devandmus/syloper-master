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
    <Home title="Projects">
      <DetailContainer
        customerId={projectData.customer_id}
        projectDescription={projectData.project_description}
        cost={projectData.project_cost}
        projectDate={projectData.project_date}
        projectId={projectData.id}
      />
    </Home>
  );
};
export default ProjectDetail;
