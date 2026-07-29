import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { SectionHeaderGlobal } from '../index';

describe('SectionHeaderGlobal', () => {
  it('renders label and title', () => {
    const { getByText } = renderWithTheme(
      <SectionHeaderGlobal label="01 — sobre" title="Engenheiro." />,
    );
    expect(getByText('01 — sobre')).toBeInTheDocument();
    expect(getByText('Engenheiro.')).toBeInTheDocument();
  });

  it('omits title when not provided', () => {
    const { queryByRole } = renderWithTheme(
      <SectionHeaderGlobal label="02 — stack" />,
    );
    expect(queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
  });
});
