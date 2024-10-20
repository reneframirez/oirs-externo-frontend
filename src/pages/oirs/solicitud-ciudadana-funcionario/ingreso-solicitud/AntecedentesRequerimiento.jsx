import { useState } from 'react';
import {
	Box,
	Typography,
	Grid,
	TextField,
	FormControl,
	Button,
	Modal,
	InputAdornment,
	MenuItem,
	Select,
	InputLabel,
} from '@mui/material';
import {
	User,
	Calendar,
	GraduationCap,
	Globe,
	Gavel,
	Lock,
	ChevronDown,
	MapPin,
	ClipboardList,
	Mail,
	Phone,
} from 'lucide-react';
import ModalBusquedaCausa from './ModalBusquedaCausa';

const AntecedentesImputadoForm = () => {
	/* Modal Busqueda Causa */
	const [open, setOpen] = useState(false);
	const [selectedRecord, setSelectedRecord] = useState(null);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleSearch = (results) => {
		console.log('Resultados de la búsqueda:', results);
	};
	const handleSelectRecord = (record) => {
		setSelectedRecord(record);
		console.log('Registro seleccionado:', record);
	};

	/* Formulario Requerimiento */
	const [formData, setFormData] = useState({
		region: '',
		comuna: '',
		tipoSolicitud: '',
		tipoRecepcion: '',
		responderVia: '',
		requerimiento: '',
	});

	const regiones = ['Región Metropolitana', 'Valparaíso', 'Biobío', 'Araucanía'];
	const comunas = ['Santiago', 'Viña del Mar', 'Concepción', 'Temuco'];
	const tiposSolicitud = ['Reclamo', 'Consulta', 'Sugerencia'];
	const tiposRecepcion = ['Correo Electrónico', 'Presencial', 'Teléfono'];
	const responderVias = ['Correo Electrónico', 'Teléfono', 'Carta'];

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const renderSelectField = (label, name, value, options, icon) => (
		<FormControl fullWidth size="small">
			<InputLabel id={`${name}-label`}>{label} *</InputLabel>
			<Select
				labelId={`${name}-label`}
				id={name}
				name={name}
				value={value}
				onChange={handleChange}
				IconComponent={ChevronDown}
				label={`${label} *`}
				startAdornment={<InputAdornment position="start">{icon}</InputAdornment>}
			>
				<MenuItem value="">
					<em>Seleccionar...</em>
				</MenuItem>
				{options.map((option, index) => (
					<MenuItem key={index} value={option}>
						{option}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);

	return (
		<Box>
			{/* Formulario Requerimiento */}
			<Grid container spacing={2} py={2}>
				<Grid item xs={12} sm={4}>
					{renderSelectField(
						'Tipo Solicitud',
						'tipoSolicitud',
						formData.tipoSolicitud,
						tiposSolicitud,
						<ClipboardList />,
					)}
				</Grid>
				<Grid item xs={12} sm={4}>
					{renderSelectField('Región', 'region', formData.region, regiones, <MapPin />)}
				</Grid>
				<Grid item xs={12} sm={4}>
					{renderSelectField('Comuna', 'comuna', formData.comuna, comunas, <MapPin />)}
				</Grid>
				<Grid item xs={12} sm={4}>
					{renderSelectField(
						'Tipo de Recepción',
						'tipoRecepcion',
						formData.tipoRecepcion,
						tiposRecepcion,
						<Mail />,
					)}
				</Grid>
				<Grid item xs={12} sm={4}>
					{renderSelectField(
						'Responder Vía',
						'responderVia',
						formData.responderVia,
						responderVias,
						<Phone />,
					)}
				</Grid>
				<Grid item xs={12} sm={12}>
					<TextField
						id="requerimiento"
						name="requerimiento"
						label="Requerimiento *"
						multiline
						rows={4}
						fullWidth
						margin="normal"
						value={formData.requerimiento}
						onChange={handleChange}
					/>
				</Grid>

				<Grid item xs={12} sm={12} pb={2}>
					{formData.tipoSolicitud === 'Reclamo' && (
						<>
							<Typography variant="h6" color="primary" gutterBottom>
								Antecedentes del Imputado
							</Typography>
							<Button
								onClick={handleOpen}
								variant="contained"
								size="small"
								sx={{
									mb: 2,
									backgroundColor: '#1976d2',
									color: 'white',
									'&:hover': {
										backgroundColor: '#115293',
									},
								}}
							>
								Buscar Información del Imputado
							</Button>
							{!selectedRecord ? (
								<Typography variant="body2" color="textSecondary" gutterBottom>
									No existen medidas vigentes para este imputado.
								</Typography>
							) : null}
							<Grid container spacing={2} pb={2}>
								{[
									{
										label: 'RUN',
										value: selectedRecord ? selectedRecord.run : '',
										icon: <User />,
									},
									{
										label: 'Nombre',
										value: selectedRecord ? selectedRecord.nombreImputado : '',
										icon: <User />,
									},
									{
										label: 'Apellido Paterno',
										value: selectedRecord ? selectedRecord.apellidoPaterno : '',
										icon: <User />,
									},
									{
										label: 'Apellido Materno',
										value: selectedRecord ? selectedRecord.apellidoMaterno : '',
										icon: <User />,
									},
									{
										label: 'Fecha Nacimiento',
										value: selectedRecord ? selectedRecord.fechaNacimiento : '',
										icon: <Calendar />,
									},
									{
										label: 'Género',
										value: selectedRecord ? selectedRecord.genero : '',
										icon: <User />,
									},
									{
										label: 'Nivel de Escolaridad',
										value: selectedRecord
											? selectedRecord.nivelEscolaridad
											: '',
										icon: <GraduationCap />,
									},
									{
										label: 'Nacionalidad',
										value: selectedRecord ? selectedRecord.nacionalidad : '',
										icon: <Globe />,
									},
									{
										label: 'RUD / Petición',
										value: selectedRecord ? selectedRecord.rudPeticion : '',
										icon: <Gavel />,
									},
									{
										label: 'RUC',
										value: selectedRecord ? selectedRecord.ruc : '',
										icon: <Gavel />,
									},
									{
										label: 'Tribunal',
										value: selectedRecord ? selectedRecord.tribunal : '',
										icon: <Gavel />,
									},
									{
										label: 'RIT',
										value: selectedRecord ? selectedRecord.rit : '',
										icon: <Gavel />,
									},
								].map((field, index) => (
									<Grid item xs={12} sm={6} md={3} key={index}>
										<TextField
											label={field.label}
											value={field.value || 'N/A'}
											InputProps={{
												readOnly: true,
												startAdornment: (
													<InputAdornment position="start">
														{field.icon}
													</InputAdornment>
												),
												endAdornment: (
													<InputAdornment position="end">
														<Lock style={{ color: '#d32f2f' }} />
													</InputAdornment>
												),
											}}
											fullWidth
											variant="outlined"
											size="small"
											sx={{
												'& .MuiOutlinedInput-root.Mui-disabled': {
													backgroundColor: '#f5f5f5',
												},
											}}
										/>
									</Grid>
								))}
							</Grid>
						</>
					)}
				</Grid>
			</Grid>

			{/* Antecedentes del Imputado - Visible solo si Tipo Solicitud es Reclamo */}

			<Modal open={open} onClose={handleClose}>
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: 400,
						bgcolor: 'background.paper',
						boxShadow: 24,
						p: 4,
						borderRadius: '8px',
					}}
				>
					<ModalBusquedaCausa
						open={open}
						onClose={handleClose}
						onSearch={handleSearch}
						onSelectRecord={handleSelectRecord}
					/>
				</Box>
			</Modal>
		</Box>
	);
};

export default AntecedentesImputadoForm;
