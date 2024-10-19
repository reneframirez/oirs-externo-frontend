import { useState } from 'react'
import {
	Card,
	CardContent,
	Typography,
	Box,
	Grid,
	ListItemText,
	Badge,
	IconButton,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Alert,
} from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { BrowserRouter as Link } from 'react-router-dom'
import axios from 'axios'

const SolicitudesPendientes = () => {
	const [open, setOpen] = useState(false)
	const [alertMessage, setAlertMessage] = useState(null)

	const handleClickOpen = () => {
		console.log('Dialog open triggered')
		setOpen(true)
	}

	const handleClose = () => {
		console.log('Dialog close triggered')
		setOpen(false)
	}

	const handleLinkClick = (id) => {
		axios
			.get(`/api/solicitud/${id}`)
			.then((response) => {
				setAlertMessage(response.data.message)
			})
			.catch((error) => {
				console.error('Error fetching solicitud data', error)
				setAlertMessage(
					'Error al obtener los datos. Por favor, inténtelo de nuevo más tarde.',
				)
			})
	}

	console.log('Rendering SolicitudesCard component')

	return (
		<Box sx={{ maxWidth: 1200, margin: 'auto', mt: 4 }}>
			<Card variant="outlined" sx={{ mb: 2 }}>
				<CardContent>
					<Typography variant="h6" gutterBottom>
						Solicitudes ciudadanas
					</Typography>
				</CardContent>
			</Card>

			<Grid container spacing={2}>
				{[
					{ label: 'Solicitud Derivada', count: 2 },
					{
						label: 'Respondida a Usuario',
						count: 1304,
						style: { color: 'grey.500', textDecoration: 'line-through' },
					},
					{ label: 'Respuesta notificada a usuario', count: 55, style: { color: 'red' } },
					{ label: 'Finalizado en OIRS', count: 172, style: { color: 'red' } },
					{
						label: 'Recepción de respuesta del usuario',
						count: 500,
						style: { color: 'red' },
					},
					{ label: 'Apelación tramitada', count: 13, style: { color: 'red' } },
					{ label: 'Anulada', count: 48 },
				].map((item, index) => (
					<Grid item xs={3} key={index}>
						<Card variant="outlined" sx={{ height: '100%' }} onClick={handleClickOpen}>
							<CardContent>
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<IconButton sx={{ mr: 1 }}>
										<Badge
											badgeContent={item.count}
											color="primary"
											sx={{ transform: 'translateY(-50%)' }}
										>
											<NotificationsIcon />
										</Badge>
									</IconButton>
									<ListItemText primary={item.label} sx={item.style} />
								</Box>
							</CardContent>
						</Card>
						{console.log(`Rendering card: ${item.label} with count: ${item.count}`)}
					</Grid>
				))}

				<Grid item xs={3}>
					<Card variant="outlined" sx={{ height: '100%' }}>
						<CardContent>
							<Typography variant="body2" color="primary">
								Registrar Apelación
							</Typography>
							<Typography variant="body2" color="primary" mt={1}>
								Recalificar
							</Typography>
						</CardContent>
					</Card>
					{console.log('Rendering Registrar Apelación card')}
				</Grid>
			</Grid>

			<Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
				<DialogTitle>Listado de Solicitudes Históricas</DialogTitle>
				<DialogContent>
					{console.log('Rendering Dialog content')}
					<TableContainer component={Paper}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Id</TableCell>
									<TableCell>Fecha Solicitud</TableCell>
									<TableCell>Tipo Solicitud</TableCell>
									<TableCell>Respondido en (días)</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{[
									{
										id: 38256,
										fecha: '23-12-2019',
										tipo: 'Petición Otro',
										respondidoEn: 0,
									},
									{
										id: 38182,
										fecha: '12-12-2019',
										tipo: 'Consulta Información General',
										respondidoEn: 1,
									},
									{
										id: 38080,
										fecha: '09-12-2019',
										tipo: 'Reclamo por Defensa Se solicita cambio de Defensor',
										respondidoEn: 4,
									},
									{
										id: 38051,
										fecha: '04-12-2019',
										tipo: 'Reclamo por Defensa Se solicita cambio de Defensor',
										respondidoEn: 3,
									},
									{
										id: 37981,
										fecha: '27-11-2019',
										tipo: 'Petición Otro',
										respondidoEn: 2,
									},
									{
										id: 37946,
										fecha: '25-11-2019',
										tipo: 'Petición Otro',
										respondidoEn: 9,
									},
									{
										id: 37874,
										fecha: '18-11-2019',
										tipo: 'Reclamo por Defensa Se solicita cambio de Defensor',
										respondidoEn: 8,
									},
									{
										id: 37875,
										fecha: '18-11-2019',
										tipo: 'Reclamo por Defensa Se solicita cambio de Defensor',
										respondidoEn: 4,
									},
									{
										id: 37818,
										fecha: '12-11-2019',
										tipo: 'Reclamo por Defensa no realiza diligencias oportunamente',
										respondidoEn: 2,
									},
									{
										id: 37882,
										fecha: '11-11-2019',
										tipo: 'Reclamo por Defensa Mal trato del o de la defensor',
										respondidoEn: 2,
									},
								].map((row) => (
									<TableRow key={`row-${row.id}`}>
										<TableCell>
											<Link
												to={`#solicitud-${row.id}`}
												onClick={() => handleLinkClick(row.id)}
												style={{ textDecoration: 'none', color: 'inherit' }}
											>
												{row.id}
											</Link>
										</TableCell>
										<TableCell>{row.fecha}</TableCell>
										<TableCell>{row.tipo}</TableCell>
										<TableCell>{row.respondidoEn}</TableCell>
										{console.log(
											`Rendering table row: Id: ${row.id}, Tipo: ${row.tipo}`,
										)}
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cerrar
					</Button>
				</DialogActions>
			</Dialog>

			{alertMessage && (
				<Alert onClose={() => setAlertMessage(null)} severity="info" sx={{ mt: 2 }}>
					{alertMessage}
				</Alert>
			)}
		</Box>
	)
}

export default SolicitudesPendientes
