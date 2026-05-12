export interface IProject {
  number: string;
  title: string;
  description: string;
  stack: string[];
  repoUrl: string;
  demoUrl?: string;
}

export const PROJECTS: IProject[] = [
  {
    number: '/ 01',
    title: 'NoCode Exporter',
    description:
      'Ferramenta para exportar o código de projetos do Base44 diretamente para o seu computador — sem precisar editar código, via interface web local.',
    stack: ['Node.js', 'Playwright'],
    repoUrl: 'https://github.com/dholand4/nocode-exporter',
  },
  {
    number: '/ 02',
    title: 'Sweet Orders',
    description:
      'Sistema de pedidos online para confeitarias — cliente monta o pedido pelo app, admin acompanha pelo painel e confirma pelo WhatsApp com mensagem pronta.',
    stack: ['Next.js', 'styled-components', 'Supabase', 'TypeScript'],
    repoUrl: 'https://github.com/dholand4/sweet-orders',
  },
  {
    number: '/ 03',
    title: 'Bulk Whats',
    description:
      'Painel self-hosted para disparos em massa via WhatsApp Web. Gerencia contatos, monta campanhas com placeholders dinâmicos, envia ou agenda — sem APIs pagas.',
    stack: ['Docker', 'Node.js', 'PostgreSQL', 'React', 'TypeScript'],
    repoUrl: 'https://github.com/dholand4/zap-campaign',
  },
  {
    number: '/ 04',
    title: 'Fatura Split',
    description:
      'Importa a fatura do cartão Itaú em PDF, lista os lançamentos e divide cada despesa entre várias pessoas — sem backend, sem cadastro, 100% no navegador.',
    stack: ['React', 'Tailwind', 'TypeScript', 'Vite', 'Vitest'],
    repoUrl: 'https://github.com/dholand4/fatura-split',
    demoUrl: 'https://fatura-split.vercel.app',
  },
  {
    number: '/ 05',
    title: 'Moodle Quiz Generator',
    description:
      'Ferramenta web para gerar arquivos XML compatíveis com o formato de importação de questionários do Moodle, eliminando a criação manual dos arquivos.',
    stack: ['React', 'styled-components', 'TypeScript', 'Vite'],
    repoUrl: 'https://github.com/dholand4/moodle-quiz-builder',
  },
  {
    number: '/ 06',
    title: 'Expense Home',
    description:
      'Aplicação full-stack de gestão financeira pessoal com controle de despesas, cartões, boletos, parcelamentos e dívidas, além de suporte multiusuário com sistema de convites.',
    stack: [
      'Express',
      'JWT',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'React',
      'TailwindCSS',
      'Vite',
    ],
    repoUrl: 'https://github.com/dholand4/expense-home',
  },

];