import { useState, useEffect } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';
import { ChevronDown, Save, ArrowLeft } from 'lucide-react';
import AlertDialog from '../../../../components/AlertDialog';
import ConfirmDialog from '../../../../components/ConfirmDialog';

const IngresoTipificacion = () => {
  const [tipoSolicitud, setTipoSolicitud] = useState('');
  const [especificacion, setEspecificacion] = useState('');
  const [justificacion, setJustificacion] = useState('');
  const [tipoSolicitudOptions, setTipoSolicitudOptions] = useState([]);
  const [especificacionOptions, setEspecificacionOptions] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertContent, setAlertContent] = useState('');
  const [confirmOpen, setConfirmOpen] = useState(false);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = () => {
      setTipoSolicitudOptions([
        { value: 'Reclamo por Defensa', label: 'Reclamo por Defensa' },
        { value: 'Reclamo General', label: 'Reclamo General' },
        { value: 'Petición', label: 'Petición' },
      ]);
      setEspecificacionOptions([
        { value: '', label: 'Seleccionar...' },
        { value: 'Condena injusta', label: 'Condena injusta' },
        {
          value: 'Defensa no le informa de su causa',
          label: 'Defensa no le informa de su causa',
        },
        {
          value: 'Defensa no realiza diligencias oportunamente',
          label: 'Defensa no realiza diligencias oportunamente',
        },
        {
          value: 'Defensor no agiliza la libertad del imputado',
          label: 'Defensor no agiliza la libertad del imputado',
        },
        {
          value: 'Defensor no hace nada por el avance de la causa',
          label: 'Defensor no hace nada por el avance de la causa',
        },
        {
          value: 'Defensor no presenta recurso, siendo necesario',
          label: 'Defensor no presenta recurso, siendo necesario',
        },
        {
          value: 'Defensor no se entrevista con imputado (a)',
          label: 'Defensor no se entrevista con imputado (a)',
        },
        {
          value: 'Defensor no solicita peritajes, siendo necesario',
          label: 'Defensor no solicita peritajes, siendo necesario',
        },
        {
          value: 'Defensor no visita al o a la imputado(a) en prisión',
          label: 'Defensor no visita al o a la imputado(a) en prisión',
        },
        {
          value: 'Mal trato del o de la defensor',
          label: 'Mal trato del o de la defensor',
        },
        { value: 'Mala defensa en audiencia', label: 'Mala defensa en audiencia' },
        { value: 'Otro Reclamo por Defensa', label: 'Otro Reclamo por Defensa' },
        {
          value: 'Postergación de citas de entrevista en oficina',
          label: 'Postergación de citas de entrevista en oficina',
        },
        {
          value: 'Se solicita cambio de Defensor',
          label: 'Se solicita cambio de Defensor',
        },
      ]);
    };

    fetchData();
  }, []);

  const handleTipoSolicitudChange = (event) => {
    setTipoSolicitud(event.target.value);
  };

  const handleEspecificacionChange = (event) => {
    setEspecificacion(event.target.value);
  };

  const handleJustificacionChange = (event) => {
    setJustificacion(event.target.value);
  };

  const handleSave = () => {
    let errorMessage = '';
    if (!tipoSolicitud) {
      errorMessage += 'Tipo Solicitud es obligatorio.\n';
    }
    if (!especificacion) {
      errorMessage += 'Especificación es obligatoria.\n';
    }
    if (!justificacion) {
      errorMessage += 'Justificación de la Especificación es obligatoria.\n';
    }
    if (errorMessage) {
      setAlertContent(errorMessage);
      setAlertOpen(true);
      return;
    }
    // Open confirm dialog before saving
    setConfirmOpen(true);
  };

  const handleConfirmSave = () => {
    // Logic to save the selected values
    console.log('Tipo Solicitud:', tipoSolicitud);
    console.log('Especificación:', especificacion);
    console.log('Justificación:', justificacion);
    setConfirmOpen(false);
    setAlertContent('Grabado con éxito, solicitud pasa a estado Solicitud Derivada');
    setAlertOpen(true);
  };

  const handleBack = () => {
    // Logic to navigate back
    console.log('Volver');
  };

  return (
    <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 4,
          alignItems: { xs: 'stretch', sm: 'center' },
        }}
      >
        <FormControl variant="outlined" sx={{ flex: 1 }} required>
          <InputLabel id="tipo-solicitud-label">Tipo Solicitud</InputLabel>
          <Select
            labelId="tipo-solicitud-label"
            id="tipo-solicitud"
            value={tipoSolicitud}
            label="Tipo Solicitud"
            onChange={handleTipoSolicitudChange}
            IconComponent={ChevronDown}
          >
            {tipoSolicitudOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" sx={{ flex: 1 }} required>
          <InputLabel id="especificacion-label">Especificación</InputLabel>
          <Select
            labelId="especificacion-label"
            id="especificacion"
            value={especificacion}
            label="Especificación"
            onChange={handleEspecificacionChange}
            IconComponent={ChevronDown}
          >
            {especificacionOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <TextField
        id="justificacion"
        label="Justificación de la Especificación"
        value={justificacion}
        onChange={handleJustificacionChange}
        helperText={`${justificacion.length}/500 caracteres`}
        required
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          variant="outlined"
          sx={{
            maxWidth: '150px',
            fontSize: '0.875rem',
            padding: '6px 12px',
            borderColor: '#001f3f',
            color: '#001f3f',
          }}
          onClick={handleBack}
          startIcon={<ArrowLeft />}
        >
          Volver
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#001f3f',
            color: '#fff',
            maxWidth: '150px',
            fontSize: '0.875rem',
            padding: '6px 12px',
          }}
          onClick={handleSave}
          startIcon={<Save />}
        >
          Grabar
        </Button>
      </Box>

      <AlertDialog
        open={alertOpen}
        content={alertContent}
        onClose={() => setAlertOpen(false)}
      />

      <ConfirmDialog
        open={confirmOpen}
        content="¿Está seguro de que desea grabar la información?"
        onConfirm={handleConfirmSave}
        onCancel={() => setConfirmOpen(false)}
      />
    </Box>
  );
};

export default IngresoTipificacion;
