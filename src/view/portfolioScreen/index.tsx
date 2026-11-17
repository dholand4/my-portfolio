import { AboutGlobal } from '@/components/aboutGlobal';
import { ContactGlobal } from '@/components/contactGlobal';
import { FooterGlobal } from '@/components/footerGlobal';
import { HeroGlobal } from '@/components/heroGlobal';
import { NavGlobal } from '@/components/navGlobal';
import { ProjectsGlobal } from '@/components/projectsGlobal';
import { SkillsGlobal } from '@/components/skillsGlobal';
import { EXPERIENCES } from '@/constants/experiences';
import { NAV_LINKS } from '@/constants/navLinks';
import { SKILL_GROUPS } from '@/constants/skills';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '@/constants/socials';
import { TYPER_PHRASES } from '@/constants/typerPhrases';
import { Main } from './style';

const ABOUT_PARAGRAPHS = [
  'Sou desenvolvedor full stack e atualmente trabalho como desenvolvedor na UniCatólica Quixadá. Construo aplicações de ponta a ponta, do banco de dados até o deploy: no frontend com React, Next.js e TypeScript; no backend com Node.js, Java com Spring Boot, PostgreSQL e Supabase; no mobile com React Native e Expo; e publico em Vercel, Cloudflare e VPS.',
  'Meu foco é resolver problemas reais: boa parte do que faço nasce de uma necessidade concreta e vira uma ferramenta que economiza tempo. Já construí sistemas de gestão para clínicas, um catálogo de delivery integrado ao WhatsApp, um player de IPTV multiplataforma e uma plataforma de campeonatos para a Liga Quixadaense de Basquete.',
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
        <ProjectsGlobal experiences={EXPERIENCES} />
        <SkillsGlobal groups={SKILL_GROUPS} />
        <ContactGlobal email={CONTACT_EMAIL} socials={SOCIAL_LINKS} />
      </Main>
      <FooterGlobal text="// Daniel Holanda · 2026" />
    </>
  );
}
