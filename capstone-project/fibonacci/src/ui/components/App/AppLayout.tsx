import React, { FC, PropsWithChildren, useEffect } from 'react';

import { useAppBoot } from '@/src/ui/hooks';

export type AppLayoutProps = PropsWithChildren;

export const AppLayout: FC<AppLayoutProps> = ({ children }: AppLayoutProps) => {
  const { progress } = useAppBoot();

  useEffect(() => {
    progress.finish();
  }, [progress]);

  return (
    <>
      {children}
    </>
  );
};
