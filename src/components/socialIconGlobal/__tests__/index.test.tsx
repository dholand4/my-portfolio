import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { SocialIconGlobal } from '../index';

describe('SocialIconGlobal', () => {
  it('renders accessible label and href', () => {
    const { getByLabelText } = renderWithTheme(
      <SocialIconGlobal
        href="https://github.com/x"
        label="GitHub"
        icon="github"
        external
      />,
    );
    const anchor = getByLabelText('GitHub');
    expect(anchor).toHaveAttribute('href', 'https://github.com/x');
    expect(anchor).toHaveAttribute('target', '_blank');
    expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not open in new tab when not external', () => {
    const { getByLabelText } = renderWithTheme(
      <SocialIconGlobal href="mailto:a@b.com" label="E-mail" icon="email" />,
    );
    expect(getByLabelText('E-mail')).not.toHaveAttribute('target');
  });
});
