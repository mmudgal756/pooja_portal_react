import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Box,
  Divider,
  MenuItem
} from '@mui/material';

function AdminDialog({ open, onClose, onSave, item, fields }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (item) {
      setFormData(item);
    } else {
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
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        {item ? 'Edit Item' : 'Create New Item'}
      </DialogTitle>
      <Divider />
      <DialogContent sx={{ p: 3 }}>
        <Box component="form" noValidate autoComplete="off">
          {fields.map((field) => {
            if (field.type === 'select') {
              return (
                <TextField
                  key={field.id}
                  select
                  margin="normal"
                  name={field.id}
                  label={field.label}
                  fullWidth
                  variant="outlined"
                  value={formData[field.id] || ''}
                  onChange={handleChange}
                >
                  {field.options && field.options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              )
            }
            return (
              <TextField
                key={field.id}
                margin="normal"
                name={field.id}
                label={field.label}
                type={field.type || 'text'}
                fullWidth
                variant="outlined"
                value={formData[field.id] || ''}
                onChange={handleChange}
                multiline={field.multiline}
                rows={field.rows}
              />
            )
          })}
        </Box>
      </DialogContent>
      <Divider />
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AdminDialog;
