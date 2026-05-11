import { ContainerGlobal } from '@/components/containerGlobal';
import { useNavScroll } from '@/hooks/useNavScroll';
import { INavGlobalProps } from './types';
import { Bar, Inner, LinkAnchor, Links, Logo } from './style';

export function NavGlobal({ links }: INavGlobalProps) {
  const scrolled = useNavScroll();

  return (
    <Bar $scrolled={scrolled} aria-label="Primary">
      <ContainerGlobal>
        <Inner>
          <Logo href="#top" aria-label="Início">
            ~/<span>danielholanda</span>
          </Logo>
          <Links>
            {links.map((link) => (
              <li key={link.href}>
                <LinkAnchor href={link.href}>{link.label}</LinkAnchor>
              </li>
            ))}
          </Links>
        </Inner>
      </ContainerGlobal>
    </Bar>
  );
}
