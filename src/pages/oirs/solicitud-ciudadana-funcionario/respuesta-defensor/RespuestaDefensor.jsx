import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import UploadButton from '../../../../components/UploadButton';
import ConfirmDialog from '../../../../components/ConfirmDialog';
import AlertDialog from '../../../../components/AlertDialog';
import { AlertCircle, CheckCircle } from 'lucide-react';

const RespuestaDefensor = () => {
  const [respuesta, setRespuesta] = useState('');
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState('');
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [showError, setShowError] = useState(false);

  const handleCancel = () => {
    setAlertContent('¿Está seguro de que desea cancelar?');
    setConfirmAction(() => handleConfirmCancel);
    setIsConfirmOpen(true);
  };

  const handleSave = () => {
    if (respuesta.trim() === '') {
      setAlertContent('Por favor, complete todos los campos antes de guardar.');
      setIsAlertOpen(true);
    } else {
      setAlertContent('¿Está seguro que desea grabar la respuesta?');
      setConfirmAction(() => handleConfirmSave);
      setIsConfirmOpen(true);
    }
  };

  const handleConfirmCancel = () => {
    console.log('Cancelado');
    setIsConfirmOpen(false);
  };

  const handleConfirmSave = () => {
    console.log('Respuesta guardada:', respuesta);
    setIsConfirmOpen(false);
    setShowError(false);
  };

  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };

  const handleConfirmClose = () => {
    setIsConfirmOpen(false);
  };

  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" gutterBottom>
        Generación de Respuesta
      </Typography>
      <TextField
        label="Respuesta"
        multiline
        rows={4}
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
        variant="outlined"
        fullWidth
        required
        error={showError && respuesta.trim() === ''}
        helperText={showError && respuesta.trim() === '' ? 'Este campo es obligatorio' : ''}
      />
      <UploadButton />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<AlertCircle />}
          onClick={handleCancel}
        >
          Cancelar
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<CheckCircle />}
          onClick={handleSave}
        >
          Grabar
        </Button>
      </Box>
      <AlertDialog
        open={isAlertOpen}
        content={alertContent}
        onClose={handleAlertClose}
      />
      <ConfirmDialog
        open={isConfirmOpen}
        content={alertContent}
        onConfirm={confirmAction}
        onCancel={handleConfirmClose}
      />
    </Box>
  );
};

export default RespuestaDefensor;
