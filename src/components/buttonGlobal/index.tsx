import { IButtonGlobalProps } from './types';
import { Anchor, Arrow } from './style';

export function ButtonGlobal({
  href,
  variant = 'primary',
  showArrow = true,
  children,
  ...rest
}: IButtonGlobalProps) {
  return (
    <Anchor href={href} $variant={variant} {...rest}>
      {children}
      {showArrow && <Arrow aria-hidden="true">→</Arrow>}
    </Anchor>
  );
}
