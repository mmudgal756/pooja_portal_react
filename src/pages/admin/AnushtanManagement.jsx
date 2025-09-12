import React, { useState, useEffect } from 'react';
import { getAnusthans, saveAnushtan, deleteAnushtan, getCategories } from '../../services/AnusthanService';
import AdminTable from '../../common-components/AdminTable';
import AdminDialog from '../../common-components/AdminDialog';
import { Button, Box, Typography } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const anushtanColumns = [
  { id: 'name', label: 'Name' },
  { id: 'description', label: 'Description' },
  { id: 'price', label: 'Price' },
  { id: 'category', label: 'Category' },
];

const anushtanFields = [
  { id: 'name', label: 'Name' },
  { id: 'price', label: 'Price', type: 'number' },
  { id: 'category', label: 'Category', type: 'select' },
  { id: 'description', label: 'Description', multiline: true, rows: 4 },
];

function AnushtanManagement() {
  const [anushtans, setAnushtans] = useState([]);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    fetchAnushtans();
    fetchCategories();
  }, []);

  const fetchAnushtans = async () => {
    const { data } = await getAnusthans();    
    setAnushtans(data);
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
    await saveAnushtan(item);
    fetchAnushtans();
    handleClose();
  };

  const handleDelete = async (id) => {
    await deleteAnushtan(id);
    fetchAnushtans();
  };

  const fieldsWithCategories = anushtanFields.map(field =>
    field.id === 'category' ? { ...field, options: categories.map(c => c.name) } : field
  );

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h5">Anushtan Management</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
        >
          Create Anushtan
        </Button>
      </Box>
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
        fields={fieldsWithCategories}
      />
    </Box>
  );
}

export default AnushtanManagement;
