import styled, { css } from 'styled-components';

export const Bar = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 18px 0;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition:
    background ${({ theme }) => theme.motion.base},
    border-color ${({ theme }) => theme.motion.base},
    backdrop-filter ${({ theme }) => theme.motion.base},
    padding ${({ theme }) => theme.motion.base};
  z-index: 60;

  ${({ $scrolled, theme }) =>
    $scrolled &&
    css`
      background: rgba(10, 10, 15, 0.75);
      backdrop-filter: blur(12px);
      border-bottom-color: ${theme.colors.border};
      padding: 12px 0;
    `}
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.02em;

  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const DesktopLinks = styled.ul`
  display: flex;
  gap: 28px;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const LinkAnchor = styled.a`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.fgMuted};
  transition: color ${({ theme }) => theme.motion.fast};

  &::before {
    content: '// ';
    color: ${({ theme }) => theme.colors.accent};
    opacity: 0.6;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.fg};
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  border-radius: ${({ theme }) => theme.radii.md}px;
  color: ${({ theme }) => theme.colors.fg};
  padding: 8px;
  cursor: pointer;
  transition: border-color ${({ theme }) => theme.motion.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Drawer = styled.aside<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 15, 0.96);
  backdrop-filter: blur(16px);
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
  z-index: 55;
  transform: translateX(100%);
  transition: transform ${({ theme }) => theme.motion.base};

  ${({ $open }) =>
    $open &&
    css`
      transform: translateX(0);
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: flex;
  }
`;

export const DrawerLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 22px;
  text-align: center;
`;

export const DrawerLinkAnchor = styled.a`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 22px;
  color: ${({ theme }) => theme.colors.fg};
  letter-spacing: -0.01em;
  transition: color ${({ theme }) => theme.motion.fast};

  &::before {
    content: '// ';
    color: ${({ theme }) => theme.colors.accent};
    opacity: 0.6;
  }

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
