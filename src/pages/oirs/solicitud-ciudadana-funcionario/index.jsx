// src/pages/Inicio.jsx
import React from 'react';
import {
	Box,
	Button,
	Card,
	CardContent,
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, Outlet, useLocation } from 'react-router-dom';

const SolicitudCiudadanaFuncionario = () => {
	const location = useLocation();

	const isBasePath = location.pathname === '/oirs/solicitud-ciudadana-funcionario';

	const cardsData = [
		{
			url: '/oirs/solicitud-ciudadana-funcionario/ingreso-solicitud-interno',
			titulo: 'Ingreso de Solicitud Ciudadana',
			rol: '[Todos los funcionarios]',
			color: 'secondary',
		},
		{
			url: '/oirs/solicitud-ciudadana-funcionario/tipificaciones',
			titulo: 'Tipificación de Solicitud',
			rol: '[Asesor jurídico]',
			color: 'primary',
		},
		{
			url: 'entrevista-beneficiario',
			titulo: 'Entrevista Beneficiario',
			rol: '[AJ - Periodista]',
			color: 'warning',
		},
		{
			url: 'derivar-respuesta',
			titulo: 'Derivar Solicitud',
			rol: '[AJ - Periodista]',
			color: 'success',
		},
		{
			url: 'respuesta-defensor',
			titulo: 'Respuesta del Defensor',
			rol: '[Defensor]',
			color: 'info',
		},
		{
			url: 'generar-respuesta',
			titulo: 'Generar respuesta',
			rol: '[AJ - Periodista]',
			color: 'error',
		},
		{
			url: 'emitir-respuesta',
			titulo: 'Emitir respuesta',
			rol: '[AJ - Periodista]',
			color: 'secondary',
		},
		{
			url: 'notificar-respuesta',
			titulo: 'Notificar Respuesta al Usuario',
			rol: '[Asesor Juridico]',
			color: 'primary',
		},
		{
			url: 'recepcion-notificacion',
			titulo: 'Forma de Notificacion Respuesta al Usuario',
			rol: '[Asesor Juridico]',
			color: 'warning',
		},
	];

	const apelacionCardsData = [
		{
			url: 'apelaciones-busqueda-registro',
			titulo: 'Ingresar Apelacion',
			rol: '[AJ - Periodista]',
			color: 'secondary',
		},
		{
			url: 'derivar-apelacion',
			titulo: 'Derivar Apelación',
			rol: '[Jefe Gabinete]',
			color: 'info',
		},
		{
			url: 'asignar-profesional',
			titulo: 'Profesional a Asignar',
			rol: '[Jefe DECR]',
			color: 'success',
		},
		{
			url: 'registrar-antecedentes-apelacion',
			titulo: 'Registrar Antecedentes de Apelación',
			rol: '[Profesional DECR]',
			color: 'warning',
		},
		{
			url: 'responder-mmr',
			titulo: 'Responder Media por Mejor Resolver',
			rol: '[Asesor Juridico]',
			color: 'primary',
		},
		{
			url: 'busqueda-apelaciones-vigentes',
			titulo: 'Buscar Apelaciones Vigentes',
			rol: '[Todos los funcionarios]',
			color: 'info',
		},
	];

	const apoyoCardsData = [
		{
			url: '/oirs/solicitud-ciudadana-funcionario/solicitudes-pendientes',
			titulo: 'Solicitudes Pendientes',
			rol: '[AJ - Periodista]',
			color: 'secondary',
		},
		{
			url: 'busqueda',
			titulo: 'Búsqueda Solicitudes',
			rol: '[Todos los funcionarios]',
			color: 'error',
		},
		{
			url: '/oirs/solicitud-ciudadana-funcionario/secciones',
			titulo: 'Secciones de Solicitudes',
			rol: '[Manejo Interno Sistema]',
			color: 'primary',
		},
	];

	const felicitacionesCardsData = [
		{
			url: '/oirs/solicitud-ciudadana-funcionario/ingreso-solicitud-interno',
			titulo: 'Ingreso de Solicitud Ciudadana',
			rol: '[Todos los funcionarios]',
			color: 'secondary',
		},
/*
		{
			url: '/oirs/solicitud-ciudadana-funcionario/solicitudes-pendientes',
			titulo: 'Felicitaciones / Opiniones / Consultas',
			rol: '[AJ - Periodista]',
			color: 'primary',
		},
		{
			url: 'entrevista-beneficiario',
			titulo: 'Entrevista Beneficiario',
			rol: '[AJ - Periodista]',
			color: 'success',
		},
*/
		{
			url: 'derivar-respuesta',
			titulo: 'Derivar Solicitud',
			rol: '[AJ - Periodista]',
			color: 'info',
		},
		{
			url: 'respuesta-defensor',
			titulo: 'Respuesta del Defensor',
			rol: '[Defensor]',
			color: 'warning',
		},
		{
			url: 'generar-respuesta',
			titulo: 'Generar respuesta',
			rol: '[AJ - Periodista]',
			color: 'error',
		},
		{
			url: 'emitir-respuesta',
			titulo: 'Emitir respuesta',
			rol: '[AJ - Periodista]',
			color: 'warning',
		},
		{
			url: 'notificar-respuesta',
			titulo: 'Notificar Respuesta al Usuario',
			rol: '[Asesor Juridico]',
			color: 'error',
		},
		{
			url: 'recepcion-notificacion',
			titulo: 'Forma de Notificacion Respuesta al Usuario',
			rol: '[Asesor Juridico]',
			color: 'secondary',
		},
	];

	return (
		<Box className="flex flex-col items-center justify-center px-4">
			{isBasePath && (
				<Box className="bg-white w-full max-w-7xl">
					<Typography
						variant="h4"
						component="h2"
						className="text-center mb-8 text-blue-700"
					>
						Gestión de OIRS en Portal Único.
					</Typography>

					<Typography
						variant="h6"
						component="h3"
						className="text-center mb-8 text-gray-600"
					>
						Módulo SIGO - Portal Único
					</Typography>

					<Accordion defaultExpanded>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography variant="h5" className="text-blue-700">
								Proceso de reclamo solicitud ciudadana
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Box className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 pt-4">
								{cardsData.map((card, index) => (
									<React.Fragment key={index}>
										<Card
											variant="outlined"
											className="flex flex-col items-center p-4 relative"
											sx={{
												width: { xs: '100%', sm: '250px' },
												height: '160px',
												borderRadius: '16px',
											}}
										>
											<CardContent>
												<Box className="absolute top-1 left-1 w-6 h-6 rounded-full bg-gray-200 shadow-md flex items-center justify-center">
													<Typography
														variant="caption"
														className="text-gray-500"
													>
														{index + 1}
													</Typography>
												</Box>
												<Button
													variant="contained"
													color={card.color}
													component={Link}
													to={card.url}
													startIcon={<AddToPhotosIcon />}
													className="mb-4 w-full h-9"
												>
													{' '}
												</Button>
												<Typography
													variant="body2"
													className="text-center pt-3"
												>
													{card.titulo}
												</Typography>
												<Typography
													variant="body2"
													className="text-center pt-3"
												>
													{card.rol}
												</Typography>
											</CardContent>
										</Card>
										{index < cardsData.length - 1 && (
											<Box className="flex items-center justify-center">
												<ArrowForwardIcon
													fontSize="large"
													className="text-blue-700 hidden md:block"
												/>
											</Box>
										)}
									</React.Fragment>
								))}
							</Box>
						</AccordionDetails>
					</Accordion>

					<Accordion defaultExpanded>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography variant="h5" className="text-blue-700">
								Solcitudes ciudadanas
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Box className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 pt-4">
								{felicitacionesCardsData.map((card, index) => (
									<React.Fragment key={index}>
										<Card
											variant="outlined"
											className="flex flex-col items-center p-4 relative"
											sx={{
												width: { xs: '100%', sm: '250px' },
												height: '160px',
												borderRadius: '16px',
											}}
										>
											<CardContent>
												<Box className="absolute top-1 left-1 w-6 h-6 rounded-full bg-gray-200 shadow-md flex items-center justify-center">
													<Typography
														variant="caption"
														className="text-gray-500"
													>
														{index + 1}
													</Typography>
												</Box>
												<Button
													variant="contained"
													color={card.color}
													component={Link}
													to={card.url}
													startIcon={<AddToPhotosIcon />}
													className="mb-4 w-full h-9"
												>
													{' '}
												</Button>
												<Typography
													variant="body2"
													className="text-center pt-3"
												>
													{card.titulo}
												</Typography>
												<Typography
													variant="body2"
													className="text-center pt-3"
												>
													{card.rol}
												</Typography>
											</CardContent>
										</Card>
										{index < cardsData.length - 1 && (
											<Box className="flex items-center justify-center">
												<ArrowForwardIcon
													fontSize="large"
													className="text-blue-700 hidden md:block"
												/>
											</Box>
										)}
									</React.Fragment>
								))}
							</Box>
						</AccordionDetails>
					</Accordion>

					<Accordion defaultExpanded>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography variant="h5" className="text-green-700">
								Apelación de reclamo
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Box className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 pt-4">
								{apelacionCardsData.map((card, index) => (
									<React.Fragment key={index}>
										<Card
											variant="outlined"
											className="flex flex-col items-center p-4 relative"
											sx={{
												width: { xs: '100%', sm: '250px' },
												height: '160px',
												borderRadius: '16px',
											}}
										>
											<CardContent>
												<Box className="absolute top-1 left-1 w-6 h-6 rounded-full bg-gray-200 shadow-md flex items-center justify-center">
													<Typography
														variant="caption"
														className="text-gray-500"
													>
														{index + 1}
													</Typography>
												</Box>
												<Button
													variant="contained"
													color={card.color}
													component={Link}
													to={card.url}
													startIcon={<AddToPhotosIcon />}
													className="mb-4 w-full h-9"
												>
													{' '}
												</Button>
												<Typography
													variant="body2"
													className="text-center pt-3"
												>
													{card.titulo}
												</Typography>
												<Typography
													variant="body2"
													className="text-center pt-3"
												>
													{card.rol}
												</Typography>
											</CardContent>
										</Card>
										{index < apelacionCardsData.length - 1 && (
											<Box className="flex items-center justify-center">
												<ArrowForwardIcon
													fontSize="large"
													className="text-green-700 hidden md:block"
												/>
											</Box>
										)}
									</React.Fragment>
								))}
							</Box>
						</AccordionDetails>
					</Accordion>

					<Accordion>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography variant="h5" className="text-purple-700">
								Utilidades del sistema
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Box className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 pt-4">
								{apoyoCardsData.map((card, index) => (
									<React.Fragment key={index}>
										<Card
											variant="outlined"
											className="flex flex-col items-center p-4 relative"
											sx={{
												width: { xs: '100%', sm: '250px' },
												height: '160px',
												borderRadius: '16px',
											}}
										>
											<CardContent>
												<Box className="absolute top-1 left-1 w-6 h-6 rounded-full bg-gray-200 shadow-md flex items-center justify-center">
													<Typography
														variant="caption"
														className="text-gray-500"
													>
														{index + 1}
													</Typography>
												</Box>
												<Button
													variant="contained"
													color={card.color}
													component={Link}
													to={card.url}
													startIcon={<AddToPhotosIcon />}
													className="mb-4 w-full h-9"
												>
													{' '}
												</Button>
												<Typography
													variant="body2"
													className="text-center pt-3"
												>
													{card.titulo}
												</Typography>
												<Typography
													variant="body2"
													className="text-center pt-3"
												>
													{card.rol}
												</Typography>
											</CardContent>
										</Card>
										{index < apoyoCardsData.length - 1 && (
											<Box className="flex items-center justify-center">
												<ArrowForwardIcon
													fontSize="large"
													className="text-purple-700 hidden md:block"
												/>
											</Box>
										)}
									</React.Fragment>
								))}
							</Box>
						</AccordionDetails>
					</Accordion>

					<Box className="flex flex-col items-center justify-center py-10">
						<Typography
							variant="subtitle2"
							className="mt-8 text-gray-600 text-center pb-4"
						>
							La Defensoría Penal Pública ofrece este espacio de atención virtual para
							que usted pueda ejercer su derecho a pedir información, realizar
							sugerencias, reclamos o felicitaciones(*)
						</Typography>

						<Typography
							variant="caption"
							className="mt-4 text-gray-500 text-center block"
						>
							(*) Defensoría tendrá como obligación tramitar los requerimientos
							ciudadanos en los plazos estipulados (Ley 19.880, Ley 19.718 de la
							Defensoría Penal Pública y la Ley 20.285 sobre Acceso a la Información).
						</Typography>
					</Box>
				</Box>
			)}

			{/* Aquí se renderizan las rutas hijas */}
			<Outlet />
		</Box>
	);
};

export default SolicitudCiudadanaFuncionario;
