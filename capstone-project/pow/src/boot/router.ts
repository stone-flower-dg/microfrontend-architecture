import { ServiceProvider } from '@stone-flower-org/js-app';
import { createElement } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    path: '/pow',
    children: [
      {
        path: '',
        lazy: () =>
          import('@/src/ui/components/Pow').then((module) => ({
            Component: () => createElement(module.default),
          })),
      },
    ],
  },
];

export const routerProvider = ServiceProvider.createFromFunc(() => createBrowserRouter(routes));
