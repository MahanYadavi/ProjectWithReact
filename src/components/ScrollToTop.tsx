import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname, hash, search } = useLocation();

  useEffect(() => {
    // If navigating to an anchor/hash, try to scroll to that element first
    if (hash) {
      const id = decodeURIComponent(hash.replace('#', ''));
      const el = document.getElementById(id);
      if (el) {
        // small timeout in case element is rendered after route change
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
        return;
      }
    }

    // Default: scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname, hash, search]);

  return null;
};

export default ScrollToTop;
