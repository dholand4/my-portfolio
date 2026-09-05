import { fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { ProjectsGlobal } from '../index';
import { COMPANIES, EXPERIENCES } from '@/constants/experiences';

describe('ProjectsGlobal', () => {
  it('renders every experience title', () => {
    const { getByText } = renderWithTheme(
      <ProjectsGlobal experiences={EXPERIENCES} companies={COMPANIES} />,
    );
    EXPERIENCES.forEach((experience) =>
      expect(getByText(experience.title)).toBeInTheDocument(),
    );
  });

  it('filters experiences when a company card is clicked', () => {
    const { getByRole, getByText, queryByText } = renderWithTheme(
      <ProjectsGlobal experiences={EXPERIENCES} companies={COMPANIES} />,
    );

    // Click Dadudim card button
    const dadudimBtn = getByRole('button', {
      name: /Filtrar projetos de Dadudim/i,
    });
    fireEvent.click(dadudimBtn);

    // Dadudim has Catálogo Delivery
    expect(getByText('Catálogo Delivery')).toBeInTheDocument();
    // UniCatólica projects should not be rendered
    expect(queryByText('Moodle Mensagens')).not.toBeInTheDocument();
  });

  it('clears filter when reset link is clicked', () => {
    const { getByRole, getByText } = renderWithTheme(
      <ProjectsGlobal experiences={EXPERIENCES} companies={COMPANIES} />,
    );

    // Filter by Dadudim
    const dadudimBtn = getByRole('button', {
      name: /Filtrar projetos de Dadudim/i,
    });
    fireEvent.click(dadudimBtn);

    // Click clear filter button
    const clearBtn = getByRole('button', {
      name: /Limpar filtro e ver todos os projetos/i,
    });
    expect(clearBtn).toBeInTheDocument();
    fireEvent.click(clearBtn);

    // All projects are back
    expect(getByText('Moodle Mensagens')).toBeInTheDocument();
    expect(getByText('Catálogo Delivery')).toBeInTheDocument();
  });
});
