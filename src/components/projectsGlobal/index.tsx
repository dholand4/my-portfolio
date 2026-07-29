import { CompanyCarouselGlobal } from '@/components/companyCarouselGlobal';
import { ContainerGlobal } from '@/components/containerGlobal';
import { ProjectCardGlobal } from '@/components/projectCardGlobal';
import { RevealGlobal } from '@/components/revealGlobal';
import { SectionHeaderGlobal } from '@/components/sectionHeaderGlobal';
import { IProjectsGlobalProps } from './types';
import { Grid, Section } from './style';

export function ProjectsGlobal({ experiences, companies }: IProjectsGlobalProps) {
  return (
    <Section id="projetos">
      <ContainerGlobal>
        <SectionHeaderGlobal
          label="02 — experiência profissional"
          title="Experiências Práticas."
        />
        <CompanyCarouselGlobal companies={companies} />
        <Grid>
          {experiences.map((experience) => (
            <RevealGlobal key={experience.title} stretch>
              <ProjectCardGlobal {...experience} />
            </RevealGlobal>
          ))}
        </Grid>
      </ContainerGlobal>
    </Section>
  );
}
