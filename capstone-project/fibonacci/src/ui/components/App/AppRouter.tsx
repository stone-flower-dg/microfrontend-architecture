import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { app } from '@/src/boot';

export const AppRouter = () => (
  <RouterProvider
    fallbackElement="Loading Page..."
    router={app.getService('router')}
  />
);
