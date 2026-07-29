import styled from 'styled-components';

/** Espaçamento entre as logos (mantido igual em JS e CSS para o loop ser contínuo). */
export const CAROUSEL_GAP = 56;

export const Wrap = styled.div`
  margin: 0 0 44px;
  position: relative;
  overflow: hidden;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 22px 0;
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    #000 12%,
    #000 88%,
    transparent
  );
  mask-image: linear-gradient(
    90deg,
    transparent,
    #000 12%,
    #000 88%,
    transparent
  );
`;

export const Track = styled.div`
  display: flex;
  align-items: center;
  gap: ${CAROUSEL_GAP}px;
  width: max-content;
  animation-name: company-marquee;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes company-marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-1 * var(--marquee-dist, 0px)));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Sequence = styled.div`
  display: flex;
  align-items: center;
  gap: ${CAROUSEL_GAP}px;
  flex: 0 0 auto;
`;

export const Item = styled.a`
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.fgMuted};
  transition:
    opacity ${({ theme }) => theme.motion.base},
    transform ${({ theme }) => theme.motion.base};

  &:hover {
    opacity: 0.7;
    transform: translateY(-2px);
  }
`;

export const Logo = styled.img`
  height: 64px;
  width: auto;
  max-width: 220px;
  object-fit: contain;
  display: block;
`;

export const Name = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 600;
  font-size: 15px;
  letter-spacing: -0.01em;
  white-space: nowrap;
`;
