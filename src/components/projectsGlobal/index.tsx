import { ContainerGlobal } from '@/components/containerGlobal';
import { ProjectCardGlobal } from '@/components/projectCardGlobal';
import { RevealGlobal } from '@/components/revealGlobal';
import { SectionHeaderGlobal } from '@/components/sectionHeaderGlobal';
import { IProjectsGlobalProps } from './types';
import { Grid, Section } from './style';

export function ProjectsGlobal({ experiences }: IProjectsGlobalProps) {
  return (
    <Section id="projetos">
      <ContainerGlobal>
        <SectionHeaderGlobal label="02 — projetos" title="O que já construí." />
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
