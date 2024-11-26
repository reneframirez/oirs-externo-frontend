// src/pages/oirs/emitir-respuesta/index.jsx
import React, { useEffect, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UserIcon from '@mui/icons-material/Person';

import AntUsuario from '../secciones/AntUsuario';
import AntRequerimiento from '../secciones/AntRequerimiento';
import AntImputado from '../secciones/AntImputado';
import InfoAdicional from '../secciones/InfoAdicional';
import AntDerivacion from '../secciones/AntDerivacion';
import AntAnulacion from '../secciones/AntAnulacion';
import AntEntrevista from '../secciones/AntEntrevista';
import AntRespuesta from '../secciones/AntRespuesta';

import EmitirRespuesta from './EmitirRespuesta';

import {
	fetchAnulaciones,
	fetchDerivaciones,
	fetchEntrevistas,
	fetchImputados,
	fetchRequerimientos,
	fetchRespuestas,
	fetchUsuarios,
} from '../../../../api/fetchApi';

const Index = () => {
	const [usuario, setUsuario] = useState([]);
	const [imputado, setImputado] = useState([]);
	const [requerimientos, setRequerimientos] = useState([]);
	const [derivacion, setDerivacion] = useState([]);
	const [anulacion, setAnulacion] = useState([]);
	const [entrevista, setEntrevista] = useState([]);
	const [respuesta, setRespuesta] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadFetch = async () => {
			try {
				const usuarioData = await fetchUsuarios(0);
				const requerimientoData = await fetchRequerimientos(0);
				const imputadoData = await fetchImputados(0);
				const derivacionData = await fetchDerivaciones(0);
				const anulacionData = await fetchAnulaciones(0);
				const entrevistaData = await fetchEntrevistas(0);
				const respuestaData = await fetchRespuestas(0);
				setUsuario(usuarioData);
				setRequerimientos(requerimientoData);
				setImputado(imputadoData);
				setDerivacion(derivacionData);
				setAnulacion(anulacionData);
				setEntrevista(entrevistaData);
				setRespuesta(respuestaData);
			} catch (err) {
				setError(err.message);
			}
		};
		loadFetch();
	}, []);

	const secciones = [
		{
			titulo: 'Emitir de Respuesta',
			componente: <EmitirRespuesta />,
		},
		{
			titulo: 'Antecedentes del Usuario',
			componente: <AntUsuario datosUsuario={usuario} />,
		},
		{
			titulo: 'Antecedentes del Requerimiento',
			componente: <AntRequerimiento datosRequerimiento={requerimientos} />,
		},
		{
			titulo: 'Antecedentes del Imputado',
			componente: <AntImputado imputadoData={imputado} />,
		},
		{
			titulo: 'Información Adicional',
			componente: <InfoAdicional />,
		},
		{
			titulo: 'Antecedentes de la Derivación',
			componente: <AntDerivacion derivacionData={derivacion} />,
		},
		{
			titulo: 'Antecedentes de la Anulación',
			componente: <AntAnulacion anulacionData={anulacion} />,
		},
		{
			titulo: 'Antecedentes de la Entrevista',
			componente: <AntEntrevista entrevistaData={entrevista} />,
		},
		{
			titulo: 'Antecedentes de la Respuesta',
			componente: <AntRespuesta respuestaData={respuesta} />,
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
