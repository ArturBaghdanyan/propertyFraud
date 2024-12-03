import { MutableRefObject, useEffect, useState } from 'react';

class IntersectionSubject {
  private observers: Array<(isVisible: boolean) => void> = [];
  private observer: IntersectionObserver | null = null;

  constructor(target: Element) {
    this.observer = new IntersectionObserver(([entry]) => {
      this.notify(entry.isIntersecting);
    });
    this.observer.observe(target);
  }

  // Register an observer
  addObserver(callback: (isVisible: boolean) => void) {
    this.observers.push(callback);
  }

  // Notify all observers
  private notify(isVisible: boolean) {
    this.observers.forEach(callback => callback(isVisible));
  }

  // Cleanup the observer
  disconnect() {
    this.observer?.disconnect();
  }
}

export function useIsVisible(ref: MutableRefObject<null | Element>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const subject = new IntersectionSubject(ref.current);

    // Register the state updater as an observer
    subject.addObserver(setIntersecting);

    return () => {
      subject.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
