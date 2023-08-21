import { Trans } from '@lingui/macro';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

import farmingPng from './farming.png';

export const Farming = () => {
  return (
    <Card>
      <CardMedia sx={{ height: 140 }} image={farmingPng.src} />
      <CardContent>
        <Typography component="div" variant="h3" sx={{ mr: 4 }}>
          <Trans>Pre-Mine CMOON</Trans>
        </Typography>

        <Typography component="div" mt={2}>
          <Trans>
            Provide liquidity to any of our markets and start pre-mining $CMOON. The governance
            token for mooncake finance.
          </Trans>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          target="_blank"
          href={'https://docs.mooncake.fi/token-overview/usdemcake-pre-mine-protocol-token'}
        >
          <Trans>Learn more</Trans>
        </Button>
      </CardActions>
    </Card>
  );
};
