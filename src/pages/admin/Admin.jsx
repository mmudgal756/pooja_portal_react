import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import ProductManagement from './ProductManagement';
import AnushtanManagement from './AnushtanManagement';

function Admin() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="admin tabs">
          <Tab label="Products" />
          <Tab label="Anushtan" />
        </Tabs>
      </Box>
      {value === 0 && <ProductManagement />}
      {value === 1 && <AnushtanManagement />}
    </Box>
  );
}

export default Admin;
