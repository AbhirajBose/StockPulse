import React from 'react';
import { Card, CardContent, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const InvestmentDashboard = () => {
  // Data for the doughnut chart
  const doughnutData = {
    labels: ['Stocks', 'Crypto', 'Cash', 'Other'],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: [
          '#A4D066', // Green
          '#FFC857', // Yellow
          '#5DADE2', // Blue
          '#FF5757', // Red
        ],
        borderWidth: 0,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    cutout: '60%',
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  // Mock data for trending values
  const trendingData = [
    { 
      name: 'Apple', 
      icon: '🍎', 
      price: 214.18, 
      balance: -214.18, 
      value: -214.18, 
      onWatchlist: true 
    },
    { 
      name: 'Amazon', 
      icon: '📦', 
      price: 197.16, 
      balance: -123.18, 
      value: 56.18, 
      onWatchlist: true 
    },
    { 
      name: 'Bitcoin', 
      icon: '₿', 
      price: 178.89, 
      balance: -214.19, 
      value: 198.19, 
      onWatchlist: true 
    },
  ];

  // Frequently viewed data
  const frequentlyViewed = [
    { name: 'Apple', icon: '🍎', price: 214.18, change: 1.01 },
    { name: 'Bitcoin', icon: '₿', price: 238.91, change: -2.67 },
    { name: 'Ethereum', icon: 'Ξ', price: 147.89, change: -5.34 },
    { name: 'Solana', icon: '◎', price: 189.90, change: 2.34 },
  ];

  return (
    <Box sx={{ bgcolor: '#121212', color: 'white', p: 2, minHeight: '100vh' }}>
      
      
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {/* Current Holdings Card */}
        <Card sx={{ bgcolor: '#1E1E1E', color: 'white', flex: '1 1 60%', minWidth: 300 }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 200, height: 200 }}>
              <Doughnut data={doughnutData} options={chartOptions} />
            </Box>
            <Box sx={{ ml: 4 }}>
              <Typography variant="h5" gutterBottom>
                Current Holdings
              </Typography>
              <Typography variant="subtitle1" color="#8FBCBB" gutterBottom>
                Total Profit/Loss:
              </Typography>
              <Typography variant="subtitle1" color="#8FBCBB" gutterBottom>
                Stock Holdings:
              </Typography>
              <Typography variant="subtitle1" color="#8FBCBB">
                Current Value:
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Frequently Viewed Card */}
        <Card sx={{ bgcolor: '#1E1E1E', color: 'white', flex: '1 1 30%', minWidth: 250 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              FREQUENTLY VIEWED
            </Typography>
            {frequentlyViewed.map((item) => (
              <Box key={item.name} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: '1.5rem', mr: 1 }}>{item.icon}</Typography>
                  <Typography>{item.name}</Typography>
                </Box>
                <Box>
                  <Typography>{item.price}</Typography>
                  <Typography 
                    sx={{ 
                      color: item.change >= 0 ? '#4CAF50' : '#F44336',
                      textAlign: 'right'
                    }}
                  >
                    {item.change >= 0 ? '+' : ''}{item.change}%
                  </Typography>
                </Box>
              </Box>
            ))}
          </CardContent>
        </Card>

        {/* Trending Values Card */}
        <Card sx={{ bgcolor: '#1E1E1E', color: 'white', flex: '1 1 100%' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              TRENDING VALUES
            </Typography>
            <TableContainer component={Paper} sx={{ bgcolor: 'transparent' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: '#9E9E9E' }}>Name</TableCell>
                    <TableCell sx={{ color: '#9E9E9E' }}>Price</TableCell>
                    <TableCell sx={{ color: '#9E9E9E' }}>Balance</TableCell>
                    <TableCell sx={{ color: '#9E9E9E' }}>Value</TableCell>
                    <TableCell sx={{ color: '#9E9E9E' }}>WatchList</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {trendingData.map((row) => (
                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: '1.5rem', mr: 1 }}>{row.icon}</Typography>
                        {row.name}
                      </TableCell>
                      <TableCell sx={{ color: 'white' }}>{row.price}</TableCell>
                      <TableCell sx={{ color: row.balance >= 0 ? '#4CAF50' : '#F44336' }}>
                        {row.balance}
                      </TableCell>
                      <TableCell sx={{ color: row.value >= 0 ? '#4CAF50' : '#F44336' }}>
                        {row.value}
                      </TableCell>
                      <TableCell sx={{ color: 'white' }}>
                        {row.onWatchlist ? '✅' : ''}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default InvestmentDashboard;