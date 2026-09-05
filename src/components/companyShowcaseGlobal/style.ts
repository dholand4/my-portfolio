import styled from 'styled-components';

export const DockWrap = styled.div`
  margin: 0 0 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DockHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const DockLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.fgDim};
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const DockScrollContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  padding: 4px 2px 8px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-wrap: wrap;
  }
`;

export const PillButton = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  height: 42px;
  padding: 5px 14px 5px 8px;
  border-radius: 9999px;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.accentDim : theme.colors.bgElev};
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.accent : theme.colors.border};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.fg : theme.colors.fgMuted};
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all ${({ theme }) => theme.motion.fast};
  box-shadow: ${({ $active, theme }) =>
    $active
      ? `0 0 0 1px ${theme.colors.accent}, 0 4px 14px -4px ${theme.colors.accentDim}`
      : '0 2px 6px rgba(0, 0, 0, 0.2)'};

  &:hover {
    border-color: ${({ $active, theme }) =>
      $active ? theme.colors.accent : theme.colors.borderStrong};
    color: ${({ theme }) => theme.colors.fg};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.35);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`;

export const AllPillButton = styled(PillButton)`
  padding-left: 14px;
`;

export const MiniSquircle = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 7px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
  padding: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
`;

export const MiniLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

export const PillName = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 13px;
  font-weight: 600;
  color: inherit;
  letter-spacing: -0.01em;
`;

export const CountBadge = styled.span<{ $active?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 10.5px;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.accent : theme.colors.fgDim};
  background: ${({ $active }) =>
    $active ? 'rgba(0, 255, 170, 0.15)' : 'rgba(255, 255, 255, 0.05)'};
  padding: 2px 7px;
  border-radius: 9999px;
  line-height: 1.2;
`;

export const ExternalIconLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.fgDim};
  text-decoration: none;
  transition: all ${({ theme }) => theme.motion.fast};
  margin-left: -2px;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accentDim};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 1px;
  }
`;
