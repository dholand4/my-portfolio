import { ButtonGlobal } from '@/components/buttonGlobal';
import { ContainerGlobal } from '@/components/containerGlobal';
import { TyperGlobal } from '@/components/typerGlobal';
import { IHeroGlobalProps } from './types';
import { Dot, Header, Headline, Meta, Role } from './style';

export function HeroGlobal({
  name,
  role,
  status,
  phrases,
  ctaHref,
  ctaLabel,
}: IHeroGlobalProps) {
  return (
    <Header id="top">
      <ContainerGlobal>
        <Meta>
          <Dot aria-hidden="true" />
          {status}
        </Meta>
        <Headline>
          {name}
          <br />
          <Role>{role}</Role>
        </Headline>
        <TyperGlobal phrases={phrases} />
        <ButtonGlobal href={ctaHref}>{ctaLabel}</ButtonGlobal>
      </ContainerGlobal>
    </Header>
  );
}
