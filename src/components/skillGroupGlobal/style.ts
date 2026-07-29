import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl}px;
  padding: 28px;
  height: 100%;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  transition: border-color ${({ theme }) => theme.motion.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderStrong};
  }
`;

export const Heading = styled.h3`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 18px;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
