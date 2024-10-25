// src/pages/Inicio.jsx
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, Outlet, useLocation } from 'react-router-dom';

const SolicitudCiudadanaFuncionario = () => {
	const location = useLocation();

	const isBasePath = location.pathname === '/oirs/solicitud-ciudadana-funcionario';
	return (
		<Box className="flex flex-col items-center justify-center">
			{isBasePath && (
				<Box className="bg-white">
					<Typography
						variant="h4"
						component="h2"
						className="text-center mb-8 text-blue-700"
					>
						Solicitudes Ciudadanas.
					</Typography>

					<Typography
						variant="h6"
						component="h3"
						className="text-center mb-8 text-gray-600"
					>
						Flujo de Solicitudes.
					</Typography>

					<Box className="flex flex-col md:flex-row items-center justify-center gap-8 pt-16">
						<Card
							variant="outlined"
							className="flex flex-col items-center p-4 relative"
						>
							<CardContent>
								<Box className="absolute top-1 left-1 w-6 h-6 rounded-full bg-gray-200 shadow-md flex items-center justify-center">
									<Typography variant="caption" className="text-gray-500">
										1
									</Typography>
								</Box>
								<Button
									variant="contained"
									color="secondary"
									component={Link}
									to="/oirs/solicitud-ciudadana-funcionario/ingreso-solicitud-interno"
									startIcon={<AddToPhotosIcon />}
									className="mb-4 w-full h-9"
								>
									{' '}
								</Button>
								<Typography variant="body2" className="text-center pt-3">
									Ingreso de Solicitud Ciudadana
								</Typography>
							</CardContent>
						</Card>

						{/* Flecha entre las tarjetas */}
						<Box className="flex items-center justify-center">
							<ArrowForwardIcon fontSize="large" className="text-blue-700" />
						</Box>

						{/* Nueva tarjeta de Tipificación de solicitud */}
						<Card
							variant="outlined"
							className="flex flex-col items-center p-4 relative"
						>
							<CardContent>
								<Box className="absolute top-1 left-1 w-6 h-6 rounded-full bg-gray-200 shadow-md flex items-center justify-center">
									<Typography variant="caption" className="text-gray-500">
										2
									</Typography>
								</Box>
								<Button
									variant="contained"
									color="primary"
									component={Link}
									to="/oirs/solicitud-ciudadana-funcionario/tipificaciones"
									startIcon={<AddToPhotosIcon />}
									className="mb-4 w-full h-9"
								>
									{' '}
								</Button>
								<Typography variant="body2" className="text-center pt-3">
									Tipificación de Solicitud
								</Typography>
							</CardContent>
						</Card>

						{/* Flecha entre las tarjetas */}
						<Box className="flex items-center justify-center">
							<ArrowForwardIcon fontSize="large" className="text-blue-700" />
						</Box>

						<Card
							variant="outlined"
							className="flex flex-col items-center p-4 relative"
						>
							<CardContent>
								<Box className="absolute top-1 left-1 w-6 h-6 rounded-full bg-gray-200 shadow-md flex items-center justify-center">
									<Typography variant="caption" className="text-gray-500">
										3
									</Typography>
								</Box>
								<Button
									variant="contained"
									color="success"
									component={Link}
									to="/oirs/solicitud-ciudadana-funcionario/solicitudes-pendientes"
									startIcon={<AddToPhotosIcon />}
									className="mb-4 w-full h-9"
								>
									{' '}
								</Button>
								<Typography variant="body2" className="text-center pt-3">
									Revisión Encargado Regional
								</Typography>
							</CardContent>
						</Card>
					</Box>

					<Box className="flex flex-col md:flex-row items-center justify-center gap-8 pt-16">
					<Card
							variant="outlined"
							className="flex flex-col items-center p-4 relative"
						>
							<CardContent>
								<Box className="absolute top-1 left-1 w-6 h-6 rounded-full bg-gray-200 shadow-md flex items-center justify-center">
									<Typography variant="caption" className="text-gray-500">
										5
									</Typography>
								</Box>
								<Button
									variant="contained"
									color="error"
									component={Link}
									to="busqueda"
									startIcon={<AddToPhotosIcon />}
									className="mb-4 w-full h-9"
								>
									{' '}
								</Button>
								<Typography variant="body2" className="text-center pt-3">
									Búsqueda Solicitudes
								</Typography>
							</CardContent>
						</Card>
						<Box className="flex items-center justify-center">
							<ArrowForwardIcon fontSize="large" className="text-blue-700" />
						</Box>

	
						<Card
							variant="outlined"
							className="flex flex-col items-center p-4 relative"
						>
							<CardContent>
								<Box className="absolute top-1 left-1 w-6 h-6 rounded-full bg-gray-200 shadow-md flex items-center justify-center">
									<Typography variant="caption" className="text-gray-500">
										4
									</Typography>
								</Box>
								<Button
									variant="contained"
									color="warning"
									component={Link}
									to="/oirs/solicitud-ciudadana-funcionario/secciones"
									startIcon={<AddToPhotosIcon />}
									className="mb-4 w-full h-9"
								>
									{' '}
								</Button>
								<Typography variant="body2" className="text-center pt-3">
									Secciones de Solicitudes
								</Typography>
							</CardContent>
						</Card>

					</Box>

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
