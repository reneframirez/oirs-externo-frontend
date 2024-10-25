import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, MenuItem, Typography, Grid } from '@mui/material';
import Resultado from './Resultado.jsx';

const Busqueda = () => {
  const [data, setData] = useState({
    codigo: "12345",
    folio: "67890",
    tipoDocumento: "RUT",
    numeroDocumento: "12345678-9",
    nombreRazonSocial: "Juan",
    apellidoPaterno: "González",
    apellidoMaterno: "Pérez",
  });

  const [options, setOptions] = useState({
    tipoDocumento: ["RUT", "Pasaporte"],
    tipoSolicitud: [],
    estado: [],
    region: []
  });

  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    // Simulando la carga de datos desde un servicio JSON
    const fetchOptions = async () => {
      const tipoSolicitudOptions = ["Todas...", "Licencia", "Permiso"];
      const estadoOptions = ["Todas...", "Aprobado", "Rechazado", "En Proceso"];
      const regionOptions = ["Todas...", "Metropolitana", "Valparaíso", "Biobío"];

      setOptions({
        tipoDocumento: ["RUT", "Pasaporte"],
        tipoSolicitud: tipoSolicitudOptions,
        estado: estadoOptions,
        region: regionOptions
      });
    };

    fetchOptions();
  }, []);

  const handleBuscar = () => {
    setShowResults(true);
  };

  const handleLimpiar = () => {
    setData({
      codigo: "",
      folio: "",
      tipoDocumento: "RUT",
      numeroDocumento: "",
      nombreRazonSocial: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
    });
    setShowResults(false);
  };

  return (
    <Box 
      sx={{
        p: 3,
        backgroundColor: 'white',
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: '100%',
        margin: 'auto'
      }}
    >
      <Typography variant="h6" gutterBottom>
        Búsqueda
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField label="Código" variant="outlined" fullWidth value={data.codigo} onChange={(e) => setData({ ...data, codigo: e.target.value })} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField label="Folio" variant="outlined" fullWidth value={data.folio} onChange={(e) => setData({ ...data, folio: e.target.value })} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField select label="Tipo de Documento" value={data.tipoDocumento} variant="outlined" fullWidth onChange={(e) => setData({ ...data, tipoDocumento: e.target.value })}>
            {options.tipoDocumento.map((option, index) => (
              <MenuItem key={index} value={option}>{option}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField label="Número de Documento" variant="outlined" fullWidth value={data.numeroDocumento} onChange={(e) => setData({ ...data, numeroDocumento: e.target.value })} />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <TextField label="Nombre o Razón Social" variant="outlined" fullWidth value={data.nombreRazonSocial} onChange={(e) => setData({ ...data, nombreRazonSocial: e.target.value })} />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <TextField label="Apellido Paterno" variant="outlined" fullWidth value={data.apellidoPaterno} onChange={(e) => setData({ ...data, apellidoPaterno: e.target.value })} />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <TextField label="Apellido Materno" variant="outlined" fullWidth value={data.apellidoMaterno} onChange={(e) => setData({ ...data, apellidoMaterno: e.target.value })} />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <TextField select label="Tipo Solicitud" value={options.tipoSolicitud[0] || ""} variant="outlined" fullWidth onChange={(e) => setData({ ...data, tipoSolicitud: e.target.value })}>
            {options.tipoSolicitud.map((option, index) => (
              <MenuItem key={index} value={option}>{option}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <TextField select label="Estado" value={options.estado[0] || ""} variant="outlined" fullWidth onChange={(e) => setData({ ...data, estado: e.target.value })}>
            {options.estado.map((option, index) => (
              <MenuItem key={index} value={option}>{option}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <TextField select label="Región" value={options.region[0] || ""} variant="outlined" fullWidth onChange={(e) => setData({ ...data, region: e.target.value })}>
            {options.region.map((option, index) => (
              <MenuItem key={index} value={option}>{option}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button variant="contained" sx={{ backgroundColor: '#0D47A1', '&:hover': { backgroundColor: '#0B3C91' } }} onClick={handleBuscar}>
            Buscar
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleLimpiar}>
            Limpiar Búsqueda
          </Button>
        </Grid>
      </Grid>

      {showResults && <Resultado />}
    </Box>
  );
};

export default Busqueda;
