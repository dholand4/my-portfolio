import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { ProjectCardGlobal } from '../index';

const project = {
  number: '/ 01',
  title: 'Ledger API',
  description: 'Serviço de contabilidade.',
  stack: ['Node', 'Postgres'],
  repoUrl: 'https://example.com/repo',
  demoUrl: 'https://example.com/demo',
};

describe('ProjectCardGlobal', () => {
  it('renders title, description, number and stack', () => {
    const { getByText } = renderWithTheme(<ProjectCardGlobal {...project} />);
    expect(getByText(project.title)).toBeInTheDocument();
    expect(getByText(project.description)).toBeInTheDocument();
    expect(getByText(project.number)).toBeInTheDocument();
    project.stack.forEach((s) => expect(getByText(s)).toBeInTheDocument());
  });

  it('links to repo and demo', () => {
    const { getByLabelText } = renderWithTheme(<ProjectCardGlobal {...project} />);
    expect(getByLabelText(/repositório/i)).toHaveAttribute('href', project.repoUrl);
    expect(getByLabelText(/demo ao vivo/i)).toHaveAttribute('href', project.demoUrl);
  });

  it('hides demo link when demoUrl is not provided', () => {
    const { demoUrl: _omit, ...withoutDemo } = project;
    const { queryByLabelText } = renderWithTheme(
      <ProjectCardGlobal {...withoutDemo} />,
    );
    expect(queryByLabelText(/demo ao vivo/i)).not.toBeInTheDocument();
  });
});
