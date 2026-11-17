export interface IProjectCardGlobalProps {
  number: string;
  title: string;
  company: string;
  companyUrl?: string;
  /** Projeto pessoal: exibe só o nome, sem o rótulo "cliente". */
  personal?: boolean;
  /** Link do repositório público do projeto. */
  repoUrl?: string;
  /** Link da versão publicada do projeto. */
  liveUrl?: string;
  description: string;
  stack: string[];
}
