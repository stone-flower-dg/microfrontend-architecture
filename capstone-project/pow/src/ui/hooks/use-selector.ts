import { useSelector as useReduxSelector } from 'react-redux';

import { SelectorFunc } from '@/src/utils/store/types';

export const useSelector: SelectorFunc = useReduxSelector;
