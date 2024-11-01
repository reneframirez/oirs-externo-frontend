import React from 'react';
import RegistrarAntecedentesApelacion from './RegistrarAntecedentesApelacion';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UserIcon from '@mui/icons-material/Person';
import AntUsuario from '../../secciones/AntUsuario';
import AntRequerimiento from '../../secciones/AntRequerimiento';
import AntImputado from '../../secciones/AntImputado';
import InfoAdicional from '../../secciones/InfoAdicional';

const Index = () => {
  const datosDelUsuario = {
    nombres: 'Juan',
    apellidoPaterno: 'Pérez',
    apellidoMaterno: 'González',
    tipoIdentificacion: 'RUT',
    numeroIdentificacion: '12345678-9',
    fechaNacimiento: '01-01-1990',
    telefono: '+56912345678',
    email: 'juan.perez@example.com',
    direccion: 'Calle Falsa 123',
    regionResidencia: 'Metropolitana de Santiago',
    comunaResidencia: 'Santiago',
    escolaridad: 'Educación Universitaria Completa',
    etnia: 'Mapuche',
    genero: 'Masculino',
  };

  const datosDelRequerimiento = {
    region: 'Región Metropolitana',
    comuna: 'Santiago',
    tipoSolicitud: 'Reclamo',
    tipoRecepcion: 'Correo Electrónico',
    responderVia: 'Correo Electrónico',
    institucionPublica: 'Ministerio de Salud',
    requerimiento: 'Solicito que se revise el caso relacionado con mi causa.',
  };


  const imputadoData = {
    run: '12345678-9',
    nombreImputado: 'Carlos',
    apellidoPaterno: 'Sanchez',
    apellidoMaterno: 'Lopez',
    fechaNacimiento: '1985-06-15',
    genero: 'Masculino',
    nivelEscolaridad: 'Educación Secundaria Completa',
    nacionalidad: 'Chilena',
    rustPeticion: '12345',
    ruc: '54321',
    tribunal: 'Tribunal de Justicia de Santiago',
    rit: 'RIT-1234-2023',
  };

  const secciones = [
    {
      titulo: 'Registrar Antecedentes Respuesta Apelaciones',
      componente: <RegistrarAntecedentesApelacion />,
    },
    {
      titulo: 'Antecedentes del Usuario',
      componente: <AntUsuario datosUsuario={datosDelUsuario} />,
    },
    {
      titulo: 'Antecedentes del Requerimiento',
      componente: <AntRequerimiento datosRequerimiento={datosDelRequerimiento} />,
    },
    {
      titulo: 'Antecedentes del Imputado',
      componente: <AntImputado imputadoData={imputadoData} />,
    },
    {
      titulo: 'Información Adicional',
      componente: <InfoAdicional />,
    },
  ];

  return (
    <Box sx={{ width: '100%', height: '100%', padding: '16px', boxSizing: 'border-box' }}>
      {secciones.map((seccion, index) => (
        <Accordion key={index} defaultExpanded={index === 0} sx={{ my: 1 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{ backgroundColor: '#00274d', borderRadius: '8px' }}
          >
            <UserIcon sx={{ color: 'white', marginRight: '8px' }} />
            <Typography sx={{ color: 'white' }}>{seccion.titulo}</Typography>
          </AccordionSummary>
          <AccordionDetails>{seccion.componente}</AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Index;
