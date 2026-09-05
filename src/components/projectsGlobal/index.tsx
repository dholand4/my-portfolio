import { useState } from 'react';
import { CompanyShowcaseGlobal } from '@/components/companyShowcaseGlobal';
import { ContainerGlobal } from '@/components/containerGlobal';
import { ProjectCardGlobal } from '@/components/projectCardGlobal';
import { RevealGlobal } from '@/components/revealGlobal';
import { SectionHeaderGlobal } from '@/components/sectionHeaderGlobal';
import { IProjectsGlobalProps } from './types';
import { ClearFilterLink, FilterStatus, Grid, Section } from './style';

export function ProjectsGlobal({ experiences, companies }: IProjectsGlobalProps) {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  const filteredExperiences = selectedCompany
    ? experiences.filter(
        (exp) => exp.company.toLowerCase() === selectedCompany.toLowerCase(),
      )
    : experiences;

  const handleSelectCompany = (companyName: string | null) => {
    setSelectedCompany((prev) => (prev === companyName ? null : companyName));
  };

  return (
    <Section id="projetos">
      <ContainerGlobal>
        <SectionHeaderGlobal
          label="02 — experiência profissional"
          title="Experiências Práticas."
        />
        <CompanyShowcaseGlobal
          companies={companies}
          selectedCompany={selectedCompany}
          onSelectCompany={handleSelectCompany}
          totalExperiencesCount={experiences.length}
        />
        {selectedCompany && (
          <FilterStatus>
            <span>
              Exibindo <strong>{filteredExperiences.length}</strong> projeto
              {filteredExperiences.length > 1 ? 's' : ''} em{' '}
              <strong>{selectedCompany}</strong>
            </span>
            <ClearFilterLink
              type="button"
              onClick={() => setSelectedCompany(null)}
              aria-label="Limpar filtro e ver todos os projetos"
            >
              Ver todos os {experiences.length} projetos ✕
            </ClearFilterLink>
          </FilterStatus>
        )}
        <Grid>
          {filteredExperiences.map((experience) => (
            <RevealGlobal key={experience.title} stretch>
              <ProjectCardGlobal {...experience} />
            </RevealGlobal>
          ))}
        </Grid>
      </ContainerGlobal>
    </Section>
  );
}
