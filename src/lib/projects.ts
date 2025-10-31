import {ProjectId, type Project} from './types';

export const PROJECT_LIST: Record<ProjectId, Project> = {
  [ProjectId.ProjectOne]: {
    alt: 'GitHub Lite',
    description: 'Lightweight GitHub profile viewer.',
    name: 'GitHub Lite',
    url: 'https://react-github1.netlify.app/',
    id: ProjectId.ProjectOne,
  },
  [ProjectId.ProjectTwo]: {
    alt: 'Gitlytics',
    description: 'GitHub analytics and insights.',
    name: 'Gitlytics',
    url: 'https://gitlytics.com/about',
    id: ProjectId.ProjectTwo,
  },
  [ProjectId.ProjectThree]: {
    alt: 'Project One',
    description: 'Placeholder for project one',
    name: 'Project Three',
    url: '#',
    id: ProjectId.ProjectThree,
  },
  [ProjectId.ProjectFour]: {
    alt: 'Project One',
    description: 'Placeholder for project one',
    name: 'Project Four',
    url: '#',
    id: ProjectId.ProjectFour,
  },
} as const;
