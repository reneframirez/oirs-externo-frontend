import React, { useState } from 'react';
import { TextField, MenuItem, Grid, Typography, Box, DialogActions } from '@mui/material';
import UploadButton from '../../../../components/UploadButton';
import ConfirmDialog from '../../../../components/ConfirmDialog';
import AlertDialog from '../../../../components/AlertDialog';
import { CancelButton, SaveButton } from '../../../../components/CustomButtons';

const GenerarRespuesta = () => {
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [fechaDocumento, setFechaDocumento] = useState('');
  const [decision, setDecision] = useState('');
  const [fundamento, setFundamento] = useState('');
  const [adjunto, setAdjunto] = useState(null);
  const [expediente, setExpediente] = useState(null);
  const [otroArchivo, setOtroArchivo] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState('');

  const [errors, setErrors] = useState({});

  const handleSave = () => {
    let newErrors = {};
    if (!numeroDocumento) newErrors.numeroDocumento = true;
    if (!fechaDocumento) newErrors.fechaDocumento = true;
    if (!decision) newErrors.decision = true;
    if (!fundamento) newErrors.fundamento = true;
    if (!adjunto) newErrors.adjunto = true;
    if (!expediente) newErrors.expediente = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setAlertContent('Por favor, complete todos los campos obligatorios antes de guardar.');
      setAlertOpen(true);
      return;
    }

    setErrors({});
    setConfirmAction(() => handleConfirm);
    setConfirmOpen(true);
  };

  const handleConfirm = () => {
    // Lógica para guardar la respuesta
    console.log('Respuesta guardada con éxito');
    setConfirmOpen(false);
    setAlertContent('La respuesta ha sido guardada exitosamente.');
    setAlertOpen(true);
  };

  const handleCancel = () => {
    setConfirmAction(() => () => setConfirmOpen(false));
    setConfirmOpen(true);
  };

  return (
    <Box component="form" noValidate autoComplete="off" sx={{ p: 3, backgroundColor: 'white', borderRadius: 2, boxShadow: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Resolución Exenta"
            value={numeroDocumento}
            onChange={(e) => setNumeroDocumento(e.target.value)}
            required
            error={!!errors.numeroDocumento}
            helperText={errors.numeroDocumento ? 'Este campo es obligatorio' : ''}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Fecha Documento"
            type="date"
            value={fechaDocumento}
            onChange={(e) => setFechaDocumento(e.target.value)}
            InputLabelProps={{ shrink: true }}
            required
            error={!!errors.fechaDocumento}
            helperText={errors.fechaDocumento ? 'Este campo es obligatorio' : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            select
            fullWidth
            label="Decisión"
            value={decision}
            onChange={(e) => setDecision(e.target.value)}
            required
            error={!!errors.decision}
            helperText={errors.decision ? 'Este campo es obligatorio' : ''}
          >
            <MenuItem value="Acoge">Acoge</MenuItem>
            <MenuItem value="Rechaza">Rechaza</MenuItem>
            <MenuItem value="Desiste">Desiste</MenuItem>
            <MenuItem value="Declara inadmisible">Declara inadmisible</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="body1">
            Resolución<Typography component="span" color="error">*</Typography>
          </Typography>            
          <UploadButton label="Adjunto" file={adjunto} setFile={setAdjunto} required error={!!errors.adjunto} helperText={errors.adjunto ? 'Este campo es obligatorio' : ''} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Fundamento resumido de la decisión"
            value={fundamento}
            onChange={(e) => setFundamento(e.target.value)}
            multiline
            rows={4}
            required
            error={!!errors.fundamento}
            helperText={errors.fundamento ? 'Este campo es obligatorio' : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Carga expediente administrativo - Solo para uso interno</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Expediente completo <Typography component="span" color="error">*</Typography>
          </Typography>
          <UploadButton label="Seleccionar archivo" file={expediente} setFile={setExpediente} required error={!!errors.expediente} helperText={errors.expediente ? 'Este campo es obligatorio' : ''} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            Otro Archivo
          </Typography>
          <UploadButton label="Seleccionar archivo" file={otroArchivo} setFile={setOtroArchivo} />
        </Grid>
      </Grid>
      <DialogActions sx={{ mt: 3 }}>
        <CancelButton onClick={handleCancel} />
        <SaveButton onClick={handleSave} />
      </DialogActions>
      <AlertDialog
        open={alertOpen}
        content={alertContent}
        onClose={() => setAlertOpen(false)}
      />
      <ConfirmDialog
        open={confirmOpen}
        content="¿Está seguro de que desea realizar esta acción?"
        onConfirm={handleConfirm}
        onCancel={() => setConfirmOpen(false)}
      />
    </Box>
  );
};

export default GenerarRespuesta;
