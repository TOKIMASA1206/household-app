
import { Card, CardContent, Stack, Typography } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Grid from '@mui/material/Grid';
import { Transaction } from '../types';
import { financeCalculations } from '../utils/financeCalculations';

interface MonthlySummaryProps {
  monthlyTransactions: Transaction[];
}

const MonthlySummary = ({monthlyTransactions}: MonthlySummaryProps) => {
  // 月ごとの収入、支出、残高を計算
    const {income, expense, balance} = financeCalculations(monthlyTransactions);

  return (
    <Grid container spacing={{ xs: 1, sm: 2 }} mb={2}>
      {/* 収入 */}
      <Grid size={{ xs:4 }} display={"flex"} flexDirection={"column"}>
        <Card sx={{ bgcolor: (theme) => theme.palette.incomeColor.main, color: 'white', borderRadius: '10px' }}>
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
              ${income}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* 支出 */}
      <Grid size={{ xs:4 }} display={"flex"} flexDirection={"column"}>
        <Card sx={{ bgcolor: (theme) => theme.palette.expenseColor.main, color: 'white', borderRadius: '10px' }}>
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
              ${expense}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* 残高 */}
      <Grid size={{ xs:4 }} display={"flex"} flexDirection={"column"}>
        <Card sx={{ bgcolor: (theme) => theme.palette.balanceColor.main, color: 'white', borderRadius: '10px' }}>
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
              ${balance}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MonthlySummary;
