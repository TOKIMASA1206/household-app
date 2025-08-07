
import { Card, CardContent, Stack, Typography } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Grid from '@mui/material/Grid';

const MonthlySummary = () => {
  return (
    <Grid container spacing={{ xs: 1, sm: 2 }} mb={2}>
      {/* 収入 */}
      <Grid size={{ xs:4 }} display={"flex"} flexDirection={"column"}>
        <Card sx={{ bgcolor: '#388e3c', color: 'white', borderRadius: '10px' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <ArrowUpwardIcon sx={{ fontSize: '2rem' }} />
              <Typography>収入</Typography>
            </Stack>
            <Typography
              textAlign="right"
              variant="h5"
              fontWeight="bold"
              sx={{
                wordBreak: 'break-word',
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
              }}
            >
              $300
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* 支出 */}
      <Grid size={{ xs:4 }} display={"flex"} flexDirection={"column"}>
        <Card sx={{ bgcolor: '#d32f2f', color: 'white', borderRadius: '10px' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <ArrowDownwardIcon sx={{ fontSize: '2rem' }} />
              <Typography>支出</Typography>
            </Stack>
            <Typography
              textAlign="right"
              variant="h5"
              fontWeight="bold"
              sx={{
                wordBreak: 'break-word',
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
              }}
            >
              $150
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* 残高 */}
      <Grid size={{ xs:4 }} display={"flex"} flexDirection={"column"}>
        <Card sx={{ bgcolor: '#1976d2', color: 'white', borderRadius: '10px' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <AccountBalanceIcon sx={{ fontSize: '2rem' }} />
              <Typography>残高</Typography>
            </Stack>
            <Typography
              textAlign="right"
              variant="h5"
              fontWeight="bold"
              sx={{
                wordBreak: 'break-word',
                fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
              }}
            >
              $150
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MonthlySummary;
