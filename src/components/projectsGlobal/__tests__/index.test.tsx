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
});
