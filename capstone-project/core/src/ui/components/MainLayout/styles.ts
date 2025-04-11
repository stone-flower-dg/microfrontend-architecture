import { styled } from '@mui/material';

import { Header } from '@/src/ui/components/Header';

export const StyledContainer = styled('div')`
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
`;

export const StyledContent = styled('div')`
  display: flex;
  flex: 1 1 auto;
`;

export const StyledHeader = styled(Header)`
  display: flex;
  flex: 0 0 auto;
`;
