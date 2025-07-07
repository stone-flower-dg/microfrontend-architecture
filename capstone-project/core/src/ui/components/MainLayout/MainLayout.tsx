import React, { FC, ReactNode } from 'react';

import { StyledContainer, StyledContent, StyledHeader } from './styles';


export interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC = ({ children }: MainLayoutProps) => {
  return (
    <StyledContainer>
      <StyledHeader />
      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  );
};

export default MainLayout;
