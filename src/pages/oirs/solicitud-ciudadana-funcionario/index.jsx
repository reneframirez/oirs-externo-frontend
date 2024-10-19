// src/pages/Inicio.jsx
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'
import { Link, Outlet, useLocation } from 'react-router-dom'

const SolicitudCiudadanaFuncionario = () => {
	const location = useLocation()

	const isBasePath = location.pathname === '/oirs/solicitud-ciudadana-funcionario'
	return (
		<Box className="flex flex-col items-center justify-center">
			{isBasePath && (
				<Box className="bg-white">
					<Typography
						variant="h4"
						component="h2"
						className="text-center mb-8 text-blue-700"
					>
						Ingreso de Solicitudes Ciudadanas.
					</Typography>

					<Typography
						variant="h6"
						component="h3"
						className="text-center mb-8 text-gray-600"
					>
						¿Cómo desea realizar la solicitud?
					</Typography>

					<Box className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
						<Card variant="outlined" className="flex flex-col items-center p-4">
							<CardContent>
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
									Solicitud Ciudadana Interna
								</Typography>
							</CardContent>
						</Card>

						<Card variant="outlined" className="flex flex-col items-center p-4">
							<CardContent>
								<Button
									variant="contained"
									color="warning"
									component={Link}
									to="/oirs/solicitud-ciudadana-funcionario/solicitudes-pendientes"
									startIcon={<AddToPhotosIcon />}
									className="mb-4 w-full h-9"
								>
									{' '}
								</Button>
								<Typography variant="body2" className="text-center pt-3">
									Solicitudes Pendientes
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
	)
}

export default SolicitudCiudadanaFuncionario
