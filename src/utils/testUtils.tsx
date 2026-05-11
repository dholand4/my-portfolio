import { ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/constants/theme';

export function renderWithTheme(ui: ReactElement): RenderResult {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}
