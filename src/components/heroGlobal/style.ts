import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

export const Header = styled.header`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 140px 0 80px;
  position: relative;
`;

export const Meta = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.fgMuted};
  margin-bottom: 28px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  box-shadow: 0 0 12px ${({ theme }) => theme.colors.accentGlow};
  animation: ${pulse} 2s ease-in-out infinite;
`;

export const Headline = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 800;
  font-size: clamp(2rem, 5.2vw, 3.6rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: 24px;
`;

export const Role = styled.span`
  display: inline-block;
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.fgMuted};
  font-size: 0.55em;
  font-weight: 500;
  letter-spacing: -0.01em;
`;
