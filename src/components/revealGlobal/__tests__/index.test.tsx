import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { RevealGlobal } from '../index';

describe('RevealGlobal', () => {
  it('renders children inside wrapper', () => {
    const { getByText } = renderWithTheme(
      <RevealGlobal>
        <p>visivel</p>
      </RevealGlobal>,
    );
    expect(getByText('visivel')).toBeInTheDocument();
  });
});
