import React, { useState } from 'react';
import { Grid, Typography, Button, Modal, Box, DialogActions } from '@mui/material';
import DocumentEditor from './DocumentEditor';

const ResolucionSection = ({
  showResolutionInfo,
  setShowResolutionInfo,
  showResolutionInfo2,
  setShowResolutionInfo2,
  handleSendResolution,
  buttonStyles,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalSave = () => {
    // Lógica para guardar el documento desde el editor
    console.log('Documento editado guardado');
    setModalOpen(false);
    setShowResolutionInfo(true);
  };

  return (
    <>
      <Grid item xs={12} container spacing={2} alignItems="center">
        <Grid item>
          <Typography variant="body1">
            Gestión Documento de respuesta <Typography component="span" color="error">*</Typography>
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" onClick={handleModalOpen} sx={buttonStyles}>
            Editar Documento
          </Button>
        </Grid>
        <Grid item>
          {showResolutionInfo && (
            <Button variant="outlined" color="primary" onClick={handleSendResolution} sx={buttonStyles}>
              Enviar documento al Gestor
            </Button>
          )}
        </Grid>
      </Grid>
      {showResolutionInfo2 && (
        <Grid item>
          <Button gutterBottom variant="outlined" color="primary" sx={{ ...buttonStyles, ml: 2 }}>
            Descargar documento
          </Button>
        </Grid>
      )}
      {showResolutionInfo2 && (
        <Grid item xs={12} sx={{ display: 'flex', gap: 2 ,mt: 4 }} gutterBottom >
          <Typography variant="body" sx={{ fontWeight: 'bold' }}>Número documeto:</Typography>
          <Typography variant="body">1205</Typography>
          <Typography variant="body" sx={{ fontWeight: 'bold' }}>Fecha:</Typography>
          <Typography variant="body">28-10-2024</Typography>
        </Grid>
      )}
      <Modal open={modalOpen} onClose={handleModalClose}>
        <Box sx={{ p: 4, backgroundColor: 'white', borderRadius: 2, boxShadow: 3, width: '80%', margin: 'auto', mt: 5 }}>
          <Typography variant="h6" gutterBottom>
            Editar Documento Oficial Resolución / Oficio
          </Typography>
          <DocumentEditor />
          <DialogActions sx={{ mt: 3 }}>
            <Button onClick={handleModalClose} color="secondary" sx={buttonStyles}>
              Cancelar
            </Button>
            <Button onClick={handleModalSave} color="primary" variant="contained" sx={buttonStyles}>
              Grabar
            </Button>
          </DialogActions>
        </Box>
      </Modal>
    </>
  );
};

export default ResolucionSection;
