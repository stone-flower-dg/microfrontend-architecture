import { AppBar, Box, Container, Tab, Tabs } from '@mui/material';
import React, { FC, SyntheticEvent, useMemo } from 'react';
import { pages } from './utils';
import { useLocation, useNavigate } from 'react-router-dom';

export interface HeaderProps {
  className?: string;
}

export const Header: FC = ({ className }: HeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const activePage = useMemo(() => {
    return pages.find(({ path }) => location.pathname.startsWith(path)) ?? pages[0];
  }, [location.pathname]);

  const onTabChange = (e: SyntheticEvent, value: string) => {
    navigate(value);
  };

  return (
    <AppBar className={className} position="static">
      <Container maxWidth="xl">
        <Tabs value={activePage.path} onChange={onTabChange} aria-label="Navigation">
          {pages.map((page) => (
            <Tab key={page.name} label={page.name} value={page.path} />
          ))}
        </Tabs>
      </Container>
    </AppBar>
  );
};


