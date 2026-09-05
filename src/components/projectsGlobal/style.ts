import styled from 'styled-components';

export const Section = styled.section`
  padding: 60px 0;
  position: relative;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  align-items: stretch;
  gap: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const FilterStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 255, 170, 0.05);
  border: 1px solid rgba(0, 255, 170, 0.2);
  border-radius: ${({ theme }) => theme.radii.lg}px;
  padding: 12px 18px;
  margin: -16px 0 28px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.fg};

  strong {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const ClearFilterLink = styled.button`
  background: transparent;
  border: none;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: underline;
  text-underline-offset: 3px;
  padding: 0;
  transition: color ${({ theme }) => theme.motion.fast};

  &:hover {
    color: #ffffff;
  }
`;

