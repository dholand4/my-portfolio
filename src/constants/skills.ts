export interface ISkillGroup {
  title: string;
  tags: string[];
}

export const SKILL_GROUPS: ISkillGroup[] = [
  {
    title: 'Frontend',
    tags: [
      'React',
      'Next.js',
      'Vue 3',
      'TypeScript',
      'JavaScript',
      'Vite',
      'styled-components',
      'TailwindCSS',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'Backend',
    tags: [
      'Node.js',
      'Express',
      'TypeScript',
      'REST APIs',
      'PostgreSQL',
      'Supabase',
      'Prisma',
      'JWT',
      'Playwright',
    ],
  },
  {
    title: 'DevOps',
    tags: [
      'Docker',
      'Vercel',
      'Cloudflare',
      'Nginx',
      'VPS',
      'Git',
      'GitHub',
    ],
  },
];
