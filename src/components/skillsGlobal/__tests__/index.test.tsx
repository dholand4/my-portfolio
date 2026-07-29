import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { SkillsGlobal } from '../index';
import { SKILL_GROUPS } from '@/constants/skills';

describe('SkillsGlobal', () => {
  it('renders every skill group title', () => {
    const { getByText } = renderWithTheme(<SkillsGlobal groups={SKILL_GROUPS} />);
    SKILL_GROUPS.forEach((group) =>
      expect(getByText(group.title)).toBeInTheDocument(),
    );
  });
});
