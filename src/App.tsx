import { ThemeProvider } from '@/providers/themeProvider';
import { PortfolioScreen } from '@/view/portfolioScreen';

export function App() {
  return (
    <ThemeProvider>
      <PortfolioScreen />
    </ThemeProvider>
  );
}
