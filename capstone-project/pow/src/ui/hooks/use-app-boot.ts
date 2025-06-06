import { useContext } from 'react';

import { AppBootContext } from '@/src/ui/context/AppBootProvider';

export const useAppBoot = () => {
  const ctx = useContext(AppBootContext);
  if (!ctx) throw new Error('useAppBoot must be used within AppBootContext');
  return ctx;
};
