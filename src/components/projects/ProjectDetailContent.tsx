import React from 'react';
import { Project } from '@/data/portfolio';
import SkillsparqDetails from './SkillsparqDetails';
import KindcoinDetails from './KindcoinDetails';
import BiomarkDetails from './BiomarkDetails';
import EcommerceDetails from './EcommerceDetails';
import EfinancialsDetails from './EfinancialsDetails';
import DefaultProjectDetails from './DefaultProjectDetails';

interface ProjectDetailContentProps {
  project: Project;
}

// Map slugs to their respective custom components
const projectComponents: Record<string, React.ComponentType<{ project: Project }>> = {
  'skillsparq': SkillsparqDetails,
  'kindcoin': KindcoinDetails,
  'biomark': BiomarkDetails,
  'ecommerce': EcommerceDetails,
  'efinancials': EfinancialsDetails,
};

const ProjectDetailContent: React.FC<ProjectDetailContentProps> = ({ project }) => {
  // Get the custom component for this project, or use default
  const ProjectComponent = projectComponents[project.slug] || DefaultProjectDetails;
  
  return <ProjectComponent project={project} />;
};

export default ProjectDetailContent;
