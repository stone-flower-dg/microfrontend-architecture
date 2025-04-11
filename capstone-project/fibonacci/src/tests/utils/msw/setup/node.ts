// eslint-disable-next-line import/no-unresolved
import { setupServer as baseSetupServer } from 'msw/node';

import { handlers } from '@/src/tests/utils/msw/handlers';

export const setupServer = async () => baseSetupServer(...handlers);
