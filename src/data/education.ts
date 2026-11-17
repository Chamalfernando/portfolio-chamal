import type { Education } from '@/data/portfolio';
import { isVisible } from '@/data/visibility';
import educationData from '@/assets/education.json';

/** Education entries from src/assets/education.json that have isVisible: "true". */
export const getVisibleEducations = (): Education[] => (educationData as Education[]).filter(isVisible);
