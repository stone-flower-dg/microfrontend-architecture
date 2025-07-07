import { initialState as appInitialState } from '@/src/utils/store/slices/app';
import { RootState } from '@/src/utils/store/types';

import type { RecursivePartial } from '@stone-flower-org/js-utils';

export const initialState: RecursivePartial<RootState> = {
  app: {
    ...appInitialState,
    errors: [],
  },
};
