import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { ProjectsGlobal } from '../index';
import { EXPERIENCES } from '@/constants/experiences';

describe('ProjectsGlobal', () => {
  it('renders every project title', () => {
    const { getByText } = renderWithTheme(
      <ProjectsGlobal experiences={EXPERIENCES} />,
    );
    EXPERIENCES.forEach((experience) =>
      expect(getByText(experience.title)).toBeInTheDocument(),
    );
  });
});
