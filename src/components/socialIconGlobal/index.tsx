import { IconGlobal } from '@/components/iconGlobal';
import { ISocialIconGlobalProps } from './types';
import { Anchor } from './style';

export function SocialIconGlobal({
  href,
  label,
  icon,
  external = false,
}: ISocialIconGlobalProps) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Anchor href={href} aria-label={label} {...externalProps}>
      <IconGlobal name={icon} aria-hidden />
    </Anchor>
  );
}
