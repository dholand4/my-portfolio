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

  it('labels client projects with "cliente"', () => {
    const { getAllByText } = renderWithTheme(
      <ProjectCardGlobal {...experience} />,
    );
    expect(getAllByText(/cliente/i).length).toBeGreaterThan(0);
  });

  it('omits the "cliente" label on personal projects', () => {
    const { queryByText, getByText } = renderWithTheme(
      <ProjectCardGlobal
        {...experience}
        company="Projeto Autoral"
        companyUrl={undefined}
        personal
      />,
    );
    expect(getByText('Projeto Autoral')).toBeInTheDocument();
    expect(queryByText(/cliente/i)).not.toBeInTheDocument();
  });

  it('links to the repository when repoUrl is provided', () => {
    const { getByLabelText } = renderWithTheme(
      <ProjectCardGlobal {...experience} repoUrl="https://github.com/x/y" />,
    );
    expect(getByLabelText(/código de ledger api/i)).toHaveAttribute(
      'href',
      'https://github.com/x/y',
    );
  });

  it('hides the repository link when repoUrl is missing', () => {
    const { queryByLabelText } = renderWithTheme(
      <ProjectCardGlobal {...experience} />,
    );
    expect(queryByLabelText(/código de/i)).not.toBeInTheDocument();
  });

  it('links to the live project when liveUrl is provided', () => {
    const { getByLabelText } = renderWithTheme(
      <ProjectCardGlobal {...experience} liveUrl="https://example.org" />,
    );
    expect(getByLabelText(/ver ledger api online/i)).toHaveAttribute(
      'href',
      'https://example.org',
    );
  });
});
