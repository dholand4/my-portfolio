export interface IExperience {
  number: string;
  title: string;
  company: string;
  companyUrl?: string;
  personal?: boolean;
  repoUrl?: string;
  liveUrl?: string;
  description: string;
  stack: string[];
}

export const EXPERIENCES: IExperience[] = [
  {
    number: '/ 01',
    title: 'Arretado Score',
    liveUrl: 'https://arretadoscore.com',
    company: 'Liga Quixadaense de Basquete',
    description:
      'Aplicação web feita para ajudar as ligas amadoras do Sertão Central a organizar seus campeonatos (foco inicial em basquete). O admin configura fases e playoffs, cadastra times e jogadores, monta os dias de jogos e lança as súmulas; tabela, playoffs e rankings se atualizam sozinhos e o público acompanha tudo sem precisar de login.',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'TanStack Query',
      'styled-components',
      'Supabase',
      'PostgreSQL',
      'Edge Functions',
    ],
  },
  {
    number: '/ 02',
    title: 'DCast Player',
    repoUrl: 'https://github.com/dholand4/dcast-player',
    company: 'Projeto Autoral',
    personal: true,
    description:
      'Player de IPTV e streaming com TV ao vivo, filmes e séries a partir de listas Xtream Codes e M3U. Tem até 4 perfis por conta, favoritos, grade de programação (EPG) com replay, busca integrada e "Continuar Assistindo" sincronizado na nuvem, além de transmissão para Chromecast. Um único código roda no Android, no iOS, na Android TV e na Web.',
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'styled-components',
      'React Navigation',
      'Supabase',
      'Google Cast',
      'Android TV',
    ],
  },
  {
    number: '/ 03',
    title: 'Controle de Sessões',
    company: 'Sertão ABA',
    companyUrl: 'https://www.instagram.com/sertaoaba/',
    description:
      'Sistema para a clínica acompanhar, semana a semana, as sessões realizadas por paciente e por profissional, com saldo automático das autorizações (guias). Lançamento da semana inteira numa tela, previsão de quanto tempo o saldo dura, saldo por especialidade e alertas de débito, guia vencendo e sessões fora da vigência. Os cálculos ficam em views no banco, então o saldo está sempre correto. Funciona como app instalável (PWA).',
    stack: [
      'React',
      'Vite',
      'styled-components',
      'Supabase',
      'PostgreSQL',
      'PWA',
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
  {
    number: '/ 07',
    title: 'Conversor XML',
    repoUrl: 'https://github.com/dholand4/moodle-quiz-builder',
    company: 'Projeto Autoral',
    personal: true,
    description:
      'Ferramenta web para gerar arquivos XML compatíveis com o formato de importação de questionários do Moodle, eliminando a criação manual dos arquivos. Monte as questões numa interface simples e exporte um .xml pronto para importar na plataforma com um clique — roda inteiramente no navegador, sem backend.',
    stack: ['React', 'TypeScript', 'Vite', 'styled-components'],
  },
];
