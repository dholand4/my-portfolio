import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { ButtonGlobal } from '../index';

describe('ButtonGlobal', () => {
  it('renders children and points to href', () => {
    const { getByRole } = renderWithTheme(
      <ButtonGlobal href="#projetos">Ver projetos</ButtonGlobal>,
    );
    const anchor = getByRole('link', { name: /ver projetos/i });
    expect(anchor).toHaveAttribute('href', '#projetos');
  });

  it('renders arrow by default', () => {
    const { getByText } = renderWithTheme(
      <ButtonGlobal href="#">Go</ButtonGlobal>,
    );
    expect(getByText('→')).toBeInTheDocument();
  });

  it('hides arrow when showArrow is false', () => {
    const { queryByText } = renderWithTheme(
      <ButtonGlobal href="#" showArrow={false}>
        Plain
      </ButtonGlobal>,
    );
    expect(queryByText('→')).not.toBeInTheDocument();
  });
});
