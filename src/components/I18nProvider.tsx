'use client';

import { ReactNode, useEffect, useState } from 'react';
import '../lib/i18n';

export function I18nProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return children immediately to allow hydration, 
  // but keep the 'mounted' logic for i18n initialization if needed.
  return <>{children}</>;
}
