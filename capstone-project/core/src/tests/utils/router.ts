import { createMemoryRouter } from 'react-router-dom';

import { routes } from '@/src/boot';

export const setupRouter = (opts: { initialEntries?: string[]; initialIndex?: number } = {}) =>
  createMemoryRouter(routes, opts);
