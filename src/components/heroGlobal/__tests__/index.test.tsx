import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { HeroGlobal } from '../index';

describe('HeroGlobal', () => {
  it('renders name, role, status and CTA', () => {
    const { getByText, getByRole } = renderWithTheme(
      <HeroGlobal
        name="Daniel Holanda"
        role="Desenvolvedor."
        status="disponível"
        phrases={['Olá.']}
        ctaHref="#projetos"
        ctaLabel="Ver projetos"
      />,
    );
    expect(getByText('Daniel Holanda')).toBeInTheDocument();
    expect(getByText('Desenvolvedor.')).toBeInTheDocument();
    expect(getByText(/disponível/i)).toBeInTheDocument();
    const cta = getByRole('link', { name: /ver projetos/i });
    expect(cta).toHaveAttribute('href', '#projetos');
  });
});
