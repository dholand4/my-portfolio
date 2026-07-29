import { RevealGlobal } from '@/components/revealGlobal';
import { ISectionHeaderGlobalProps } from './types';
import { Label, Title } from './style';

export function SectionHeaderGlobal({
  label,
  title,
  centered = false,
}: ISectionHeaderGlobalProps) {
  return (
    <>
      <RevealGlobal>
        <Label $centered={centered}>{label}</Label>
      </RevealGlobal>
      {title && (
        <RevealGlobal>
          <Title>{title}</Title>
        </RevealGlobal>
      )}
    </>
  );
}
