import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BarChart from './BarChart';
import DataTable from './DataTable';
import DoughnutChart from './DoughnutChart';

const Dashboard = () => {
  const [data, setData] = useState({
    customerType: [],
    accountIndustry: [],
    team: [],
    productLine: []
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const customerTypeColumns = ['closed_fiscal_quarter', 'Cust_Type', 'count', 'acv'];
  const accountIndustryColumns = ['closed_fiscal_quarter', 'Acct_Industry', 'count', 'acv'];
  const teamColumns = ['closed_fiscal_quarter', 'Team', 'count', 'acv'];
  const productLineColumns = ['closed_fiscal_quarter', 'ACV_Range', 'count', 'acv'];

  const barData = data.customerType.map(d => ({
    quarter: d.closed_fiscal_quarter,
    acv: d.acv,
    opps: d.count,
    percentage: ((d.acv / data.customerType.reduce((acc, cur) => acc + cur.acv, 0)) * 100).toFixed(2) + '%',
    type: d.Cust_Type
  }));

  const doughnutData = [
    { type: 'Existing Customer', value: data.customerType.filter(d => d.Cust_Type === 'Existing Customer').reduce((acc, cur) => acc + cur.acv, 0) },
    { type: 'New Customer', value: data.customerType.filter(d => d.Cust_Type === 'New Customer').reduce((acc, cur) => acc + cur.acv, 0) }
  ];

  return (
    <Container maxWidth="xl" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '16px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Won ACV Mix by Cust Type
      </Typography>
      <Grid container spacing={2} sx={{ flex: '1 0 auto' }}>
        <Grid item xs={12} md={8}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <BarChart data={barData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <DoughnutChart data={doughnutData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Card sx={{ marginTop: 2, flex: '1 0 auto' }}>
        <CardContent>
          <DataTable data={data.customerType} columns={customerTypeColumns} />
        </CardContent>
      </Card>
    </Container>
  );
}

export default Dashboard;
