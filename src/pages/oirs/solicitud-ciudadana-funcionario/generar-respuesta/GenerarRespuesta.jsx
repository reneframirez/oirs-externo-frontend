import React, { useState } from 'react';
import { TextField, MenuItem, Grid, Typography, Box, DialogActions, Button, Modal } from '@mui/material';
import UploadButton from '../../../../components/UploadButton';
import UploadResButton from '../../../../components/ResolucionRespuestaButton';
import ConfirmDialog from '../../../../components/ConfirmDialog';
import AlertDialog from '../../../../components/AlertDialog';
import { CancelButton, SaveButton } from '../../../../components/CustomButtons';
import DocumentEditor from '../../../../components/DocumentEditor';
import LoadingModal from '../../../../components/LoadingModal';
import axios from 'axios';

const buttonStyles = {
  backgroundColor: 'darkblue',
  color: 'white',
  '&:hover': { backgroundColor: 'blue' },
};

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
  const [modalOpen, setModalOpen] = useState(false);
  const [showResolutionInfo, setShowResolutionInfo] = useState(false);
  const [showResolutionInfo2, setShowResolutionInfo2] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const validateFields = () => {
    let newErrors = {};
    if (!numeroDocumento) newErrors.numeroDocumento = true;
    if (!fechaDocumento) newErrors.fechaDocumento = true;
    if (!decision) newErrors.decision = true;
    if (!fundamento) newErrors.fundamento = true;
    if (!adjunto) newErrors.adjunto = true;
    if (!expediente) newErrors.expediente = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateFields()) {
      setAlertContent('Por favor, complete todos los campos obligatorios antes de guardar.');
      setAlertOpen(true);
      return;
    }
    openConfirmDialog();
  };

  const openConfirmDialog = () => {
    setConfirmAction(() => handleConfirm);
    setConfirmOpen(true);
  };

  const handleConfirm = async () => {
    try {
      // Lógica para guardar la respuesta en el backend
      await axios.post('/api/saveResponse', {
        numeroDocumento,
        fechaDocumento,
        decision,
        fundamento,
        adjunto,
        expediente,
        otroArchivo,
      });
      console.log('Respuesta guardada con éxito');
      setConfirmOpen(false);
      setAlertContent('La respuesta ha sido guardada exitosamente.');
      setAlertOpen(true);
    } catch (error) {
      console.error('Error al guardar la respuesta:', error);
      setConfirmOpen(false);
      setAlertContent('Ocurrió un error al guardar la respuesta. Por favor, intente nuevamente.');
      setAlertOpen(true);
    }
  };

  const handleCancel = () => {
    setConfirmAction(() => () => setConfirmOpen(false));
    setConfirmOpen(true);
  };

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

  const handleSendResolution = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResolutionInfo2(true);
    }, 3000);
  };

  return (
    <Box component="form" noValidate autoComplete="off" sx={{ p: 3, backgroundColor: 'white', borderRadius: 2, boxShadow: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} container spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="body1">
              Gestión resolución de respuesta <Typography component="span" color="error">*</Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" onClick={handleModalOpen} sx={buttonStyles}>
              Editar Resolución
            </Button>
          </Grid>
          <Grid item>
            {showResolutionInfo && (
              <Button variant="outlined" color="primary" onClick={handleSendResolution} sx={buttonStyles}>
                Enviar resolución al Gestor
              </Button>
            )}
          </Grid>
        </Grid>
        {showResolutionInfo2 && (
          <Grid item>
            <Button variant="outlined" color="primary" sx={{ ...buttonStyles, ml: 2 }}>
              Descargar
            </Button>
          </Grid>
        )}
        {showResolutionInfo2 && (
          <Grid item xs={12} sx={{ display: 'flex', gap: 2 }}>
            <Typography variant="body">Número resolución: 1205</Typography>
            <Typography variant="body">Fecha: 28-10-2024</Typography>
          </Grid>
        )}
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
            defaultValue=""
          >
            <MenuItem value="" disabled>
              Seleccione una opción
            </MenuItem>
            <MenuItem value="Acoge">Acoge</MenuItem>
            <MenuItem value="Rechaza">Rechaza</MenuItem>
            <MenuItem value="Desiste">Desiste</MenuItem>
            <MenuItem value="Declara inadmisible">Declara inadmisible</MenuItem>
          </TextField>
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <CancelButton onClick={handleCancel} />
        <SaveButton onClick={handleSave} />
      </Box>
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
      <LoadingModal open={loading} />
      <Modal open={modalOpen} onClose={handleModalClose}>
        <Box sx={{ p: 4, backgroundColor: 'white', borderRadius: 2, boxShadow: 3, width: '80%', margin: 'auto', mt: 5 }}>
          <Typography variant="h6" gutterBottom>
            Editor de Documento
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
    </Box>
  );
};

export default GenerarRespuesta;
