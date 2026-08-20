import { useEffect } from 'react';
import { updateSEOMetadata } from '../utils/seo';

/**
 * React Hook that monitors sections on scroll using IntersectionObserver
 * and updates document titles, meta descriptions, and Schema.org JSON-LD dynamically.
 */
export function useDynamicSEO(sectionIds: string[]): void {
  useEffect(() => {
    // Set initial default SEO on mount
    updateSEOMetadata('hero');

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -40% 0px', // Trigger when section occupies main viewport space
      threshold: 0.15,
    };

    let activeSectionId = 'hero';

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          const currentId = entry.target.id;
          if (currentId !== activeSectionId) {
            activeSectionId = currentId;
            updateSEOMetadata(currentId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe each section element
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);
}
