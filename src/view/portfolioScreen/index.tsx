import { AboutGlobal } from '@/components/aboutGlobal';
import { ContactGlobal } from '@/components/contactGlobal';
import { FooterGlobal } from '@/components/footerGlobal';
import { HeroGlobal } from '@/components/heroGlobal';
import { NavGlobal } from '@/components/navGlobal';
import { ProjectsGlobal } from '@/components/projectsGlobal';
import { SkillsGlobal } from '@/components/skillsGlobal';
import { COMPANIES, EXPERIENCES } from '@/constants/experiences';
import { NAV_LINKS } from '@/constants/navLinks';
import { SKILL_GROUPS } from '@/constants/skills';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '@/constants/socials';
import { TYPER_PHRASES } from '@/constants/typerPhrases';
import { Main } from './style';

const ABOUT_PARAGRAPHS = [
  'Sou desenvolvedor full stack e construo aplicações de ponta a ponta, do banco de dados até o deploy. No frontend trabalho com React, Next.js e TypeScript; no backend com Node.js, PostgreSQL e Supabase; e cuido da infraestrutura com Docker, Nginx e Vercel.',
  'Meu foco é resolver problemas reais com automação. Já entreguei sistemas de gestão financeira para clínicas, automações de rotina no AVA da UniCatólica, como envio de mensagens nos fóruns e cadastro de tutorias, e um catálogo de delivery integrado ao WhatsApp. Boa parte do que faço nasce de uma necessidade concreta e vira uma ferramenta que economiza tempo.',
];

export function PortfolioScreen() {
  return (
    <>
      <NavGlobal links={NAV_LINKS} />
      <Main>
        <HeroGlobal
          name="Daniel Holanda"
          role="Desenvolvedor Full Stack."
          status="transformando ideias em produtos"
          phrases={TYPER_PHRASES}
          ctaHref="#projetos"
          ctaLabel="Ver meus projetos"
        />
        <AboutGlobal paragraphs={ABOUT_PARAGRAPHS} />
        <ProjectsGlobal experiences={EXPERIENCES} companies={COMPANIES} />
        <SkillsGlobal groups={SKILL_GROUPS} />
        <ContactGlobal email={CONTACT_EMAIL} socials={SOCIAL_LINKS} />
      </Main>
      <FooterGlobal text="// Daniel Holanda · 2026" />
    </>
  );
}
