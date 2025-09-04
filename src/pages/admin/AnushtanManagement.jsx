import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminTable from '../../common-components/AdminTable';
import AdminDialog from '../../common-components/AdminDialog';
import { Button } from '@mui/material';

const anushtanColumns = [
  { id: 'name', label: 'Name' },
  { id: 'description', label: 'Description' },
  { id: 'price', label: 'Price' },
];

const anushtanFields = [
  { id: 'name', label: 'Name' },
  { id: 'description', label: 'Description' },
  { id: 'price', label: 'Price', type: 'number' },
  { id: 'imageUrl', label: 'Image URL' },
];

function AnushtanManagement() {
  const [anushtans, setAnushtans] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    fetchAnushtans();
  }, []);

  const fetchAnushtans = async () => {
    const { data } = await axios.get('http://localhost:3000/api/products/category/Anuthans');
    setAnushtans(data);
  };

  const handleOpen = (item = null) => {
    setCurrentItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentItem(null);
  };

  const handleSave = async (item) => {
    if (item._id) {
      await axios.put(`http://localhost:3000/api/products/${item._id}`, item);
    } else {
      await axios.post('http://localhost:3000/api/products', { ...item, category: 'Anuthans' });
    }
    fetchAnushtans();
    handleClose();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/api/products/${id}`);
    fetchAnushtans();
  };

  return (
    <div>
      <Button variant="contained" onClick={() => handleOpen()}>Create Anushtan</Button>
      <AdminTable 
        data={anushtans} 
        columns={anushtanColumns} 
        onEdit={handleOpen} 
        onDelete={handleDelete} 
      />
      <AdminDialog 
        open={open} 
        onClose={handleClose} 
        onSave={handleSave} 
        item={currentItem} 
        fields={anushtanFields}
      />
    </div>
  );
}

export default AnushtanManagement;
