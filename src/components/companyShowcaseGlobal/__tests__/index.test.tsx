import { fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { CompanyShowcaseGlobal } from '../index';
import { COMPANIES } from '@/constants/experiences';

describe('CompanyShowcaseGlobal', () => {
  it('renders all companies and the all-projects pill', () => {
    const { getByText } = renderWithTheme(
      <CompanyShowcaseGlobal companies={COMPANIES} totalExperiencesCount={6} />,
    );

    expect(getByText('Todos os projetos')).toBeInTheDocument();
    COMPANIES.forEach((company) => {
      expect(getByText(company.name)).toBeInTheDocument();
    });
  });

  it('triggers onSelectCompany when a company pill is clicked', () => {
    const handleSelect = vi.fn();
    const { getByText } = renderWithTheme(
      <CompanyShowcaseGlobal
        companies={COMPANIES}
        onSelectCompany={handleSelect}
      />,
    );

    fireEvent.click(getByText(COMPANIES[0].name));
    expect(handleSelect).toHaveBeenCalledWith(COMPANIES[0].name);
  });

  it('toggles selection off when clicking an active company pill', () => {
    const handleSelect = vi.fn();
    const activeCompany = COMPANIES[0].name;

    const { getByText } = renderWithTheme(
      <CompanyShowcaseGlobal
        companies={COMPANIES}
        selectedCompany={activeCompany}
        onSelectCompany={handleSelect}
      />,
    );

    fireEvent.click(getByText(activeCompany));
    expect(handleSelect).toHaveBeenCalledWith(null);
  });

  it('resets selection to null when clicking the all-projects pill', () => {
    const handleSelect = vi.fn();
    const { getByRole } = renderWithTheme(
      <CompanyShowcaseGlobal
        companies={COMPANIES}
        selectedCompany={COMPANIES[1].name}
        onSelectCompany={handleSelect}
      />,
    );

    const allBtn = getByRole('button', {
      name: /Exibir todos os projetos/i,
    });
    fireEvent.click(allBtn);
    expect(handleSelect).toHaveBeenCalledWith(null);
  });
});
