import AntUsuario from '../secciones/AntUsuario';
import AntRequerimiento from '../secciones/AntRequerimiento';
import AntImputado from '../secciones/AntImputado';
import IngresoTipificacion from './IngresoTipificacion';

import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { UserIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import { fetchImputados, fetchRequerimientos, fetchUsuarios } from '../../../../api/fetchApi';

export default function Tipificaciones() {
	const [expanded, setExpanded] = useState(false);

	const [usuario, setUsuario] = useState([]);
	const [imputado, setImputado] = useState([]);
	const [requerimientos, setRequerimientos] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadFetch = async () => {
			try {
				const usuarioData = await fetchUsuarios(0);
				const requerimientoData = await fetchRequerimientos(0);
				const imputadoData = await fetchImputados(0);
				setUsuario(usuarioData);
				setRequerimientos(requerimientoData);
				setImputado(imputadoData);
			} catch (err) {
				setError(err.message);
			}
		};
		loadFetch();
	}, []);

	const secciones = [
		{ titulo: 'Ingreso de Tipificación', componente: <IngresoTipificacion /> },
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
	];

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

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
}
