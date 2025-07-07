import { Router } from '@remix-run/router';
import { Axios } from 'axios';
// eslint-disable-next-line import/no-unresolved
import { SetupWorker } from 'msw/lib/browser';
// eslint-disable-next-line import/no-unresolved
import { SetupServer } from 'msw/lib/node';

import { configsProvider } from '@/src/boot/configs';
import { luxonProvider } from '@/src/boot/luxon';
import { RootStore } from '@/src/utils/store/types';

export type AppConfigs = ReturnType<typeof configsProvider.get>;

export interface AppServices {
  configs: AppConfigs;
  date: ReturnType<typeof luxonProvider.get>;
  http: Axios;
  server: SetupWorker | SetupServer;
  store: RootStore;
  router: Router;
}

export type AppServicesKey = keyof AppServices;
