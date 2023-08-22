import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

import { AppFooter } from './AppFooter';
import { AppHeader } from './AppHeader';
import AppMiniBanner from './AppMiniBanner';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppMiniBanner />
      <AppHeader />
      <Box component="main" sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {children}
      </Box>
      <AppFooter />
    </>
  );
}
