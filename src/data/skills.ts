import type { Skill } from '@/data/portfolio';
import { isVisible } from '@/data/visibility';
import skillsData from '@/assets/skills.json';

/** Skills from src/assets/skills.json that have isVisible: "true". */
export const getVisibleSkills = (): Skill[] => (skillsData as Skill[]).filter(isVisible);
