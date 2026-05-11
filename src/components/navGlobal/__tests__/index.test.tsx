import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { NavGlobal } from '../index';
import { NAV_LINKS } from '@/constants/navLinks';

describe('NavGlobal', () => {
  it('renders all nav links', () => {
    const { getByText } = renderWithTheme(<NavGlobal links={NAV_LINKS} />);
    NAV_LINKS.forEach((link) => {
      expect(getByText(link.label)).toBeInTheDocument();
    });
  });

  it('renders the logo with link to top', () => {
    const { getByLabelText } = renderWithTheme(<NavGlobal links={NAV_LINKS} />);
    expect(getByLabelText('Início')).toHaveAttribute('href', '#top');
  });
});
