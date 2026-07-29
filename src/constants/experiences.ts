import dadudim from '@/assets/empresas/dadudim.png';
import sertaoAba from '@/assets/empresas/sertaoaba.png';
import unicatolica from '@/assets/empresas/unicatolica.webp';

export interface IExperience {
  number: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  stack: string[];
}

export interface ICompany {
  name: string;
  /** Caminho da imagem do logo (ex.: importada de src/assets/companies). Fica pronto pra receber as imagens depois. */
  logo?: string;
  url?: string;
}

export const EXPERIENCES: IExperience[] = [
  {
    number: '/ 01',
    title: 'Moodle Mensagens',
    company: 'UniCatólica Quixadá',
    companyUrl: 'https://unicatolicaquixada.edu.br/',
    description:
      'Aplicação web full-stack para automatizar o envio de mensagens nos fóruns do AVA da UniCatólica: crie templates reutilizáveis com variáveis dinâmicas ({{aula}}, {{data}}, {{disciplina}}...), agende a visibilidade por data e dispare para uma ou todas as disciplinas de uma vez. Inclui recorrência semanal (agenda um semestre inteiro num clique), editor de texto rico, histórico com logs em tempo real e automação do Moodle via Playwright — sem abrir o AVA manualmente.',
    stack: [
      'React',
      'Vite',
      'TypeScript',
      'Node.js',
      'Express',
      'Playwright',
      'styled-components',
      'TipTap',
    ],
  },
  {
    number: '/ 02',
    title: 'Conversor XML',
    company: 'UniCatólica Quixadá',
    companyUrl: 'https://unicatolicaquixada.edu.br/',
    description:
      'Ferramenta web para gerar arquivos XML compatíveis com o formato de importação de questionários do Moodle, eliminando a criação manual dos arquivos. Monte as questões numa interface simples e exporte um .xml pronto para importar na plataforma com um clique — roda inteiramente no navegador, sem backend.',
    stack: ['React', 'TypeScript', 'Vite', 'styled-components'],
  },
  {
    number: '/ 03',
    title: 'Automação de Tutorias',
    company: 'UniCatólica Quixadá',
    companyUrl: 'https://unicatolicaquixada.edu.br/',
    description:
      'Agente de automação para o cadastro semanal de atividades de tutoria no AVA da UniCatólica: define-se o período e as atividades numa planilha do Google Sheets, e o bot faz login, calcula as datas semanais e preenche todos os formulários automaticamente — com verificação de duplicidade, modo teste, sessão persistente e screenshots de erro. Inclui um bot do Telegram (via Cloudflare Worker) para adicionar atividades extras direto pelo celular.',
    stack: [
      'Node.js',
      'Playwright',
      'Google Sheets API',
      'Google Apps Script',
      'Telegram Bot API',
      'Cloudflare Workers',
    ],
  },
  {
    number: '/ 04',
    title: 'Produção Clínica',
    company: 'Sertão ABA',
    companyUrl: 'https://www.instagram.com/sertaoaba/',
    description:
      'Sistema web para importar demonstrativos em PDF, calcular o valor líquido das sessões e distribuir os repasses entre profissionais e clínica. Cobre o fluxo completo de fechamento: importação, despesas, rateio por profissional, repasses e relatório consolidado.',
    stack: [
      'Java 21',
      'Spring Boot',
      'Spring Security',
      'PostgreSQL',
      'PDFBox',
      'Vue 3',
      'Vuetify',
      'TypeScript',
    ],
  },
  {
    number: '/ 05',
    title: 'Livro Caixa',
    company: 'Sertão ABA',
    companyUrl: 'https://www.instagram.com/sertaoaba/',
    description:
      'Sistema de livro-caixa da clínica: registra atendimentos por profissional e paciente, organiza os lançamentos em abas mensais e calcula automaticamente o rateio entre clínica e profissional. Tem login por perfil, consulta de registros e geração de relatórios em PDF por profissional/mês. Interface web em React integrada à planilha Google como base de dados.',
    stack: [
      'React',
      'TypeScript',
      'Google Sheets API',
      'Google Apps Script',
      'Google Drive API',
    ],
  },
  {
    number: '/ 06',
    title: 'Catálogo Delivery',
    company: 'Dadudim',
    companyUrl: 'https://www.instagram.com/dadudim.qxd/',
    description:
      'App web de catálogo digital com carrinho que não processa pagamento: ao finalizar, monta uma mensagem formatada e leva o cliente para o WhatsApp da loja. Tem painel admin próprio para gerenciar produtos (simples, com variações e "monte a caixa"), categorias, cupons de desconto, formas de pagamento, horários de funcionamento e acompanhar o faturamento. Banco no Supabase (PostgreSQL) e deploy gratuito na Vercel.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vercel'],
  },
];

export const COMPANIES: ICompany[] = [
  {
    name: 'Sertão ABA',
    logo: sertaoAba,
    url: 'https://www.instagram.com/sertaoaba/',
  },
  {
    name: 'UniCatólica Quixadá',
    logo: unicatolica,
    url: 'https://unicatolicaquixada.edu.br/',
  },
  {
    name: 'Dadudim',
    logo: dadudim,
    url: 'https://www.instagram.com/dadudim.qxd/',
  },
];
