import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from '@mui/material';

function AdminDialog({ open, onClose, onSave, item, fields }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (item) {
      setFormData(item);
    } else {
      // Initialize form with empty values based on fields
      const emptyForm = fields.reduce((acc, field) => {
        acc[field.id] = '';
        return acc;
      }, {});
      setFormData(emptyForm);
    }
  }, [item, fields]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{item ? 'Edit' : 'Create'}</DialogTitle>
      <DialogContent>
        {fields.map((field) => (
          <TextField
            key={field.id}
            margin="dense"
            name={field.id}
            label={field.label}
            type={field.type || 'text'}
            fullWidth
            variant="standard"
            value={formData[field.id] || ''}
            onChange={handleChange}
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AdminDialog;
