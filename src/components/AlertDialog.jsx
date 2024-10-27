import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

const AlertDialog = ({ open, content, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle style={{ backgroundColor: '#00274d', color: 'white' }}>Defensoría Penal Pública</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ textAlign: 'center', marginTop: '20px' }}>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" autoFocus style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}> 
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
