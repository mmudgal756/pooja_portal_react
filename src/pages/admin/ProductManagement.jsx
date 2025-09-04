import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminTable from '../../common-components/AdminTable';
import AdminDialog from '../../common-components/AdminDialog';
import { Button } from '@mui/material';

const productColumns = [
  { id: 'name', label: 'Name' },
  { id: 'description', label: 'Description' },
  { id: 'price', label: 'Price' },
  { id: 'category', label: 'Category' },
];

const productFields = [
  { id: 'name', label: 'Name' },
  { id: 'description', label: 'Description' },
  { id: 'price', label: 'Price', type: 'number' },
  { id: 'category', label: 'Category' },
  { id: 'imageUrl', label: 'Image URL' },
];

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await axios.get('/api/products');
    setProducts(data);
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
      await axios.put(`/api/products/${item._id}`, item);
    } else {
      await axios.post('/api/products', item);
    }
    fetchProducts();
    handleClose();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/products/${id}`);
    fetchProducts();
  };

  return (
    <div>
      <Button variant="contained" onClick={() => handleOpen()}>Create Product</Button>
      <AdminTable 
        data={products} 
        columns={productColumns} 
        onEdit={handleOpen} 
        onDelete={handleDelete} 
      />
      <AdminDialog 
        open={open} 
        onClose={handleClose} 
        onSave={handleSave} 
        item={currentItem} 
        fields={productFields}
      />
    </div>
  );
}

export default ProductManagement;
