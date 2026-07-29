import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { FooterGlobal } from '../index';

describe('FooterGlobal', () => {
  it('renders the provided text', () => {
    const text = '// feito · 2026';
    const { getByText } = renderWithTheme(<FooterGlobal text={text} />);
    expect(getByText(text)).toBeInTheDocument();
  });
});
