import styled from 'styled-components';

export const Section = styled.section`
  padding: 120px 0;
  position: relative;
`;

export const Paragraph = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  color: ${({ theme }) => theme.colors.fg};
  max-width: 720px;
  margin-bottom: 18px;
  line-height: 1.5;

  & + & {
    color: ${({ theme }) => theme.colors.fgMuted};
  }
`;
