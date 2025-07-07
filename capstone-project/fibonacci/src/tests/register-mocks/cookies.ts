import { vi } from 'vitest';

import { makeInMemoryCookies } from '@/src/tests/mocks';

vi.mock('js-cookie', () => makeInMemoryCookies());
