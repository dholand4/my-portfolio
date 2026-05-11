import { MouseEvent, useCallback } from 'react';

export function useSpotlight() {
  const onMouseMove = useCallback((event: MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    target.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }, []);

  return { onMouseMove };
}
