import { fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { NavGlobal } from '../index';
import { NAV_LINKS } from '@/constants/navLinks';

describe('NavGlobal', () => {
  it('renders every link in both desktop list and mobile drawer', () => {
    const { getAllByText } = renderWithTheme(<NavGlobal links={NAV_LINKS} />);
    NAV_LINKS.forEach((link) => {
      expect(getAllByText(link.label).length).toBe(2);
    });
  });

  it('renders the logo with link to top', () => {
    const { getByLabelText } = renderWithTheme(<NavGlobal links={NAV_LINKS} />);
    expect(getByLabelText('Início')).toHaveAttribute('href', '#top');
  });

  it('toggles aria-expanded on the hamburger button', () => {
    const { getByLabelText } = renderWithTheme(<NavGlobal links={NAV_LINKS} />);
    const button = getByLabelText(/abrir menu/i);
    expect(button).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(button);
    expect(getByLabelText(/fechar menu/i)).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  });

  it('closes the drawer when a link is clicked', () => {
    const { getByLabelText, getAllByText } = renderWithTheme(
      <NavGlobal links={NAV_LINKS} />,
    );
    fireEvent.click(getByLabelText(/abrir menu/i));
    const drawerLink = getAllByText(NAV_LINKS[0].label)[1];
    fireEvent.click(drawerLink);
    expect(getByLabelText(/abrir menu/i)).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });
});
