import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { ContactGlobal } from '../index';
import { SOCIAL_LINKS } from '@/constants/socials';

describe('ContactGlobal', () => {
  it('renders email CTA with mailto link', () => {
    const email = 'teste@exemplo.com';
    const { getByRole } = renderWithTheme(
      <ContactGlobal email={email} socials={SOCIAL_LINKS} />,
    );
    const cta = getByRole('link', { name: new RegExp(email, 'i') });
    expect(cta).toHaveAttribute('href', `mailto:${email}`);
  });

  it('renders every social icon', () => {
    const { getByLabelText } = renderWithTheme(
      <ContactGlobal email="x@y.com" socials={SOCIAL_LINKS} />,
    );
    SOCIAL_LINKS.forEach((s) => expect(getByLabelText(s.label)).toBeInTheDocument());
  });
});
