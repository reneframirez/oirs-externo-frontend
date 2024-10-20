import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom'

const Inicio = () => {
	return (
		<>
			<Box
				sx={{
					position: 'relative',
					p: { xs: 2, md: 8 },
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Box className="flex flex-col items-center justify-center p-4">
					<Box className="bg-white rounded-lg shadow-lg w-full max-w-7xl p-8">
						<Typography
							variant="h4"
							component="h2"
							className="text-center mb-8 text-blue-700"
						>
							Oficina de Información, Reclamos, Sugerencias y Felicitaciones.
						</Typography>

						<Typography
							variant="h6"
							component="h3"
							className="text-center mb-8 text-gray-600"
						>
							¿Qué solicitud desea realizar?
						</Typography>

						<Box className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
							<Card className="flex flex-col items-center p-4">
								<CardContent>
                                <Typography variant="body1" className="text-center pt-3">
										Usuario Beneficiario
									</Typography>                                    
									<Button
										variant="contained"
										color="primary"
										component={Link}
										to="/oirs/solicitud-ciudadana-externa"
										startIcon={<AddToPhotosIcon />}
										className="mb-4 w-full h-9"
									>
										{' '}
									</Button>
									<Typography variant="body2" className="text-center pt-3">
										Solicitud Ciudadana
									</Typography>
								</CardContent>
							</Card>

							<Card className="flex flex-col items-center p-4">
								<CardContent>
                                <Typography variant="body1" className="text-center pt-3">
										Usuario Funcionario
									</Typography>                                        
									<Button
										variant="contained"
										color="success"
										component={Link}
										to="/oirs/solicitud-ciudadana-funcionario"
										startIcon={<AddToPhotosIcon />}
										className="mb-4 w-full h-9"
									>
										{' '}
									</Button>
									<Typography variant="body2" className="text-center pt-3">
										Solicitud Ciudadana
									</Typography>
								</CardContent>
							</Card>
						</Box>
						<Box className="flex flex-col items-center justify-center py-10">
							<Typography
								variant="subtitle2"
								className="mt-8 text-gray-600 text-center pb-4"
							>
								La Defensoría Penal Pública ofrece este espacio de atención virtual
								para que usted pueda ejercer su derecho a pedir información,
								realizar sugerencias, reclamos o felicitaciones(*)
							</Typography>

							<Typography
								variant="caption"
								className="mt-4 text-gray-500 text-center block"
							>
								(*) Defensoría tendrá como obligación tramitar los requerimientos
								ciudadanos en los plazos estipulados (Ley 19.880, Ley 19.718 de la
								Defensoría Penal Pública y la Ley 20.285 sobre Acceso a la
								Información).
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default Inicio
