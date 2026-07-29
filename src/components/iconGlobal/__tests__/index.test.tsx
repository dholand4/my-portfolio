import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { IconGlobal } from '../index';

describe('IconGlobal', () => {
  it.each(['github', 'linkedin', 'email', 'external', 'menu', 'close'] as const)(
    'renders the %s icon as an svg',
    (name) => {
      const { container } = renderWithTheme(<IconGlobal name={name} />);
      expect(container.querySelector('svg')).toBeInTheDocument();
    },
  );

  it('respects size prop', () => {
    const { container } = renderWithTheme(<IconGlobal name="github" size={32} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle({ width: '32px', height: '32px' });
  });
});
