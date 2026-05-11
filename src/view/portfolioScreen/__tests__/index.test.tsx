import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ThemeProvider } from '@/providers/themeProvider';
import { PortfolioScreen } from '../index';

describe('PortfolioScreen', () => {
  it('renders the main sections', () => {
    const { getByText, getAllByText } = render(
      <ThemeProvider>
        <PortfolioScreen />
      </ThemeProvider>,
    );

    expect(getByText('Daniel Holanda')).toBeInTheDocument();
    expect(getByText(/O que faço/i)).toBeInTheDocument();
    expect(getByText(/Ferramentas do ofício/i)).toBeInTheDocument();
    expect(getByText(/Coisas que construí/i)).toBeInTheDocument();
    expect(getAllByText(/contato/i).length).toBeGreaterThan(0);
  });
});
