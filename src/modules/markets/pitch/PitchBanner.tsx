import { Trans } from '@lingui/macro';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { Link } from 'src/components/primitives/Link';

export const PitchBanner = () => {
  const isCustomBreakpoint = useMediaQuery('(min-width:1125px)');

  return (
    <Box
      sx={{
        pt: 5,
        mb: 10,
        px: {
          md: 6,
        },
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      <Box
        component={Link}
        href={'https://docs.mooncake.fi/token-overview/usdemcake-pre-mine-protocol-token'}
        sx={(theme) => ({
          borderRadius: {
            md: 4,
          },
          display: 'flex',
          backgroundColor: theme.palette.mode === 'dark' ? '#f7ab3f80' : '#f7ab3f60',
          position: 'relative',
          alignItems: {
            xs: 'none',
            xsm: 'center',
          },
          justifyContent: {
            xs: 'space-around',
            xsm: 'none',
          },
          flexDirection: {
            xs: 'column',
            xsm: 'row',
          },
          [theme.breakpoints.up(1125)]: {
            padding: {
              xs: '24px 24px 24px 230px',
              lg: '24px 32px 24px 240x',
            },
          },
          padding: {
            xs: '16px',
            xsm: '16px 16px 16px 180px',
            sm: '16px 24px 16px 188px',
            md: '22px 20px 22px 200px',
          },
          gap: {
            xs: 6,
          },
        })}
      >
        <Box
          component="img"
          src="/emcake-transparent.png"
          alt="ghost and coin"
          sx={{
            ['@media screen and (min-width: 1125px)']: {
              width: 240,
            },
            width: {
              xs: 198,
              xsm: 200,
              md: 240,
            },
            position: 'absolute',
            top: {
              xs: -56,
              xsm: -62,
              md: -63,
            },
            right: {
              xs: -14,
              xsm: 'unset',
            },
            left: {
              xsm: -10,
            },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            mr: {
              lg: '5%',
            },
            alignItems: {
              xs: 'none',
              md: 'middle',
            },
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            gap: {
              xs: 3,
            },
            height: '100%',
          }}
        >
          <Box
            sx={{
              pr: {
                xs: '140px',
                xsm: 0,
              },
              cursor: 'pointer',
              zIndex: 100,
              minWidth: {
                md: 232,
              },
              ['@media screen and (min-width: 1125px)']: {
                width: {
                  xs: '278px',
                  md: '450px',
                  lg: '600px',
                },
              },
            }}
          >
            <Typography
              sx={(theme) => ({
                [theme.breakpoints.up(1125)]: {
                  typography: 'h3',
                },
                typography: {
                  xs: 'subheader1',
                  md: 'h4',
                },
              })}
            >
              <Trans>Pre-Mine for $MCAKE is now live!</Trans>
            </Typography>
            <Typography
              sx={(theme) => ({
                [theme.breakpoints.up(1125)]: {
                  typography: 'description',
                },
                typography: {
                  xs: 'caption',
                },
              })}
              color="text.secondary"
            >
              You can now pre-mine for $MCAKE. Provide liquidty and farm $eMCAKE. $eMCAKE can be
              claimed for $MCAKE at a 1:1 ratio.
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          component={Link}
          size={isCustomBreakpoint ? 'medium' : 'large'}
          href={'https://docs.mooncake.fi/token-overview/usdemcake-pre-mine-protocol-token'}
          sx={{
            marginLeft: {
              xs: 'none',
              xsm: 'auto',
            },
            whiteSpace: 'no-wrap',
            minWidth: 'max-content',
          }}
        >
          <Trans>Learn More</Trans>
        </Button>
      </Box>
    </Box>
  );
};
