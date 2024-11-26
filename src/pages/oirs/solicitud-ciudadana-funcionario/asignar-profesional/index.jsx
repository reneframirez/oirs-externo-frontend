import React, { useEffect, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { UserIcon } from 'lucide-react';

import AntUsuario from '../secciones/AntUsuario';
import AntRequerimiento from '../secciones/AntRequerimiento';
import AntImputado from '../secciones/AntImputado';
import InfoAdicional from '../secciones/InfoAdicional';
import AntDerivacion from '../secciones/AntDerivacion';
import AntAnulacion from '../secciones/AntAnulacion';
import AntEntrevista from '../secciones/AntEntrevista';
import AntEmision from '../secciones/AntEmision';
import AntRespuesta from '../secciones/AntRespuesta';
import AntNotificacion from '../secciones/AntNotificacion';
import AntRecepcion from '../secciones/AntRecepcion';

import AsignarProfesional from './AsignarProfesional';

import {
	fetchAnulaciones,
	fetchDerivaciones,
	fetchEmisiones,
	fetchEntrevistas,
	fetchImputados,
	fetchNotificaciones,
	fetchRecepciones,
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
	const [emision, setEmision] = useState([]);
	const [notificacion, setNotificacion] = useState([]);
	const [recepcion, setRecepcion] = useState([]);
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
				const emisionData = await fetchEmisiones(0);
				const notificacionData = await fetchNotificaciones(0);
				const recepcionData = await fetchRecepciones(0);
				setUsuario(usuarioData);
				setRequerimientos(requerimientoData);
				setImputado(imputadoData);
				setDerivacion(derivacionData);
				setAnulacion(anulacionData);
				setEntrevista(entrevistaData);
				setRespuesta(respuestaData);
				setEmision(emisionData);
				setNotificacion(notificacionData);
				setRecepcion(recepcionData);
			} catch (err) {
				setError(err.message);
			}
		};
		loadFetch();
	}, []);

	const secciones = [
		{
			titulo: 'Asignar Profesional',
			componente: <AsignarProfesional />,
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
		{
			titulo: 'Antecedentes de la Emisión de la Respuesta',
			componente: <AntEmision emisionData={emision} />,
		},
		{
			titulo: 'Antecedentes de la Respuesta Notificada al usuario',
			componente: <AntNotificacion notificacionData={notificacion} />,
		},
		{
			titulo: 'Registro de Recepción de Respuesta al Usuario',
			componente: <AntRecepcion recepcionData={recepcion} />,
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
