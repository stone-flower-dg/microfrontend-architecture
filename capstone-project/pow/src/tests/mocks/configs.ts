import { makeConfigs } from '@/src/tests/mocked-data';

export const makeConfigsProvider = () => {
  const configs = makeConfigs();
  return {
    boot: async () => configs,
    get: () => configs,
  };
};
