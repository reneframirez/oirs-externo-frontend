
import ModalBusquedaCausa from './ModalBusquedaCausa'
import { useState } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';





const AntecedentesRequerimiento = () => {



    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState(null);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    const handleSearch = (results) => {
      console.log('Resultados de la búsqueda:', results);
    };
  
    const handleSelectRecord = (record) => {
      setSelectedRecord(record);
      console.log('Registro seleccionado:', record);
      // Aquí puedes hacer lo que necesites con el registro seleccionado
    };


	return (
        <Grid item xs={12}>
        <Box>
            <Typography variant="h4">Componente Padre</Typography>
            <Button variant="contained" color="primary" onClick={handleOpenModal}>
                Abrir Modal de Búsqueda
            </Button>

            {selectedRecord && (
                <Box mt={2}>
                <Typography variant="h6">Registro Seleccionado:</Typography>
                <Typography>RUN: {selectedRecord.run} Nombre: {selectedRecord.nombreImputado} </Typography>
                <Typography>Nombre: {selectedRecord.nombreImputado}</Typography>
                <Typography>Estado: {selectedRecord.estado}</Typography>
                <Typography>Defensor: {selectedRecord.nombreDefensor}</Typography>
                <Typography>ROID: {selectedRecord.roid}</Typography>
                </Box>
            )}

            <ModalBusquedaCausa
                open={isModalOpen}
                onClose={handleCloseModal}
                onSearch={handleSearch}
                onSelectRecord={handleSelectRecord}
            />
        </Box>
    </Grid>
)
}

export default AntecedentesRequerimiento
