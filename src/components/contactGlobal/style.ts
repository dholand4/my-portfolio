import styled from 'styled-components';

export const Section = styled.section`
  padding: 120px 0 80px;
  text-align: center;
  position: relative;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 800;
  font-size: clamp(2rem, 6vw, 3.5rem);
  letter-spacing: -0.04em;
  line-height: 1;
  margin-bottom: 24px;

  span.accent {
    color: ${({ theme }) => theme.colors.accent};
    font-style: italic;
    font-weight: 500;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.fgMuted};
  max-width: 520px;
  margin: 0 auto 40px;
  font-size: 1.05rem;
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 40px;
`;
