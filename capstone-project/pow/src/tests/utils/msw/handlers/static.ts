import { APP_CONFIG_URL_PATH } from '@/src/constants';
import { makeConfigs } from '@/src/tests/mocked-data';
import { Router } from '@/src/tests/utils/msw/types';
import { makeJsonResponseResolver } from '@/src/tests/utils/msw/utils';

export const STATIC_ROUTER: Router = {
  configs: {
    method: 'get',
    url: APP_CONFIG_URL_PATH,
    resolver: makeJsonResponseResolver(makeConfigs),
  },
};
