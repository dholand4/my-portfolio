import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { ProjectsGlobal } from '../index';
import { PROJECTS } from '@/constants/projects';

describe('ProjectsGlobal', () => {
  it('renders every project title', () => {
    const { getByText } = renderWithTheme(<ProjectsGlobal projects={PROJECTS} />);
    PROJECTS.forEach((project) =>
      expect(getByText(project.title)).toBeInTheDocument(),
    );
  });
});
