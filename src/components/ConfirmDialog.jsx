import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

export const ConfirmDialog = ({ open = false, content = '', onConfirm = () => {}, onCancel = () => {} }) => {
  if (!open) return null;

  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle style={{ backgroundColor: '#00274d', color: 'white' }}>Defensoría Penal Pública</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ textAlign: 'center', marginTop: '20px' }}>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#1976d2', color: 'white' }}>
          Cancelar
        </Button>
        <Button onClick={onConfirm} color="primary" autoFocus style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};


export const ConfirmDialogMMR = ({ open = false, content = '', onConfirm = () => {}, onCancel = () => {} }) => {
  if (!open) return null;

  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle style={{ backgroundColor: '#00274d', color: 'white' }}>Defensoría Penal Pública</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ textAlign: 'center', marginTop: '20px' }}>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#1976d2', color: 'white' }}>
          Respondido MMR
        </Button>
        <Button onClick={onConfirm} color="primary" autoFocus style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
          Solicitar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default {ConfirmDialog, ConfirmDialogMMR};

