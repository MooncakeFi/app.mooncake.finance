import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

import gelato from './partners/gelato.png';
import gelatoDark from './partners/gelato-dark.png';
import pythDark from './partners/pyth-dark.png';
import pythLight from './partners/pyth-light.png';

const Partners = () => {
  const theme = useTheme();

  return (
    <Box width={'100%'} mt={12}>
      <Typography align={'center'} variant={'h3'} mb={4} color={'light'}>
        Partners
      </Typography>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box mr={6}>
          <img
            src={theme.palette.mode === 'dark' ? gelatoDark.src : gelato.src}
            alt={'Gelato'}
            loading={'lazy'}
            width={120}
          />
        </Box>
        <Box>
          <img
            src={theme.palette.mode !== 'dark' ? pythDark.src : pythLight.src}
            alt={'Pyth'}
            loading={'lazy'}
            width={100}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Partners;
