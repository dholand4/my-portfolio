import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useSpotlight } from '../useSpotlight';

function Probe() {
  const { onMouseMove } = useSpotlight();
  return (
    <div data-testid="card" onMouseMove={onMouseMove}>
      hover-me
    </div>
  );
}

describe('useSpotlight', () => {
  it('writes CSS variables relative to the element on mouse move', () => {
    const { getByTestId } = render(<Probe />);
    const card = getByTestId('card');
    card.getBoundingClientRect = () =>
      ({ left: 10, top: 20, width: 100, height: 80 }) as DOMRect;

    fireEvent.mouseMove(card, { clientX: 50, clientY: 60 });

    expect(card.style.getPropertyValue('--mx')).toBe('40px');
    expect(card.style.getPropertyValue('--my')).toBe('40px');
  });
});
