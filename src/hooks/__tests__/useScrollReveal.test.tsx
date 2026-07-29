import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useScrollReveal } from '../useScrollReveal';

function Probe() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} data-testid="probe" data-visible={isVisible}>
      content
    </div>
  );
}

describe('useScrollReveal', () => {
  it('starts hidden before the observer fires', () => {
    const { getByTestId } = render(<Probe />);
    expect(getByTestId('probe')).toHaveAttribute('data-visible', 'false');
  });
});
