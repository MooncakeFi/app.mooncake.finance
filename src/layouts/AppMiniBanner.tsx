import { Trans } from '@lingui/macro';
import { Box, Link } from '@mui/material';
import * as React from 'react';
import Marquee from 'react-fast-marquee';

const AppMiniBanner = () => {
  return (
    <Box className={'marquee-div'} py={1}>
      <Marquee pauseOnHover={true}>
        <Link
          href="https://docs.mooncake.fi/token-overview/usdemcake-pre-mine-protocol-token"
          color="inherit"
          target="_blank"
          mr={6}
        >
          <Trans>🥮 $MCAKE PRE-MINE IS LIVE 🥮</Trans>
        </Link>
        <Link
          href="https://docs.mooncake.fi/protocol/audits"
          color="inherit"
          target="_blank"
          mr={6}
        >
          <Trans>🔒 AUDITS UNDERWAY 🔒</Trans>
        </Link>
        <Link href="https://guild.xyz/mooncakefi" color="inherit" target="_blank" mr={6}>
          <Trans>💪 JOIN OUR GUILD 💪</Trans>
        </Link>
        <Link
          href="https://docs.mooncake.fi/token-overview/usdemcake-pre-mine-protocol-token"
          color="inherit"
          target="_blank"
          mr={6}
        >
          <Trans>🥮 $MCAKE PRE-MINE IS LIVE 🥮</Trans>
        </Link>
        <Link
          href="https://docs.mooncake.fi/protocol/audits"
          color="inherit"
          target="_blank"
          mr={6}
        >
          <Trans>🔒 AUDITS UNDERWAY 🔒</Trans>
        </Link>
        <Link href="https://guild.xyz/mooncakefi" color="inherit" target="_blank" mr={6}>
          <Trans>💪 JOIN OUR GUILD 💪</Trans>
        </Link>
        <Link
          href="https://docs.mooncake.fi/token-overview/usdemcake-pre-mine-protocol-token"
          color="inherit"
          target="_blank"
          mr={6}
        >
          <Trans>🥮 $MCAKE PRE-MINE IS LIVE 🥮</Trans>
        </Link>
        <Link
          href="https://docs.mooncake.fi/protocol/audits"
          color="inherit"
          target="_blank"
          mr={6}
        >
          <Trans>🔒 AUDITS UNDERWAY 🔒</Trans>
        </Link>
        <Link href="https://guild.xyz/mooncakefi" color="inherit" target="_blank" mr={6}>
          <Trans>💪 JOIN OUR GUILD 💪</Trans>
        </Link>
      </Marquee>
    </Box>
  );
};

export default AppMiniBanner;
