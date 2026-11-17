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
      'Vuetify',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'Backend',
    tags: [
      'Node.js',
      'Express',
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'Supabase',
      'Prisma',
      'REST APIs',
      'JWT',
      'Playwright',
    ],
  },
  {
    title: 'Mobile',
    tags: ['React Native', 'Expo', 'React Navigation', 'PWA', 'Android TV'],
  },
  {
    title: 'Deploy & Ferramentas',
    tags: [
      'Vercel',
      'Cloudflare Workers',
      'VPS',
      'Caddy',
      'Git',
      'GitHub',
      'Vitest',
      'Jest',
    ],
  },
];
