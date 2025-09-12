'use client';

import { useEffect, useState } from 'react';

export const useBreakpoints = (tablet = 992, desktop = 1200) => {
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDektop = () => {
      setIsTablet(window.innerWidth >= tablet);
      setIsDesktop(window.innerWidth >= desktop);
    };
    checkIsDektop();

    window.addEventListener('resize', checkIsDektop);
    return () => window.removeEventListener('resize', checkIsDektop);
  }, [tablet, desktop]);

  return { isTablet, isDesktop };
};
