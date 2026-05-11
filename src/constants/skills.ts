export interface ISkillGroup {
  title: string;
  tags: string[];
}

export const SKILL_GROUPS: ISkillGroup[] = [
  {
    title: 'Frontend',
    tags: ['React', 'Next.js', 'TypeScript', 'Vite', 'styled-components', 'TailwindCSS'],
  },
  {
    title: 'Backend',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Playwright'],
  },
  {
    title: 'DevOps',
    tags: ['Docker', 'Vercel', 'GitHub', 'Nginx', 'VPS'],
  },
];
