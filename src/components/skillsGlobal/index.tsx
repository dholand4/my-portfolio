import { ContainerGlobal } from '@/components/containerGlobal';
import { RevealGlobal } from '@/components/revealGlobal';
import { SectionHeaderGlobal } from '@/components/sectionHeaderGlobal';
import { SkillGroupGlobal } from '@/components/skillGroupGlobal';
import { ISkillsGlobalProps } from './types';
import { Grid, Section } from './style';

export function SkillsGlobal({ groups }: ISkillsGlobalProps) {
  return (
    <Section id="skills">
      <ContainerGlobal>
        <SectionHeaderGlobal label="02 — stack" title="Ferramentas do ofício." />
        <Grid>
          {groups.map((group) => (
            <RevealGlobal key={group.title} stretch>
              <SkillGroupGlobal title={group.title} tags={group.tags} />
            </RevealGlobal>
          ))}
        </Grid>
      </ContainerGlobal>
    </Section>
  );
}
