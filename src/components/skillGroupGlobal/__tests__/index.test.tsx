import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { SkillGroupGlobal } from '../index';

describe('SkillGroupGlobal', () => {
  it('renders title and all tags', () => {
    const tags = ['React', 'TypeScript', 'Vite'];
    const { getByText } = renderWithTheme(
      <SkillGroupGlobal title="Frontend" tags={tags} />,
    );
    expect(getByText('Frontend')).toBeInTheDocument();
    tags.forEach((tag) => expect(getByText(tag)).toBeInTheDocument());
  });
});
