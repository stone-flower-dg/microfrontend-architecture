/* eslint-disable import/no-unresolved */

import { ServiceProvider } from '@stone-flower-org/js-app';
import { SetupServer } from 'msw/lib/node';

import { app } from '@/src/boot';
import { AppServices, AppServicesKey } from '@/src/utils/app';
import { makeConfigsProvider } from '@/src/tests/mocks';
import { setupServer as setupServerNode } from '@/src/tests/utils/msw/setup/node';

import { setupRouter } from './router';
import { setupStore } from './store';

export const setupAppService = (key: AppServicesKey, service: unknown) => {
  app.registerProvider(key, ServiceProvider.create(service as unknown as AppServices[AppServicesKey]));
};

export const setupApp = () => {
  app.registerProvider('configs', makeConfigsProvider());
  app.registerProvider(
    'server',
    ServiceProvider.createFromFunc(async () => await setupServerNode()),
  );
  setupAppService('store', setupStore());
  setupAppService('router', setupRouter());
  return app;
};

export const bootApp = async () => {
  const excludeFromBoot = new Set(['server']);

  const appBoot = Object.entries(app.getProviders()).map(([key, provider]) => {
    if (excludeFromBoot.has(key)) return Promise.resolve();
    return provider.boot();
  });

  await Promise.all(appBoot);

  return app;
};

export const setupAndBootApp = async () => {
  setupApp();
  await bootApp();
};

export const setupServer = async () => {
  const [server] = await app.bootServices(['server']);
  (server as SetupServer).listen({ onUnhandledRequest: 'error' });
  return server;
};

export const clearServer = async () => {
  const [server] = await app.bootServices(['server']);
  (server as SetupServer).close();
  return server;
};
