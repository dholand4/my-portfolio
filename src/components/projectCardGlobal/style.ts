import styled from 'styled-components';

export const Card = styled.article`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl}px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 320px;
  transition:
    transform ${({ theme }) => theme.motion.base},
    border-color ${({ theme }) => theme.motion.base},
    box-shadow ${({ theme }) => theme.motion.base};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      600px circle at var(--mx, 50%) var(--my, 0%),
      ${({ theme }) => theme.colors.accentDim},
      transparent 40%
    );
    opacity: 0;
    transition: opacity ${({ theme }) => theme.motion.base};
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.borderStrong};
    box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.6);
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const Num = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.fgDim};
  margin-bottom: 16px;
  position: relative;
`;

export const Heading = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: -0.02em;
  margin-bottom: 10px;
  position: relative;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.fgMuted};
  font-size: 14.5px;
  margin-bottom: 22px;
  flex-grow: 1;
  position: relative;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  overflow: hidden;
`;

export const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 22px;
  position: relative;
`;

export const Links = styled.div`
  display: flex;
  gap: 18px;
  position: relative;
`;

export const LinkAnchor = styled.a`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12.5px;
  color: ${({ theme }) => theme.colors.fgMuted};
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color ${({ theme }) => theme.motion.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
