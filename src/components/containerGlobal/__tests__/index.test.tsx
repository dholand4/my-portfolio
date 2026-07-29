import { describe, expect, it } from 'vitest';
import { renderWithTheme } from '@/utils/testUtils';
import { ContainerGlobal } from '../index';

describe('ContainerGlobal', () => {
  it('renders children', () => {
    const { getByText } = renderWithTheme(
      <ContainerGlobal>
        <span>conteudo</span>
      </ContainerGlobal>,
    );
    expect(getByText('conteudo')).toBeInTheDocument();
  });
});
