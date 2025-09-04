import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, Paper } from '@mui/material';
import ProductManagement from './ProductManagement';
import AnushtanManagement from './AnushtanManagement';

function Admin() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', p: 3, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Panel
      </Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="admin tabs">
            <Tab label="Products" />
            <Tab label="Anushtan" />
          </Tabs>
        </Box>
        <Box sx={{ pt: 2 }}>
          {value === 0 && <ProductManagement />}
          {value === 1 && <AnushtanManagement />}
        </Box>
      </Paper>
    </Box>
  );
}

export default Admin;
