import { App as AppContainer } from '@stone-flower-org/js-app';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import { APP_ELEMENT_ID } from '@/src/constants';
import { App as AppComponent } from '@/src/ui/components/App';
import { AppServices } from '@/src/utils/app';

import { axiosProvider } from './axios';
import { configsProvider } from './configs';
import { luxonProvider } from './luxon';
import { routerProvider } from './router';
import { storeProvider } from './store';

export const app = new AppContainer<AppServices>(
  () => {
    const appEl = document.getElementById(APP_ELEMENT_ID);
    if (!appEl) throw new Error(`Couldn't find #${APP_ELEMENT_ID} element`);
    createRoot(appEl).render(createElement(AppComponent));
  });

app.registerProvider('configs', configsProvider);
app.registerProvider('date', luxonProvider);
app.registerProvider('http', axiosProvider);
app.registerProvider('store', storeProvider);
app.registerProvider('router', routerProvider);
