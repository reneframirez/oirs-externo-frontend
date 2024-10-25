import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, TextField, Typography, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)({
  backgroundColor: '#003366', // Dark blue background
  color: '#ffffff', // White text
});

const StyledTableContainer = styled(TableContainer)({
  borderRadius: '15px', // Rounded corners
  overflow: 'hidden',
});

const StyledTypography = styled(Typography)({
  color: '#003366', // Dark blue text
  fontWeight: 'bold',
});

const Resultado = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setFilteredData(
        data.filter(
          (item) =>
            item.tipoSolicitud.toLowerCase().includes(filter.toLowerCase()) ||
            item.estado.toLowerCase().includes(filter.toLowerCase())
        )
      );
    }
  }, [filter, data]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleViewClick = (id) => {
    navigate(`/oirs/solicitud-ciudadana-funcionario/secciones?id=${id}`);
  };

  return (
    <Paper>
      <StyledTypography variant="h6" align="center" gutterBottom>
        Resultados
      </StyledTypography>
      <TextField
        label="Filtrar"
        variant="outlined"
        value={filter}
        onChange={handleFilterChange}
        fullWidth
        margin="normal"
      />
      <StyledTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Fecha Solicitud</StyledTableCell>
              <StyledTableCell>Tipo Solicitud</StyledTableCell>
              <StyledTableCell>Estado</StyledTableCell>
              <StyledTableCell>Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.fechaSolicitud}</TableCell>
                    <TableCell>{row.tipoSolicitud}</TableCell>
                    <TableCell>{row.estado}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleViewClick(row.id)}>
                        <VisibilityIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No se encontraron resultados
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        labelRowsPerPage="Filas por página:"
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

const ResultadoBusquedaOirs = () => {
  const [data, setData] = useState([
    { id: 1, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Por Definir', estado: 'Solicitud Pendiente de Análisis' },
    { id: 2, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Petición Otro', estado: 'Nueva Solicitud' },
    { id: 3, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Reclamo por Defensa', estado: 'Solicitud Derivada' },
    { id: 4, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Felicitación', estado: 'Finalizado en SIGO' },
    { id: 5, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Petición Otro', estado: 'Solicitud Pendiente de Análisis' },
    { id: 6, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Por Definir', estado: 'Solicitud Pendiente de Análisis' },
    { id: 7, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Por Definir', estado: 'Solicitud Pendiente de Análisis' },
    { id: 8, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Petición Otro', estado: 'Nueva Solicitud' },
    { id: 9, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Reclamo por Defensa', estado: 'Solicitud Derivada' },
    { id: 10, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Felicitación', estado: 'Finalizado en SIGO' },
    { id: 11, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Por Definir', estado: 'Solicitud Pendiente de Análisis' },
    { id: 12, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Petición Otro', estado: 'Nueva Solicitud' },
    { id: 13, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Por Definir', estado: 'Solicitud Pendiente de Análisis' },
    { id: 14, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Petición Otro', estado: 'Solicitud Pendiente de Análisis' },
    { id: 15, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Reclamo por Defensa', estado: 'Solicitud Derivada' },
    { id: 16, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Felicitación', estado: 'Finalizado en SIGO' },
    { id: 17, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Por Definir', estado: 'Solicitud Pendiente de Análisis' },
    { id: 18, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Petición Otro', estado: 'Nueva Solicitud' },
    { id: 19, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Por Definir', estado: 'Solicitud Pendiente de Análisis' },
    { id: 20, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Petición Otro', estado: 'Nueva Solicitud' },
    { id: 21, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Reclamo por Defensa', estado: 'Solicitud Derivada' },
    { id: 22, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Felicitación', estado: 'Finalizado en SIGO' },
    { id: 23, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Por Definir', estado: 'Solicitud Pendiente de Análisis' },
    { id: 24, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Petición Otro', estado: 'Nueva Solicitud' },
    { id: 25, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Por Definir', estado: 'Solicitud Pendiente de Análisis' },
    { id: 26, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Petición Otro', estado: 'Solicitud Pendiente de Análisis' },
    { id: 27, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Reclamo por Defensa', estado: 'Solicitud Derivada' },
    { id: 28, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Felicitación', estado: 'Finalizado en SIGO' },
    { id: 29, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Por Definir', estado: 'Solicitud Pendiente de Análisis' },
    { id: 30, fechaSolicitud: '24-10-2024', tipoSolicitud: 'Petición Otro', estado: 'Nueva Solicitud' },
  ]);

  useEffect(() => {
    // Example API call to fetch data
    axios.get('/api/oirs/results')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('prueba', error);
      });
  }, []);

  return <Resultado data={data} />;
};

export default ResultadoBusquedaOirs;
