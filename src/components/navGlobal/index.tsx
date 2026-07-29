import { useCallback, useEffect, useState } from 'react';
import { ContainerGlobal } from '@/components/containerGlobal';
import { IconGlobal } from '@/components/iconGlobal';
import { useNavScroll } from '@/hooks/useNavScroll';
import { INavGlobalProps } from './types';
import {
  Bar,
  DesktopLinks,
  Drawer,
  DrawerLinkAnchor,
  DrawerLinks,
  HamburgerButton,
  Inner,
  LinkAnchor,
  Logo,
} from './style';

const DRAWER_ID = 'nav-mobile-drawer';

export function NavGlobal({ links }: INavGlobalProps) {
  const scrolled = useNavScroll();
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  return (
    <>
      <Bar $scrolled={scrolled} aria-label="Primary">
        <ContainerGlobal>
          <Inner>
            <Logo href="#top" aria-label="Início" onClick={close}>
              ~/<span>danielholanda</span>
            </Logo>
            <DesktopLinks>
              {links.map((link) => (
                <li key={link.href}>
                  <LinkAnchor href={link.href}>{link.label}</LinkAnchor>
                </li>
              ))}
            </DesktopLinks>
            <HamburgerButton
              type="button"
              onClick={toggle}
              aria-expanded={open}
              aria-controls={DRAWER_ID}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            >
              <IconGlobal name={open ? 'close' : 'menu'} size={22} aria-hidden />
            </HamburgerButton>
          </Inner>
        </ContainerGlobal>
      </Bar>
      <Drawer
        id={DRAWER_ID}
        $open={open}
        aria-hidden={!open}
        aria-label="Menu mobile"
      >
        <DrawerLinks>
          {links.map((link) => (
            <li key={link.href}>
              <DrawerLinkAnchor
                href={link.href}
                tabIndex={open ? 0 : -1}
                onClick={close}
              >
                {link.label}
              </DrawerLinkAnchor>
            </li>
          ))}
        </DrawerLinks>
      </Drawer>
    </>
  );
}
