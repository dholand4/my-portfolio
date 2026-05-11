import { ContainerGlobal } from '@/components/containerGlobal';
import { RevealGlobal } from '@/components/revealGlobal';
import { SectionHeaderGlobal } from '@/components/sectionHeaderGlobal';
import { IAboutGlobalProps } from './types';
import { Paragraph, Section } from './style';

export function AboutGlobal({ paragraphs }: IAboutGlobalProps) {
  return (
    <Section id="sobre">
      <ContainerGlobal>
        <SectionHeaderGlobal label="01 — sobre" title="Engenheiro que entrega." />
        {paragraphs.map((text, index) => (
          <RevealGlobal key={index}>
            <Paragraph>{text}</Paragraph>
          </RevealGlobal>
        ))}
      </ContainerGlobal>
    </Section>
  );
}
