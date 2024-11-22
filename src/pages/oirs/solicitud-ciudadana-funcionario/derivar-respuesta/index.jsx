import React, { useEffect, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { UserIcon } from 'lucide-react';

import AntUsuario from '../secciones/AntUsuario';
import AntRequerimiento from '../secciones/AntRequerimiento';
import AntImputado from '../secciones/AntImputado';
import InfoAdicional from '../secciones/InfoAdicional';
import AntEntrevista from '../secciones/AntEntrevista';

import Derivar from './derivar';

import {
	fetchEntrevistas,
	fetchImputados,
	fetchRequerimientos,
	fetchUsuarios,
} from '../../../../api/fetchApi';

const Index = () => {
	const [usuario, setUsuario] = useState([]);
	const [imputado, setImputado] = useState([]);
	const [requerimientos, setRequerimientos] = useState([]);
	const [entrevista, setEntrevista] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadFetch = async () => {
			try {
				const usuarioData = await fetchUsuarios(0);
				const requerimientoData = await fetchRequerimientos(0);
				const imputadoData = await fetchImputados(0);
				const entrevistaData = await fetchEntrevistas(0);
				setUsuario(usuarioData);
				setRequerimientos(requerimientoData);
				setImputado(imputadoData);
				setEntrevista(entrevistaData);
			} catch (err) {
				setError(err.message);
			}
		};
		loadFetch();
	}, []);

	const secciones = [
		{
			titulo: 'Derivación solicitud',
			componente: <Derivar />,
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
			titulo: 'Antecedentes de la Entrevista',
			componente: <AntEntrevista entrevistaData={entrevista} />,
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
