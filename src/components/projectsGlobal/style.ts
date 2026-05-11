import styled from 'styled-components';

export const Section = styled.section`
  padding: 120px 0;
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
