import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React, { FC, PropsWithChildren } from 'react';
import { Provider as StoreProvider } from 'react-redux';

import { app } from '@/src/boot';
import { ConfigsProvider } from '@/src/ui/context/ConfigsProvider';

export type AppProvidersProps = PropsWithChildren;

export const AppProviders: FC<AppProvidersProps> = ({ children }: AppProvidersProps) => (
  <ConfigsProvider value={app.getService('configs')}>
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <StoreProvider store={app.getService('store')}>
        {children}
      </StoreProvider>
    </LocalizationProvider>
  </ConfigsProvider>
);
