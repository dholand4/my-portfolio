import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { ProjectCardGlobal } from '../index';

const experience = {
  number: '/ 01',
  title: 'Ledger API',
  company: 'Acme Clínicas',
  companyUrl: 'https://example.com',
  description: 'Serviço de contabilidade.',
  stack: ['Node', 'Postgres'],
};

describe('ProjectCardGlobal', () => {
  it('renders title, description, number and stack', () => {
    const { getByText } = renderWithTheme(<ProjectCardGlobal {...experience} />);
    expect(getByText(experience.title)).toBeInTheDocument();
    expect(getByText(experience.description)).toBeInTheDocument();
    expect(getByText(experience.number)).toBeInTheDocument();
    experience.stack.forEach((s) => expect(getByText(s)).toBeInTheDocument());
  });

  it('shows the company name and links to it when companyUrl is provided', () => {
    const { getByText, getByLabelText } = renderWithTheme(
      <ProjectCardGlobal {...experience} />,
    );
    expect(getByText(experience.company)).toBeInTheDocument();
    expect(getByLabelText(/site da/i)).toHaveAttribute(
      'href',
      experience.companyUrl,
    );
  });

  it('renders company as plain text when companyUrl is not provided', () => {
    const { companyUrl: _omit, ...withoutUrl } = experience;
    const { getByText, queryByLabelText } = renderWithTheme(
      <ProjectCardGlobal {...withoutUrl} />,
    );
    expect(getByText(withoutUrl.company)).toBeInTheDocument();
    expect(queryByLabelText(/site da/i)).not.toBeInTheDocument();
  });
});
