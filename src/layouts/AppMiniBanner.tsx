import { Trans } from '@lingui/macro';
import { Box, Link } from '@mui/material';
import * as React from 'react';

const AppMiniBanner = () => {
  const banner = (index: number) => {
    return (
      <Box className={`banner banner-${index}`}>
        <Link
          href="https://docs.mooncake.fi/token-overview/usdemcake-pre-mine-protocol-token"
          color="inherit"
          target="_blank"
          mr={4}
        >
          <Trans>$CMAKE Pre-mine IS LIVE</Trans>
        </Link>
        <span>&#x25cf;</span>
        <Link href="javascript:void(0)" color="inherit" target="_blank" mr={4}>
          <Trans>AUDITS UNDERWAY</Trans>
        </Link>
        <span>&#x25cf;</span>
        <Link href="https://guild.xyz/mooncakefi" color="inherit" target="_blank" mr={4}>
          <Trans>Join our GUILD AND GET SPECIAL DISCORD ACCESS</Trans>
        </Link>
        <span>&#x25cf;</span>
      </Box>
    );
  };

  return (
    <Box>
      <Box id="marquee-div" py={2}>
        {[1, 2].map((index) => banner(index))}
      </Box>
    </Box>
  );
};

export default AppMiniBanner;
