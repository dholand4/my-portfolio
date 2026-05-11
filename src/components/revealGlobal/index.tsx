import { useScrollReveal } from '@/hooks/useScrollReveal';
import { IRevealGlobalProps } from './types';
import { Wrapper } from './style';

export function RevealGlobal({
  children,
  as,
  className,
  stretch = false,
}: IRevealGlobalProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <Wrapper
      ref={ref}
      as={as}
      className={className}
      $visible={isVisible}
      $stretch={stretch}
    >
      {children}
    </Wrapper>
  );
}
