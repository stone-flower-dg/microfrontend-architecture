import { useDispatch as useReduxDispatch } from 'react-redux';

import { DispatchFunc } from '@/src/utils/store/types';

export const useDispatch: DispatchFunc = useReduxDispatch;
