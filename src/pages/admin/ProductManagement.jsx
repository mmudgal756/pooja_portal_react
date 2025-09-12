import React, { useState, useEffect } from 'react';
import { getProducts, saveProduct, deleteProduct, getCategories } from '../../services/ProductService';
import AdminTable from '../../common-components/AdminTable';
import AdminDialog from '../../common-components/AdminDialog';
import { Button, Box, Typography } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const productColumns = [
  { id: 'name', label: 'Name' },
  { id: 'description', label: 'Description' },
  { id: 'price', label: 'Price' },
  { id: 'category', label: 'Category' },
];

const productFields = [
  { id: 'name', label: 'Name' },
  { id: 'price', label: 'Price', type: 'number' },
  { id: 'category', label: 'Category', type: 'select' },
  { id: 'description', label: 'Description', multiline: true, rows: 4 },
];

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    const { data } = await getProducts();    
    setProducts(data);
  };

  const fetchCategories = async () => {
    try {
      const { data } = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
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
    await saveProduct(item);
    fetchProducts();
    handleClose();
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  const fieldsWithCategories = productFields.map(field =>
    field.id === 'category' ? { ...field, options: categories.map(c => c.name) } : field
  );

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5">Product Management</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
        >
          Create Product
        </Button>
      </Box>
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
        fields={fieldsWithCategories}
      />
    </Box>
  );
}

export default ProductManagement;
