import React, { useState } from 'react';
import ConfirmDialog from '../../../../../components/ConfirmDialog';
import UploadButton from '../../../../../components/UploadButton';
import { TextField, MenuItem, Box } from '@mui/material';
import { BackButton, SaveButton } from '../../../../../components/CustomButtons';

const IngresarApelacion = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [fechaRecepcion, setFechaRecepcion] = useState('');
  const [quienApela, setQuienApela] = useState('Beneficiario');
  const [resumen, setResumen] = useState('');
  const [archivo, setArchivo] = useState(null);
  const [alertContent, setAlertContent] = useState('');

  const handleFileChange = (e) => {
    setArchivo(e.target.files[0]);
  };

  const handleSubmit = () => {
    setAlertContent('Por favor, complete todos los campos antes de derivar.');

    setDialogOpen(true);
  };

  const handleConfirm = () => {
    // Lógica para enviar la apelación
    console.log({ fechaRecepcion, quienApela, resumen, archivo });
    setDialogOpen(false);
  };

  const handleCancel = () => {
    setDialogOpen(false);
  };

  return (
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%' }}>
        <Box sx={{ display: 'flex', gap: 8, mt: 2 }}>
          <TextField
            label="Fecha recepción"
            type="date"
            value={fechaRecepcion}
            onChange={(e) => setFechaRecepcion(e.target.value)}
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            label="¿Quién apela?"
            select
            value={quienApela}
            onChange={(e) => setQuienApela(e.target.value)}
            required
            sx={{ width: 300 }}
          >
            <MenuItem value="Beneficiario">Beneficiario</MenuItem>
            <MenuItem value="Defensor">Defensor</MenuItem>
          </TextField>
        </Box>
      <TextField
        label="Resumen de la apelación"
        multiline
        minRows={3}
        value={resumen}
        onChange={(e) => setResumen(e.target.value)}
        required
      />
      <UploadButton onFileChange={handleFileChange} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <BackButton />
        <SaveButton onClick={handleSubmit} />
      </Box>
      <ConfirmDialog
        open={dialogOpen}
        onConfirm={handleConfirm}
        content="¿Está seguro de que desea realizar esta acción?"
        onCancel={handleCancel}
        title="Confirmar Creación de Apelación"
        description="¿Está seguro de que desea crear esta apelación?"
      />
    </Box>
  );
};

export default IngresarApelacion;
