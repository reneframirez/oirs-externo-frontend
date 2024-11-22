import AntUsuario from './AntUsuario';
import AntRequerimiento from './AntRequerimiento';
import AntImputado from './AntImputado';
import InfoAdicional from './InfoAdicional';
import AntDerivacion from './AntDerivacion';
import AntAnulacion from './AntAnulacion';
import AntEntrevista from './AntEntrevista';
import AntRespuesta from './AntRespuesta';
import AntEmision from './AntEmision';
import AntNotificacion from './AntNotificacion';
import AntRecepcion from './AntRecepcion';
import AntApelacion from './AntApelacion';
import AntResolver from './AntResolver';
import AntMMR from './AntMMR';

import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { UserIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
	fetchAnulaciones,
	fetchApelaciones,
	fetchDerivaciones,
	fetchEmisiones,
	fetchEntrevistas,
	fetchImputados,
	fetchMMR,
	fetchNotificaciones,
	fetchRecepciones,
	fetchRequerimientos,
	fetchResolvers,
	fetchRespuestas,
	fetchUsuarios,
} from '../../../../api/fetchApi';

const SeccionesOrdenadas = () => {
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
	const [apelacion, setApelacion] = useState([]);
	const [resolver, setResolver] = useState([]);
	const [mmr, setMMR] = useState([]);
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
				const apelacionData = await fetchApelaciones(0);
				const resolverData = await fetchResolvers(0);
				const mmrData = await fetchMMR(0);
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
				setApelacion(apelacionData);
				setResolver(resolverData);
				setMMR(mmrData);
			} catch (err) {
				setError(err.message);
			}
		};
		loadFetch();
	}, []);

	const secciones = [
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
		{
			titulo: 'Antecedentes de la Apelación',
			componente: <AntApelacion apelacionData={apelacion} />,
		},
		{
			titulo: 'Antecedentes de Medidas por Mejor Resolver Requeridas',
			componente: <AntResolver resolverData={resolver} />,
		},
		{
			titulo: 'Antecedentes la Respuesta a Requerimiento de MMR',
			componente: <AntMMR mmrData={mmr} />,
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
						<Typography style={{ color: 'white' }}>{seccion.titulo} </Typography>
					</AccordionSummary>
					<AccordionDetails>{seccion.componente}</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
};

export default SeccionesOrdenadas;
