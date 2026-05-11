import { act } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { TyperGlobal } from '../index';

describe('TyperGlobal', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders prompt and starts typing the first phrase', () => {
    const { getByTestId, getByText } = renderWithTheme(
      <TyperGlobal phrases={['Olá mundo.']} />,
    );
    expect(getByText('$')).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(getByTestId('typer-text').textContent).toMatch(/.+/);
  });
});
