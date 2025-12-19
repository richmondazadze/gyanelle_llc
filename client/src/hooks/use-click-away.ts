import { RefObject, useEffect } from 'react';

type Event = MouseEvent | TouchEvent;
type ElementType = HTMLElement | HTMLDivElement | null;

export function useClickAway<T extends ElementType>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      
      // Do nothing if clicking ref's element or descendent elements
      if (!el || (el as HTMLElement).contains(event.target as Node)) {
        return;
      }
      
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
