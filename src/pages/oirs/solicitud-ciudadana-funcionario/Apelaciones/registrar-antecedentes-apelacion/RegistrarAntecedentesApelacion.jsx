import React, { useState } from 'react';
import { Box, Grid, Button, Typography } from '@mui/material';
import ResolucionSection from '../../../../../components/ResolucionSection';
import UploadButton from '../../../../../components/UploadButton';
import ConfirmDialog from '../../../../../components/ConfirmDialog';
import AlertDialog from '../../../../../components/AlertDialog';
import { CancelButton, SaveButton } from '../../../../../components/CustomButtons';
import LoadingModal from '../../../../../components/LoadingModal';

const buttonStyles = {
  backgroundColor: 'darkblue',
  color: 'white',
  '&:hover': { backgroundColor: 'blue' },
};

const RegistrarAntecedentesApelacion = () => {
    const [showResolutionInfo, setShowResolutionInfo] = useState(false);
    const [showResolutionInfo2, setShowResolutionInfo2] = useState(false);
    const [showResolutionInfo3, setShowResolutionInfo3] = useState(false);
    const [showResolutionInfo4, setShowResolutionInfo4] = useState(false);
    const [expediente, setExpediente] = useState(null);
    const [otroArchivo, setOtroArchivo] = useState(null);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertContent, setAlertContent] = useState('');
    const [loading, setLoading] = useState(false);

  const handleSendResolution = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResolutionInfo2(true);
    }, 1000);
  };

  const handleSendResolution2 = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResolutionInfo4(true);
    }, 1000);
  };

  const handleSave = () => {
      openConfirmDialog();
  };
  
 

  const openConfirmDialog = () => {
    setConfirmOpen(true);
  };

  const handleConfirm = () => {
    console.log('Documento guardado con éxito');
    setConfirmOpen(false);
    setAlertContent('La respuesta ha sido guardada exitosamente.');
    setAlertOpen(true);
  };

  const handleCancel = () => {
    setConfirmOpen(false);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Ingresar Resolución
            </Typography>
        </Grid>
        <Grid item xs={12}>
          <ResolucionSection
            showResolutionInfo={showResolutionInfo}
            setShowResolutionInfo={setShowResolutionInfo}
            showResolutionInfo2={showResolutionInfo2}
            setShowResolutionInfo2={setShowResolutionInfo2}
            handleSendResolution={handleSendResolution}
            buttonStyles={buttonStyles}
          />
        </Grid>

      </Grid>

      <Grid container spacing={3}>
      <Grid item xs={12}>
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Ingresar Resolución
            </Typography>
        </Grid>
        <Grid item xs={12}>
          <ResolucionSection
            showResolutionInfo={showResolutionInfo3}
            setShowResolutionInfo={setShowResolutionInfo3}
            showResolutionInfo2={showResolutionInfo4}
            setShowResolutionInfo2={setShowResolutionInfo4}
            handleSendResolution={handleSendResolution2}
            buttonStyles={buttonStyles}
          />
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <CancelButton onClick={handleCancel} />
          <SaveButton onClick={handleSave} />
        </Grid>
      </Grid>

      <AlertDialog
        open={alertOpen}
        content={alertContent}
        onClose={() => setAlertOpen(false)}
      />
      <ConfirmDialog
        open={confirmOpen}
        content="¿Está seguro de que desea realizar esta acción?"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      <LoadingModal open={loading} />
    </Box>
  );
};

export default RegistrarAntecedentesApelacion;
