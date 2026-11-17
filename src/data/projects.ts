import type { Project } from '@/data/portfolio';
import projectsData from '@/assets/projects.json';

// Every image in src/assets, keyed by file name -> bundled URL.
// projects.json refers to images by file name (e.g. "project-kindcoin.jpg").
const assetImages = import.meta.glob<string>('../assets/*.{jpg,jpeg,png,svg,webp}', {
  eager: true,
  import: 'default',
});
const imageByName: Record<string, string> = Object.fromEntries(
  Object.entries(assetImages).map(([path, url]) => [path.split('/').pop() as string, url])
);

const resolveImage = (name: string): string => {
  const url = imageByName[name];
  if (!url && name) console.warn(`[projects] Image "${name}" not found in src/assets`);
  return url ?? '';
};

/** Projects from src/assets/projects.json that have isVisible: "true", with image names resolved to URLs. */
export const getVisibleProjects = (): Project[] =>
  (projectsData as Project[])
    .filter((project) => String(project.isVisible).toLowerCase() === 'true')
    .map((project) => ({
      ...project,
      image: resolveImage(project.image),
      images: project.images?.map(resolveImage),
    }));
