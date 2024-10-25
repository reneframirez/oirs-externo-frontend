import React, { useState } from 'react';
import { Button, Box, Typography, TextField, Select, MenuItem, InputLabel, FormControl, Divider } from '@mui/material';
import { styled } from '@mui/system';
import { UserIcon, MailIcon, ClipboardIcon, XCircleIcon, SaveIcon } from 'lucide-react';
import ConfirmDialog from '../../../../components/ConfirmDialog';
import AlertDialog from '../../../../components/AlertDialog';
import { red } from '@mui/material/colors';

const Container = styled(Box)({
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  width: '100%',
});

const ButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '20px',
});

const Asterisk = styled('span')({
  color: red[500],
});

const DerivarGenerar = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedUsuario, setSelectedUsuario] = useState('');
  const [fundamento, setFundamento] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState('');

  const usuariosPorRegion = {
    'region1': ['Usuario 1A', 'Usuario 1B'],
    'region2': ['Usuario 2A', 'Usuario 2B'],
    'region3': ['Usuario 3A', 'Usuario 3B'],
  };

  // Maneja la selección de la opción (Generar Respuesta o Derivar Solicitud)
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Maneja la acción de cancelar con confirmación
  const handleCancelClick = () => {
    setConfirmAction(() => handleCancel);
    setConfirmOpen(true);
  };

  // Maneja la acción de grabar respuesta con validación y confirmación
  const handleGrabarClick = () => {
    if (selectedOption === 'generar' && !respuesta) {
      setAlertContent('Por favor, complete el campo de respuesta antes de grabar.');
      setAlertOpen(true);
      return;
    }
    setConfirmAction(() => handleGrabar);
    setConfirmOpen(true);
  };

  // Maneja la acción de derivar solicitud con validación y confirmación
  const handleDerivarClick = () => {
    if (!selectedRegion || !selectedUsuario || !fundamento) {
      setAlertContent('Por favor, complete todos los campos antes de derivar.');
      setAlertOpen(true);
      return;
    }
    setConfirmAction(() => handleDerivar);
    setConfirmOpen(true);
  };

  // Maneja la confirmación del diálogo
  const handleConfirm = () => {
    if (confirmAction) confirmAction();
    setConfirmOpen(false);
  };

  // Acción de cancelar
  const handleCancel = () => {
    // Lógica adicional si es necesario
    setConfirmOpen(false);
  };

  // Acción de grabar respuesta
  const handleGrabar = () => {
    // Lógica para grabar la respuesta
    console.log('Respuesta grabada:', respuesta);
    setConfirmOpen(false);
  };

  // Acción de derivar solicitud
  const handleDerivar = () => {
    // Lógica para derivar la solicitud
    console.log('Solicitud derivada a:', selectedUsuario, 'con fundamento:', fundamento);
    setConfirmOpen(false);
  };

  // Maneja el cambio de región y reinicia el usuario seleccionado
  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    setSelectedUsuario(''); // Reiniciar el usuario seleccionado al cambiar la región
  };

  return (
    <Container>
      <ButtonContainer>
        <Button
          variant="contained"
          color={selectedOption === 'generar' ? 'primary' : 'inherit'}
          onClick={() => handleOptionSelect('generar')}
          startIcon={<ClipboardIcon style={{ marginRight: '8px' }} />}
        >
          Generar Respuesta
        </Button>
        <Button
          variant="contained"
          color={selectedOption === 'derivar' ? 'primary' : 'inherit'}
          onClick={() => handleOptionSelect('derivar')}
          startIcon={<MailIcon style={{ marginRight: '8px' }} />}
        >
          Derivar Solicitud
        </Button>
      </ButtonContainer>

      <Divider />

      {selectedOption === 'generar' && (
        <Box mt={3}>
          <Typography variant="h6">Generación de Respuesta</Typography>
          <TextField
            label={
              <>
                Respuesta <Asterisk>*</Asterisk>
              </>
            }
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            value={respuesta}
            onChange={(e) => setRespuesta(e.target.value)}
          />
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button variant="contained" color="primary" startIcon={<XCircleIcon />} onClick={handleCancelClick}>
              Cancelar
            </Button>
            <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleGrabarClick}>
              Grabar
            </Button>
          </Box>
        </Box>
      )}

      {selectedOption === 'derivar' && (
        <Box mt={3}>
          <Typography variant="h6">Derivación de Solicitud Ciudadana</Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Recuerde que la primera gestión es la entrevista al usuario, y solo una vez efectuada aquella, puede solicitar el informe al defensor reclamado, diligencia conque empieza a finalizar el plazo de investigación.
          </Typography>
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor="region-select">
              Región <Asterisk>*</Asterisk>
            </InputLabel>
            <Select
              label="Región"
              value={selectedRegion}
              onChange={handleRegionChange}
              inputProps={{ id: 'region-select' }}
            >
              <MenuItem value="">Seleccionar...</MenuItem>
              <MenuItem value="region1">Región 1</MenuItem>
              <MenuItem value="region2">Región 2</MenuItem>
              <MenuItem value="region3">Región 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal" variant="outlined" disabled={!selectedRegion}>
            <InputLabel htmlFor="usuario-select">
              Usuario <Asterisk>*</Asterisk>
            </InputLabel>
            <Select
              label="Usuario"
              value={selectedUsuario}
              onChange={(e) => setSelectedUsuario(e.target.value)}
              inputProps={{ id: 'usuario-select' }}
            >
              <MenuItem value="">Seleccionar...</MenuItem>
              {usuariosPorRegion[selectedRegion]?.map((usuario, index) => (
                <MenuItem key={index} value={usuario}>{usuario}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label={
              <>
                Fundamento <Asterisk>*</Asterisk>
              </>
            }
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            value={fundamento}
            onChange={(e) => setFundamento(e.target.value)}
          />
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button variant="contained" color="primary" startIcon={<XCircleIcon />} onClick={handleCancelClick}>
              Cancelar
            </Button>
            <Button variant="contained" color="primary" startIcon={<SaveIcon />} onClick={handleDerivarClick}>
              Derivar
            </Button>
          </Box>
        </Box>
      )}

      <ConfirmDialog
        open={confirmOpen}
        title="DEFENSORÍA PENAL PÚBLICA"
        content="¿Está seguro de que desea realizar esta acción?"
        onConfirm={handleConfirm}
        onCancel={() => setConfirmOpen(false)}
      />

      <AlertDialog
        open={alertOpen}
        content={alertContent}
        onClose={() => setAlertOpen(false)}
      />
    </Container>
  );
};

export default DerivarGenerar;
