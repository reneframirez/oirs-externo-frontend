import { useForm, Controller } from 'react-hook-form';
import { TextField, Select, MenuItem, InputLabel, FormControl, Box } from '@mui/material';
import { Person, Badge, Cake, Phone, Email, Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFormularioData } from '../../../store/reducer';
import { useEffect } from 'react';
import { BackButton, SaveButton } from '../../../components/CustomButtons';

const DatosBasicos = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const formularioData = useSelector((state) => state.formularioData);
	const {
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: formularioData || {},
	});

	const onSubmit = (data) => {
		console.log(data);
		dispatch(setFormularioData(data));
		navigate('/oirs/solicitud-ciudadana-externa/datos-causa');
	};

	useEffect(() => {
		reset(formularioData);
	}, [formularioData, reset]);

	return (
		<Box sx={{ flex: 1, p: 2, width: '100%' }}>
			<h1 className="text-2xl font-bold text-blue-700 mb-6">
				Formulario de Ingreso de Solicitudes Ciudadanas
			</h1>
			<p className="text-sm text-gray-600 mb-8">
				Para que la Defensoría trámite sus solicitudes, es obligatorio que llene los
				espacios con asteriscos *
			</p>

			<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
				<h2 className="text-xl font-semibold text-blue-700 mb-4">
					Antecedentes personales
				</h2>

				{/* Nombres y Apellidos */}
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
						gap: 2,
					}}
				>
					<Controller
						name="nombres"
						control={control}
						defaultValue=""
						rules={{ required: 'Este campo es obligatorio' }}
						render={({ field }) => (
							<TextField
								{...field}
								label="Nombres *"
								variant="outlined"
								fullWidth
								error={!!errors.nombres}
								helperText={errors.nombres ? errors.nombres.message : ''}
								InputProps={{
									startAdornment: <Person className="text-gray-400 mr-2" />,
								}}
							/>
						)}
					/>
					<Controller
						name="apellidoPaterno"
						control={control}
						defaultValue=""
						rules={{ required: 'Este campo es obligatorio' }}
						render={({ field }) => (
							<TextField
								{...field}
								label="Apellido Paterno *"
								variant="outlined"
								fullWidth
								error={!!errors.apellidoPaterno}
								helperText={
									errors.apellidoPaterno ? errors.apellidoPaterno.message : ''
								}
								InputProps={{
									startAdornment: <Person className="text-gray-400 mr-2" />,
								}}
							/>
						)}
					/>
					<Controller
						name="apellidoMaterno"
						control={control}
						defaultValue=""
						rules={{ required: 'Este campo es obligatorio' }}
						render={({ field }) => (
							<TextField
								{...field}
								label="Apellido Materno *"
								variant="outlined"
								fullWidth
								error={!!errors.apellidoMaterno}
								helperText={
									errors.apellidoMaterno ? errors.apellidoMaterno.message : ''
								}
								InputProps={{
									startAdornment: <Person className="text-gray-400 mr-2" />,
								}}
							/>
						)}
					/>
				</Box>

				{/* Identificación */}
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
						gap: 2,
					}}
				>
					<FormControl fullWidth error={!!errors.tipoIdentificacion}>
						<InputLabel id="tipo-identificacion-select-label">
							Tipo de identificación *
						</InputLabel>
						<Controller
							name="tipoIdentificacion"
							control={control}
							defaultValue=""
							rules={{ required: 'Este campo es obligatorio' }}
							render={({ field }) => (
								<Select
									{...field}
									labelId="tipo-identificacion-select-label"
									label="Tipo de identificación *"
								>
									<MenuItem value="run">Run</MenuItem>
									<MenuItem value="passport">Pasaporte</MenuItem>
									<MenuItem value="dni">DNI</MenuItem>
									<MenuItem value="indocumentado">Indocumentado</MenuItem>
									<MenuItem value="otro">Otro</MenuItem>
								</Select>
							)}
						/>
						{errors.tipoIdentificacion && (
							<p className="text-red-600">{errors.tipoIdentificacion.message}</p>
						)}
					</FormControl>

					<Controller
						name="numeroIdentificacion"
						control={control}
						defaultValue=""
						rules={{ required: 'Este campo es obligatorio' }}
						render={({ field }) => (
							<TextField
								{...field}
								label="Número de identificación *"
								variant="outlined"
								fullWidth
								error={!!errors.numeroIdentificacion}
								helperText={
									errors.numeroIdentificacion
										? errors.numeroIdentificacion.message
										: ''
								}
								InputProps={{
									startAdornment: <Badge className="text-gray-400 mr-2" />,
								}}
							/>
						)}
					/>
				</Box>

				{/* Edad, Género, Teléfono, Email */}
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
						gap: 2,
					}}
				>
					<Controller
						name="edad"
						control={control}
						defaultValue=""
						rules={{ required: 'Este campo es obligatorio' }}
						render={({ field }) => (
							<TextField
								{...field}
								label="Edad *"
								variant="outlined"
								fullWidth
								error={!!errors.edad}
								helperText={errors.edad ? errors.edad.message : ''}
								InputProps={{
									startAdornment: <Cake className="text-gray-400 mr-2" />,
								}}
							/>
						)}
					/>
					<FormControl fullWidth error={!!errors.genero}>
						<InputLabel id="genero-select-label">Género *</InputLabel>
						<Controller
							name="genero"
							control={control}
							defaultValue=""
							rules={{ required: 'Este campo es obligatorio' }}
							render={({ field }) => (
								<Select {...field} labelId="genero-select-label" label="Género *">
									<MenuItem value="male">Masculino</MenuItem>
									<MenuItem value="female">Femenino</MenuItem>
									<MenuItem value="other">Otro</MenuItem>
								</Select>
							)}
						/>
						{errors.genero && <p className="text-red-600">{errors.genero.message}</p>}
					</FormControl>

					<Controller
						name="telefono"
						control={control}
						defaultValue=""
						rules={{ required: 'Este campo es obligatorio' }}
						render={({ field }) => (
							<TextField
								{...field}
								label="Teléfono *"
								variant="outlined"
								fullWidth
								error={!!errors.telefono}
								helperText={errors.telefono ? errors.telefono.message : ''}
								InputProps={{
									startAdornment: <Phone className="text-gray-400 mr-2" />,
								}}
							/>
						)}
					/>
					<Controller
						name="email"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<TextField
								{...field}
								label="Email"
								variant="outlined"
								fullWidth
								InputProps={{
									startAdornment: <Email className="text-gray-400 mr-2" />,
								}}
							/>
						)}
					/>
				</Box>

				{/* Dirección, Región, Comuna */}
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
						gap: 2,
					}}
				>
					<Controller
						name="direccion"
						control={control}
						defaultValue=""
						rules={{ required: 'Este campo es obligatorio' }}
						render={({ field }) => (
							<TextField
								{...field}
								label="Dirección *"
								variant="outlined"
								fullWidth
								error={!!errors.direccion}
								helperText={errors.direccion ? errors.direccion.message : ''}
								InputProps={{
									startAdornment: <Home className="text-gray-400 mr-2" />,
								}}
							/>
						)}
					/>

					<FormControl fullWidth error={!!errors.regionResidencia}>
						<InputLabel id="region-residencia-label">Región de residencia *</InputLabel>
						<Controller
							name="regionResidencia"
							control={control}
							defaultValue=""
							rules={{ required: 'Este campo es obligatorio' }}
							render={({ field }) => (
								<Select
									{...field}
									labelId="region-residencia-label"
									label="Región de residencia *"
								>
									<MenuItem value="region1">Región 1</MenuItem>
									<MenuItem value="region2">Región 2</MenuItem>
								</Select>
							)}
						/>
						{errors.regionResidencia && (
							<p className="text-red-600">{errors.regionResidencia.message}</p>
						)}
					</FormControl>

					<FormControl fullWidth error={!!errors.comunaResidencia}>
						<InputLabel id="comuna-residencia-label">Comuna de residencia *</InputLabel>
						<Controller
							name="comunaResidencia"
							control={control}
							defaultValue=""
							rules={{ required: 'Este campo es obligatorio' }}
							render={({ field }) => (
								<Select
									{...field}
									labelId="comuna-residencia-label"
									label="Comuna de residencia *"
								>
									<MenuItem value="comuna1">Comuna 1</MenuItem>
									<MenuItem value="comuna2">Comuna 2</MenuItem>
								</Select>
							)}
						/>
						{errors.comunaResidencia && (
							<p className="text-red-600">{errors.comunaResidencia.message}</p>
						)}
					</FormControl>
				</Box>

				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
						gap: 2,
					}}
					>
					<FormControl fullWidth error={!!errors.regionResidencia}>
						<InputLabel id="escolaridad-label">Nacionalidad *</InputLabel>
					<Controller
						name="nacionalidad"
						control={control}
						defaultValue=""
						rules={{ required: 'Este campo es obligatorio' }}
						render={({ field }) => (
							<Select
							{...field}
							labelId="nacionalidad-label"
							label="Nacionalidad *"
							>
									<MenuItem value="region1">Chilena</MenuItem>
									<MenuItem value="region2">Argentina</MenuItem>
									<MenuItem value="region2">...</MenuItem>
								</Select>
						)}
					/>
						{errors.nacionalidad && (
							<p className="text-red-600">{errors.nacionalidad.message}</p>
						)}					
					</FormControl>	

					<FormControl fullWidth error={!!errors.regionResidencia}>
						<InputLabel id="escolaridad-label">Escolaridad *</InputLabel>
						<Controller
							name="escolaridad"
							control={control}
							defaultValue=""
							rules={{ required: 'Este campo es obligatorio' }}
							render={({ field }) => (
								<Select
									{...field}
									labelId="escolaridad-label"
									label="Escolaridad *"
								>
									<MenuItem value="region1">Basica</MenuItem>
									<MenuItem value="region2">Completa</MenuItem>
									<MenuItem value="region2">...</MenuItem>
								</Select>
							)}
						/>
						{errors.escolaridad && (
							<p className="text-red-600">{errors.escolaridad.message}</p>
						)}
					</FormControl>

					<FormControl fullWidth error={!!errors.comunaResidencia}>
						<InputLabel id="etnia-label">Etnia *</InputLabel>
						<Controller
							name="etnia"
							control={control}
							defaultValue=""
							rules={{ required: 'Este campo es obligatorio' }}
							render={({ field }) => (
								<Select
									{...field}
									labelId="etnia-label"
									label="Etnia *"
								>
									<MenuItem value="comuna1">Aimara</MenuItem>
									<MenuItem value="comuna2">Mapuche</MenuItem>
								</Select>
							)}
						/>
						{errors.etnia && (
							<p className="text-red-600">{errors.etnia.message}</p>
						)}
					</FormControl>
				</Box>

				{/* Botón de Enviar */}
				<Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
					<BackButton />
					<SaveButton onClick={handleSubmit(onSubmit)} />
				</Box>
			</form>
		</Box>
	);
};

export default DatosBasicos;
