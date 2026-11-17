import type { WorkExperience } from '@/data/portfolio';
import { isVisible } from '@/data/visibility';
import experienceData from '@/assets/experience.json';

/** Work experiences from src/assets/experience.json that have isVisible: "true". */
export const getVisibleWorkExperiences = (): WorkExperience[] =>
  (experienceData as WorkExperience[]).filter(isVisible);
