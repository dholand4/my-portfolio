import styled, { css } from 'styled-components';
import { TagVariant } from './types';

const variantStyles: Record<TagVariant, ReturnType<typeof css>> = {
  outline: css`
    font-size: 12.5px;
    padding: 6px 12px;
    color: ${({ theme }) => theme.colors.fg};
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    border-radius: ${({ theme }) => theme.radii.md}px;
    background: rgba(255, 255, 255, 0.02);
    transition: all ${({ theme }) => theme.motion.fast};

    &:hover {
      border-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.accent};
    }
  `,
  accent: css`
    font-size: 11px;
    padding: 3px 8px;
    background: ${({ theme }) => theme.colors.accentDim};
    color: ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.radii.sm}px;
  `,
};

export const Pill = styled.span<{ $variant: TagVariant }>`
  font-family: ${({ theme }) => theme.fonts.mono};
  display: inline-flex;
  align-items: center;
  ${({ $variant }) => variantStyles[$variant]}
`;
