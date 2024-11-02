import React, { useState } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, IconButton, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Search as SearchIcon, Eye as VisibilityIcon } from 'lucide-react';

const initialData = [
  { id: 53078, region: 'Coquimbo', usuario: 'Ren Ram UII', fechaApelacion: '30-10-2024', fechaTope: '19-11-2024', quienApela: 'Beneficiario', requerimiento: 'Defensa no le informa de su causa' },
  { id: 52858, region: 'Coquimbo', usuario: 'RODRIGO FRANCISCO SALDIVAR AVALOS', fechaApelacion: '30-10-2024', fechaTope: '19-11-2024', quienApela: 'Beneficiario', requerimiento: 'Se solicita cambio de Defensor' },
  { id: 52789, region: 'Atacama', usuario: 'JUAN PEREZ GOMEZ', fechaApelacion: '01-11-2024', fechaTope: '20-11-2024', quienApela: 'Beneficiario', requerimiento: 'Se requiere revisión de pruebas' },
  { id: 52790, region: 'Antofagasta', usuario: 'MARIA LOPEZ PEREZ', fechaApelacion: '02-11-2024', fechaTope: '21-11-2024', quienApela: 'Beneficiario', requerimiento: 'Solicitud de cambio de defensor' },
  { id: 52791, region: 'Tarapacá', usuario: 'CARLOS SANCHEZ RAMIREZ', fechaApelacion: '03-11-2024', fechaTope: '22-11-2024', quienApela: 'Beneficiario', requerimiento: 'Defensa no presenta pruebas' },
  { id: 52792, region: 'Coquimbo', usuario: 'LUIS FERNANDO RODRIGUEZ', fechaApelacion: '04-11-2024', fechaTope: '23-10-2024', quienApela: 'Beneficiario', requerimiento: 'Retraso en la tramitación' },
  { id: 52793, region: 'Atacama', usuario: 'ANA PATRICIA MORALES', fechaApelacion: '05-11-2024', fechaTope: '24-11-2024', quienApela: 'Beneficiario', requerimiento: 'Revisión de medidas cautelares' },
  { id: 52794, region: 'Antofagasta', usuario: 'FERNANDO ALBERTO DIAZ', fechaApelacion: '06-11-2024', fechaTope: '25-11-2024', quienApela: 'Beneficiario', requerimiento: 'Solicitud de cambio de abogado' },
  { id: 52795, region: 'Tarapacá', usuario: 'MARTA CECILIA GONZALEZ', fechaApelacion: '07-11-2024', fechaTope: '26-11-2024', quienApela: 'Beneficiario', requerimiento: 'Defensor no asiste a la audiencia' },
  { id: 52796, region: 'Coquimbo', usuario: 'JOSE MANUEL HERRERA', fechaApelacion: '08-11-2024', fechaTope: '27-11-2024', quienApela: 'Beneficiario', requerimiento: 'Defensa no cumple con sus funciones' },
  { id: 52797, region: 'Atacama', usuario: 'CARMEN LUCIA VARGAS', fechaApelacion: '09-11-2024', fechaTope: '28-11-2024', quienApela: 'Beneficiario', requerimiento: 'Falta de comunicación con el defensor' },
  { id: 52798, region: 'Antofagasta', usuario: 'RAFAEL EDUARDO TORRES', fechaApelacion: '10-11-2024', fechaTope: '29-11-2024', quienApela: 'Defensor', requerimiento: 'Defensa no presenta pruebas en tiempo' },
];

const DerivarApelacion = () => {
  const [region, setRegion] = useState('Todas');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [filteredData, setFilteredData] = useState(initialData);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedApelacion, setSelectedApelacion] = useState(null);

  const handleLimpiarFiltro = () => {
    setRegion('Todas');
    setFechaInicio('');
    setFechaFin('');
    setFilteredData(initialData);
  };

  const handleSearch = () => {
    const filtered = initialData.filter((item) => {
      return (
        (region === 'Todas' || item.region === region) &&
        (!fechaInicio || new Date(item.fechaApelacion) >= new Date(fechaInicio)) &&
        (!fechaFin || new Date(item.fechaApelacion) <= new Date(fechaFin))
      );
    });
    setFilteredData(filtered);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDerivarClick = (apelacion) => {
    if (selectedApelacion !== apelacion) {
      setSelectedApelacion(apelacion);
      setDialogOpen(true);
    }
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDerivarConfirm = () => {
    console.log(`Apelación derivada: ${selectedApelacion.id}`);
    setDialogOpen(false);
  };

  return (
    <Box>
      <Box style={{ display: 'flex', gap: '1rem', marginTop: '1rem', marginBottom: '1rem', justifyContent: 'space-between' }}>
        <FormControl variant="outlined" sx={{ minWidth: 300 }}>
          <InputLabel>Región</InputLabel>
          <Select value={region} onChange={(e) => setRegion(e.target.value)}>
            {['Todas', 'Tarapacá', 'Antofagasta', 'Atacama', 'Coquimbo'].map((reg) => (
              <MenuItem key={reg} value={reg}>{reg}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Fecha Inicio"
          type="date"
          value={fechaInicio}
          onChange={(e) => setFechaInicio(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Fecha Fin"
          type="date"
          value={fechaFin}
          onChange={(e) => setFechaFin(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <Button variant="contained" color="primary" onClick={handleSearch} startIcon={<SearchIcon />}>Buscar</Button>
        <Button variant="contained" color="primary" onClick={handleLimpiarFiltro} startIcon={<SearchIcon />}>Limpiar Filtro</Button>
      </Box>

      <TableContainer component={Paper} style={{ borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', width: '100%' }}>
        <Table sx={{ minWidth: 650, '& th': { backgroundColor: '#f5f5f5', fontWeight: 'bold' }, '& tbody tr:hover': { backgroundColor: '#e3f2fd' } }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Región</TableCell>
              <TableCell>Usuario</TableCell>
              <TableCell>Requerimiento</TableCell>
              <TableCell>Fecha Apelación</TableCell>
              <TableCell>Fecha Tope Tramitación</TableCell>
              <TableCell>Quién Apela</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((dato) => (
              <TableRow key={dato.id} sx={{ transition: 'background-color 0.3s', cursor: 'pointer', '&:hover': { backgroundColor: '#bbdefb' } }}>
                <TableCell>{dato.id}</TableCell>
                <TableCell>{dato.region}</TableCell>
                <TableCell>{dato.usuario}</TableCell>
                <TableCell>{dato.requerimiento}</TableCell>
                <TableCell>{dato.fechaApelacion}</TableCell>
                <TableCell>{dato.fechaTope}</TableCell>
                <TableCell>{dato.quienApela}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleDerivarClick(dato)}>
                    <VisibilityIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 20]}
        labelRowsPerPage="Filas por página:"
      />

      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Derivar Apelación</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Está seguro de que desea derivar la registro ID: {selectedApelacion?.id}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">Cancelar</Button>
          <Button onClick={handleDerivarConfirm} color="primary" variant="contained">Confirmar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DerivarApelacion;
