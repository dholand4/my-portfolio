import { ContainerGlobal } from '@/components/containerGlobal';
import { ProjectCardGlobal } from '@/components/projectCardGlobal';
import { RevealGlobal } from '@/components/revealGlobal';
import { SectionHeaderGlobal } from '@/components/sectionHeaderGlobal';
import { IProjectsGlobalProps } from './types';
import { Grid, Section } from './style';

export function ProjectsGlobal({ projects }: IProjectsGlobalProps) {
  return (
    <Section id="projetos">
      <ContainerGlobal>
        <SectionHeaderGlobal
          label="03 — projetos selecionados"
          title="Coisas que construí."
        />
        <Grid>
          {projects.map((project) => (
            <RevealGlobal key={project.title} stretch>
              <ProjectCardGlobal {...project} />
            </RevealGlobal>
          ))}
        </Grid>
      </ContainerGlobal>
    </Section>
  );
}
