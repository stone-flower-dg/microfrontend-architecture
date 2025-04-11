import { makeRequestHandlersFromRouter } from '@/src/tests/utils/msw/utils';

import { STATIC_ROUTER } from './static';

export * from './static';

export const handlers = [...makeRequestHandlersFromRouter(STATIC_ROUTER)];
