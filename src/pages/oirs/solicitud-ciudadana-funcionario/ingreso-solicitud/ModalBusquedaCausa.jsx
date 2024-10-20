import React, { useState } from 'react';
import {
  Modal,
  Box,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import GavelIcon from '@mui/icons-material/Gavel';
import UploadIcon from '@mui/icons-material/Upload';

export default function ModalBusquedaCausa({ open, onClose, onSearch, onSelectRecord }) {
  const [rut, setRut] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [estadoCausa, setEstadoCausa] = useState('');
  const [buscarSIGDP, setBuscarSIGDP] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Simulating a search operation
    const results = [
        {
          estado: 'Abierta',
          run: '13022798-8',
          nombreImputado: 'René Francisco Ramírez Ulloa',
          apellidoPaterno: 'Ramírez',
          apellidoMaterno: 'Ulloa',
          fechaNacimiento: '15-05-1985',
          genero: 'Masculino',
          nivelEscolaridad: 'Universitario',
          nacionalidad: 'Chilena',
          rudPeticion: 'RUD-001',
          ruc: 'RUC-001',
          tribunal: 'Tribunal Santiago',
          rit: 'RIT-001',
          nombreDefensor: 'Gonzalo Berrios Díaz',
          roid: 'DPP-00008-19',
        },
        {
          estado: 'Abierta',
          run: '13022798-8',
          nombreImputado: 'Elva De Las Mercedes Valdes Alegría',
          apellidoPaterno: 'Valdes',
          apellidoMaterno: 'Alegría',
          fechaNacimiento: '22-08-1979',
          genero: 'Femenino',
          nivelEscolaridad: 'Secundario Completo',
          nacionalidad: 'Chilena',
          rudPeticion: 'RUD-002',
          ruc: 'RUC-002',
          tribunal: 'Tribunal Valparaíso',
          rit: 'RIT-002',
          nombreDefensor: 'Álvaro Lara Vidal',
          roid: 'DPP-00008-11',
        },
        {
          estado: 'Cerrada',
          run: '13022799-6',
          nombreImputado: 'Alexis Antonio Calderón Cruz',
          apellidoPaterno: 'Calderón',
          apellidoMaterno: 'Cruz',
          fechaNacimiento: '10-10-1980',
          genero: 'Masculino',
          nivelEscolaridad: 'Técnico Superior',
          nacionalidad: 'Chilena',
          rudPeticion: 'RUD-003',
          ruc: 'RUC-003',
          tribunal: 'Tribunal Concepción',
          rit: 'RIT-003',
          nombreDefensor: 'Marco Carlos Martínez Lezcano',
          roid: 'QLP-01526-12',
        },
      ];
      
    setSearchResults(results);
    onSearch(results);
  };

  const handleSelectRecord = (record) => {
    onSelectRecord(record);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
      <Box sx={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: '80%', 
        maxWidth: '1000px', 
        bgcolor: 'background.paper', 
        boxShadow: 24, 
        p: 4, 
        maxHeight: '90vh', 
        overflowY: 'auto' 
      }}>
        <h2 style={{ marginTop: 0, marginBottom: '20px', textAlign: 'center' }}>Búsqueda de Imputado</h2>
        <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: 'calc(50% - 16px)' } }}>
          <div>
            <TextField
              label="RUT"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
              InputProps={{
                startAdornment: <BadgeIcon />,
              }}
            />
            <TextField
              label="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              InputProps={{
                startAdornment: <PersonIcon />,
              }}
            />
          </div>
          <div>
            <TextField
              label="Apellido Paterno"
              value={apellidoPaterno}
              onChange={(e) => setApellidoPaterno(e.target.value)}
              InputProps={{
                startAdornment: <FamilyRestroomIcon />,
              }}
            />
            <TextField
              label="Apellido Materno"
              value={apellidoMaterno}
              onChange={(e) => setApellidoMaterno(e.target.value)}
              InputProps={{
                startAdornment: <FamilyRestroomIcon />,
              }}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
            <Select
              value={estadoCausa}
              onChange={(e) => setEstadoCausa(e.target.value)}
              displayEmpty
              sx={{ m: 1, width: 'calc(50% - 16px)' }}
              startAdornment={<GavelIcon />}
            >
              <MenuItem value="">
                <em>Estado Causa</em>
              </MenuItem>
              <MenuItem value="abierta">Abierta</MenuItem>
              <MenuItem value="cerrada">Cerrada</MenuItem>
            </Select>
            <FormControlLabel
              control={
                <Checkbox
                  checked={buscarSIGDP}
                  onChange={(e) => setBuscarSIGDP(e.target.checked)}
                />
              }
              label="Buscar en SIGDP penitenciario"
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '20px' }}>
            <Button variant="contained" startIcon={<SearchIcon />} onClick={handleSearch}>
              Buscar
            </Button>
          </div>
        </Box>
        {searchResults.length > 0 && (
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Estado</TableCell>
                  <TableCell>RUN</TableCell>
                  <TableCell>Nombre Imputado</TableCell>
                  <TableCell>Nombre Defensor</TableCell>
                  <TableCell>ROID</TableCell>
                  <TableCell>Acción</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {searchResults.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.estado}</TableCell>
                    <TableCell>{row.run}</TableCell>
                    <TableCell>{row.nombreImputado}</TableCell>
                    <TableCell>{row.nombreDefensor}</TableCell>
                    <TableCell>{row.roid}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<UploadIcon />}
                        onClick={() => handleSelectRecord(row)}
                      >
                        Cargar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Modal>
  );
}