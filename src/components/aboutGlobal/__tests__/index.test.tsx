import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { AboutGlobal } from '../index';

describe('AboutGlobal', () => {
  it('renders every paragraph', () => {
    const paragraphs = ['Parágrafo um.', 'Parágrafo dois.'];
    const { getByText } = renderWithTheme(<AboutGlobal paragraphs={paragraphs} />);
    paragraphs.forEach((p) => expect(getByText(p)).toBeInTheDocument());
  });
});
