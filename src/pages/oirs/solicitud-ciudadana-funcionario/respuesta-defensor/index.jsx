import React from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UserIcon from '@mui/icons-material/Person';

import AntUsuario from '../secciones/AntUsuario';
import AntRequerimiento from '../secciones/AntRequerimiento';
import AntImputado from '../secciones/AntImputado';
import InfoAdicional from '../secciones/InfoAdicional';
import AntDerivacion from '../secciones/AntDerivacion';
import AntAnulacion from '../secciones/AntAnulacion';
import AntEntrevista from '../secciones/AntEntrevista';

import RespuestaDefensor from './RespuestaDefensor';

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
		tipoSolicitud: 'Reclamo por Defensa',
		tipoRecepcion: 'Correo Electrónico',
		responderVia: 'Correo Electrónico',
		institucionPublica: 'Ministerio de Salud',
		requerimiento: 'Solicito que se revise el caso relacionado con mi causa.',
		especificacion: 'Otro reclamo por defensa',
		justificacion: 'Justificacion',
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

	const derivacionData = {
		funcionario: 'Marcela Tapia Silva',
		fechaDerivacion: '2024-10-03 08:40:54',
		fundamentoDervivacion: 'Fundamento',
	};

	const anulacionData = {
		funcionario: '',
		fechaAnulacion: '',
		fundamentoAnulacion: '',
	};

	const entrevistaData = {
		entrevista: 'Si',
		fechaEntrevista: '07-10-2024',
		forma: 'Presencial',
		resumen: 'Resumen',
	};

	const secciones = [
		{
			titulo: 'Generación de Respuesta',
			componente: <RespuestaDefensor />,
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
		{
			titulo: 'Antecedentes de la Derivación',
			componente: <AntDerivacion derivacionData={derivacionData} />,
		},
		{
			titulo: 'Antecedentes de la Anulación',
			componente: <AntAnulacion anulacionData={anulacionData} />,
		},
		{
			titulo: 'Antecedentes de la Entrevista',
			componente: <AntEntrevista entrevistaData={entrevistaData} />,
		},
	];

	return (
		<div>
			{secciones.map((seccion, index) => (
				<Accordion key={index} defaultExpanded sx={{ my: 1 }}>
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
