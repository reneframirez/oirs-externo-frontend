import React from 'react';
import BusquedaRegistro from './BusquedaRegistro';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UserIcon from '@mui/icons-material/Person';

const Index = () => {
  const secciones = [
    {
      titulo: 'Buscar Registro Para Apelaciones',
      componente: <BusquedaRegistro />,
    },
  ];

  return (
    <div style={{ width: '100%', height: '100%', padding: '16px', boxSizing: 'border-box' }}>
      {secciones.map((seccion, index) => (
      <Accordion key={index} defaultExpanded={index === 0} sx={{ my: 1 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            style={{ backgroundColor: '#00274d', borderRadius: '8px' }}
          >
            <UserIcon style={{ color: 'white', marginRight: '8px' }} />
            <Typography style={{ color: 'white' }}>{seccion.titulo}</Typography>
          </AccordionSummary>
          <AccordionDetails>{seccion.componente}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Index;