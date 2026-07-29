import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from '@/constants/theme';
import { GlobalStyle } from '@/globalStyle';

interface IThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: IThemeProviderProps) {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
}
