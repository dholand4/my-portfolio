import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { TagGlobal } from '../index';

describe('TagGlobal', () => {
  it('renders its label', () => {
    const { getByText } = renderWithTheme(<TagGlobal>React</TagGlobal>);
    expect(getByText('React')).toBeInTheDocument();
  });

  it('accepts variant prop', () => {
    const { getByText } = renderWithTheme(
      <TagGlobal variant="accent">Node</TagGlobal>,
    );
    expect(getByText('Node')).toBeInTheDocument();
  });
});
