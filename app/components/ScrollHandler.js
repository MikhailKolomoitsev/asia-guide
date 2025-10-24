'use client';

import { useEffect } from 'react';

export default function ScrollHandler() {
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      // Only run on desktop (1025px and above)
      if (window.innerWidth < 1025) {
        // Remove class on mobile/tablet to ensure phone frame shows properly
        document.body.classList.remove('scrolled-past-hero');
        return;
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Calculate if user is near the bottom of the page
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrollTop = window.scrollY || document.documentElement.scrollTop;

          // Distance from bottom (in pixels)
          const distanceFromBottom = documentHeight - (scrollTop + windowHeight);

          // Hide phone frame when within 100px of the bottom
          if (distanceFromBottom < 100) {
            document.body.classList.add('scrolled-past-hero');
          } else {
            document.body.classList.remove('scrolled-past-hero');
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    const handleResize = () => {
      handleScroll();
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Check on mount
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // This component doesn't render anything
  return null;
}
