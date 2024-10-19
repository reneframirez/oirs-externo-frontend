import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import { Login } from '@mui/icons-material'
import { Link, Outlet, useLocation } from 'react-router-dom' // Importa useLocation
import { TecladoIcono } from '../../../assets/svg/teclado_icono'
import { CedulaIcon } from '../../../assets/svg/cedula'

const SolicitudCiudadanaExterna = () => {
	const location = useLocation()

	const isBasePath = location.pathname === '/oirs/solicitud-ciudadana-externa'

	return (
		<Box className="flex flex-col items-center justify-center">
			{isBasePath && (
				<Box className="bg-white">
					<Box className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
						<Card variant="outlined" className="flex flex-col items-center p-4">
							<CardContent>
								<Button
									component={Link}
									to="/oirs/solicitud-ciudadana-externa/datos-basicos"
									variant="contained"
									color="primary"
									startIcon={<Login />}
									className="mb-4 w-full"
								>
									Iniciar sesión
								</Button>
								<Typography variant="body2" className="text-center pt-3">
									Ingreso ClaveÚnica
								</Typography>
							</CardContent>
						</Card>

						<Card variant="outlined" className="flex flex-col items-center p-4">
							<CardContent>
								<Button
									variant="outlined"
									color="primary"
									startIcon={<TecladoIcono />}
									className="mb-4 w-full h-9"
								>
									{' '}
								</Button>
								<Typography variant="body2" className="text-center pt-3">
									Ingreso registro manual
								</Typography>
							</CardContent>
						</Card>

						<Card variant="outlined" className="flex flex-col items-center p-4">
							<CardContent>
								<Button
									variant="outlined"
									color="primary"
									startIcon={<CedulaIcon />}
									className="mb-4 w-full h-9"
								>
									{' '}
								</Button>
								<Typography variant="body2" className="text-center pt-3">
									Ingreso con Cédula de Identidad
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

export default SolicitudCiudadanaExterna
