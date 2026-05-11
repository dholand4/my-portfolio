import { AboutGlobal } from '@/components/aboutGlobal';
import { ContactGlobal } from '@/components/contactGlobal';
import { FooterGlobal } from '@/components/footerGlobal';
import { HeroGlobal } from '@/components/heroGlobal';
import { NavGlobal } from '@/components/navGlobal';
import { ProjectsGlobal } from '@/components/projectsGlobal';
import { SkillsGlobal } from '@/components/skillsGlobal';
import { NAV_LINKS } from '@/constants/navLinks';
import { PROJECTS } from '@/constants/projects';
import { SKILL_GROUPS } from '@/constants/skills';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '@/constants/socials';
import { TYPER_PHRASES } from '@/constants/typerPhrases';
import { Main } from './style';

const ABOUT_PARAGRAPHS = [
  'Projeto e construo sistemas de produção de ponta a ponta — do schema do banco a interfaces ajustadas no pixel.',
  'Cinco anos na estrada. Opiniões fortes, defendidas com leveza. Prefiro deletar código a escrever.',
];

export function PortfolioScreen() {
  return (
    <>
      <NavGlobal links={NAV_LINKS} />
      <Main>
        <HeroGlobal
          name="Daniel Holanda"
          role="Desenvolvedor Full Stack."
          status="disponível para trabalhar"
          phrases={TYPER_PHRASES}
          ctaHref="#projetos"
          ctaLabel="Ver meus projetos"
        />
        <AboutGlobal paragraphs={ABOUT_PARAGRAPHS} />
        <SkillsGlobal groups={SKILL_GROUPS} />
        <ProjectsGlobal projects={PROJECTS} />
        <ContactGlobal email={CONTACT_EMAIL} socials={SOCIAL_LINKS} />
      </Main>
      <FooterGlobal text="// feito com cuidado · Daniel Holanda · 2026" />
    </>
  );
}
