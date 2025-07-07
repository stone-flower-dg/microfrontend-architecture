import { ServiceProvider } from '@stone-flower-org/js-app';
import { createElement } from 'react';
import { createBrowserRouter, Navigate, Outlet, RouteObject } from 'react-router-dom';

import { ThrowRouteError } from '@/src/ui/components/ThrowRouteError';

export const routes: RouteObject[] = [
  {
    path: '/',
    ErrorBoundary: ThrowRouteError,
    children: [
      {
        path: '/',
        lazy: () =>
          import('@/src/ui/components/MainLayout').then((module) => ({
            Component: () => createElement(module.default, undefined, createElement(Outlet)),
          })),
        children: [
          {
            path: '/',
            index: true,
            Component: () => createElement(
              Navigate, {
                to: '/fibonacci',
                replace: true,
              }
            ),
          },
          {
            path: '/fibonacci',
            lazy: () =>
              import('project_fibonacci/App').then((module) => {
                return ({
                Component: () => createElement(module.default),
              })}),
          },
          {
            path: '/pow',
            lazy: () =>
              import('project_pow/App').then((module) => {
                return ({
                Component: () => createElement(module.default),
              })}),
          }
        ],
      },
      {
        id: '403',
        path: '403',
        element: 'Permission Denied',
      },
      {
        id: '404',
        path: '*',
        element: 'Not Found',
      },
    ],
  },
];

export const routerProvider = ServiceProvider.createFromFunc(() => createBrowserRouter(routes));
