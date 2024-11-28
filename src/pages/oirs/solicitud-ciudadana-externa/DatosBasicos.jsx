import { useForm, Controller } from 'react-hook-form';
import {
	TextField,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	Box,
	CircularProgress,
} from '@mui/material';
import { Person, Badge, Cake, Phone, Email, Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFormularioData } from '../../../store/reducer';
import { useEffect, useState } from 'react';
import { BackButton, NextButton } from '../../../components/CustomButtons';
import { fetchComunas, fetchRegiones } from '../../../api/fetchRegionesComunas';
import { fetchGeneros } from '../../../api/fetchGeneros';
import { fetchNacionalidades } from '../../../api/fetchNacionalidades';
import { fetchEscolaridades } from '../../../api/fetchEscolaridades';
import { fetchEtnias } from '../../../api/fetchEtnias';

const DatosBasicos = () => {
	const [generos, setGeneros] = useState([]);
	const [regiones, setRegiones] = useState([]);
	const [selectedRegion, setSelectedRegion] = useState('');
	const [comunas, setComunas] = useState([]);
	const [nacionalidades, setNacionalidades] = useState([]);
	const [escolaridades, setEscolaridades] = useState([]);
	const [etnias, setEtnias] = useState([]);
	const [error, setError] = useState(null);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const formularioData = useSelector((state) => state.formularioData);
	const {
		handleSubmit,
		control,
		formState: { errors },
		reset,
		getFieldState,
		getValues,
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
		const loadFetchData = async () => {
			try {
				const generosData = await fetchGeneros();
				setGeneros(generosData);
				const regionesData = await fetchRegiones();
				setRegiones(regionesData);
				const nacionalidadesData = await fetchNacionalidades();
				setNacionalidades(nacionalidadesData);
				const escolaridadesData = await fetchEscolaridades();
				setEscolaridades(escolaridadesData);
				const etniasData = await fetchEtnias();
				setEtnias(etniasData);
			} catch (err) {
				setError(err.message);
			}
		};

		loadFetchData();
	}, [formularioData, reset]);

	const handleRegionChange = async (event) => {
		const regionId = event.target.value;
		setSelectedRegion(regionId);
		setComunas([]);

		try {
			const comunasData = await fetchComunas(regionId);
			setComunas(comunasData);
		} catch (err) {
			setError(err.message);
		}
	};

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
							onChange={(e) =>
								formularioData.tipoIdentificacion.value(e.target.value)
							}
							rules={{ required: 'Este campo es obligatorio' }}
							render={({ field }) => (
								<Select
									{...field}
									name="tipoIdentificacion"
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
					{formularioData.tipoIdentificacion === 'run' ? (
						<Controller
							name="numeroIdentificacion"
							control={control}
							defaultValue=""
							rules={{
								required: 'Este campo es obligatorio',
								minLength: 9,
								maxLength: 9,
							}}
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
					) : (
						<Controller
							name="numeroIdentificacion"
							control={control}
							defaultValue=""
							rules={{
								required: 'Este campo es obligatorio',
								minLength: 9,
								maxLength: 9,
							}}
							render={({ field }) => (
								<TextField
									{...field}
									label="Número de identificación *"
									variant="outlined"
									fullWidth
									disabled
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
					)}
				</Box>

				{/* Nombres y Apellidos */}
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
						gap: 2,
					}}
				>
					{formularioData.numeroIdentificacion === '111111111' ? (
						<Controller
							name="nombres"
							control={control}
							defaultValue="Diego"
							rules={{
								required: 'Este campo es obligatorio',
								minLength: 2,
								maxLength: 20,
							}}
							render={({ field }) => (
								<TextField
									{...field}
									label="Nombres *"
									variant="outlined"
									fullWidth
									disabled
									error={!!errors.nombres}
									helperText={errors.nombres ? errors.nombres.message : ''}
									InputProps={{
										startAdornment: <Person className="text-gray-400 mr-2" />,
									}}
								/>
							)}
						/>
					) : (
						<Controller
							name="nombres"
							control={control}
							defaultValue=""
							rules={{
								required: 'Este campo es obligatorio',
								minLength: 2,
								maxLength: 20,
							}}
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
					)}

					{formularioData.numeroIdentificacion === '222' ? (
						<Controller
							name="apellidoPaterno"
							control={control}
							defaultValue="a"
							rules={{
								required: 'Este campo es obligatorio',
								minLength: 2,
								maxLength: 20,
							}}
							render={({ field }) => (
								<TextField
									{...field}
									label="Apellido Paterno *"
									variant="outlined"
									fullWidth
									disabled
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
					) : (
						<Controller
							name="apellidoPaterno"
							control={control}
							defaultValue=""
							rules={{
								required: 'Este campo es obligatorio',
								minLength: 2,
								maxLength: 20,
							}}
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
					)}

					{formularioData.numeroIdentificacion === '222' ? (
						<Controller
							name="apellidoMaterno"
							control={control}
							defaultValue="a"
							rules={{ required: 'Este campo es obligatorio' }}
							render={({ field }) => (
								<TextField
									{...field}
									label="Apellido Materno *"
									variant="outlined"
									fullWidth
									disabled
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
					) : (
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
					)}
				</Box>

				{/* Edad, Género, Teléfono, Email */}
				<Box
					sx={{
						display: 'grid',
						gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' },
						gap: 2,
					}}
				>
					{formularioData.numeroIdentificacion === '222' ? (
						<Controller
							name="edad"
							control={control}
							defaultValue="22"
							rules={{
								required: 'Este campo es obligatorio',
								minLength: 1,
								maxLength: 2,
							}}
							render={({ field }) => (
								<TextField
									{...field}
									label="Edad *"
									variant="outlined"
									fullWidth
									disabled
									error={!!errors.edad}
									helperText={errors.edad ? errors.edad.message : ''}
									InputProps={{
										startAdornment: <Cake className="text-gray-400 mr-2" />,
									}}
								/>
							)}
						/>
					) : (
						<Controller
							name="edad"
							control={control}
							defaultValue=""
							rules={{
								required: 'Este campo es obligatorio',
								minLength: 1,
								maxLength: 2,
							}}
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
					)}

					{formularioData.numeroIdentificacion === '222' ? (
						<FormControl fullWidth error={!!errors.genero}>
							<InputLabel id="genero-select-label">Género *</InputLabel>
							<Controller
								name="genero"
								control={control}
								defaultValue="Masculino"
								rules={{ required: 'Este campo es obligatorio' }}
								render={({ field }) => (
									<Select
										{...field}
										labelId="genero-select-label"
										label="Género *"
										disabled
									>
										{generos.map((genero) => (
											<MenuItem key={genero.id} value={genero.value}>
												{genero.value}
											</MenuItem>
										))}
									</Select>
								)}
							/>
							{errors.genero && (
								<p className="text-red-600">{errors.genero.message}</p>
							)}
						</FormControl>
					) : (
						<FormControl fullWidth error={!!errors.genero}>
							<InputLabel id="genero-select-label">Género *</InputLabel>
							<Controller
								name="genero"
								control={control}
								defaultValue=""
								rules={{ required: 'Este campo es obligatorio' }}
								render={({ field }) => (
									<Select
										{...field}
										labelId="genero-select-label"
										label="Género *"
									>
										{generos.map((genero) => (
											<MenuItem key={genero.id} value={genero.value}>
												{genero.value}
											</MenuItem>
										))}
									</Select>
								)}
							/>
							{errors.genero && (
								<p className="text-red-600">{errors.genero.message}</p>
							)}
						</FormControl>
					)}

					<Controller
						name="telefono"
						control={control}
						defaultValue=""
						rules={{
							required: 'Este campo es obligatorio',
							minLength: 8,
							maxLength: 13,
						}}
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
									onChange={handleRegionChange}
									value={selectedRegion}
								>
									{regiones.map((region) => (
										<MenuItem key={region.id} value={region.id}>
											{region.name}
										</MenuItem>
									))}
								</Select>
							)}
						/>
						{errors.regionResidencia && (
							<p className="text-red-600">{errors.regionResidencia.message}</p>
						)}
					</FormControl>

					<FormControl
						fullWidth
						error={!!errors.comunaResidencia}
						disabled={!selectedRegion}
					>
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
									{comunas.map((commune, index) => (
										<MenuItem key={index}>{commune}</MenuItem>
									))}
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
					<FormControl fullWidth error={!!errors.nacionalidad}>
						<InputLabel id="nacionalidad-label">Nacionalidad *</InputLabel>
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
									{nacionalidades.map((nacionalidad) => (
										<MenuItem key={nacionalidad.id} value={nacionalidad.value}>
											{nacionalidad.value}
										</MenuItem>
									))}
								</Select>
							)}
						/>
						{errors.nacionalidad && (
							<p className="text-red-600">{errors.nacionalidad.message}</p>
						)}
					</FormControl>

					<FormControl fullWidth error={!!errors.escolaridad}>
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
									{escolaridades.map((escolaridad) => (
										<MenuItem key={escolaridad.id} value={escolaridad.value}>
											{escolaridad.value}
										</MenuItem>
									))}
								</Select>
							)}
						/>
						{errors.escolaridad && (
							<p className="text-red-600">{errors.escolaridad.message}</p>
						)}
					</FormControl>

					<FormControl fullWidth error={!!errors.etnia}>
						<InputLabel id="etnia-label">Etnia *</InputLabel>
						<Controller
							name="etnia"
							control={control}
							defaultValue=""
							rules={{ required: 'Este campo es obligatorio' }}
							render={({ field }) => (
								<Select {...field} labelId="etnia-label" label="Etnia *">
									{etnias.map((etnia) => (
										<MenuItem key={etnia.id} value={etnia.value}>
											{etnia.value}
										</MenuItem>
									))}
								</Select>
							)}
						/>
						{errors.etnia && <p className="text-red-600">{errors.etnia.message}</p>}
					</FormControl>
				</Box>

				{/* Botón de Enviar */}
				<Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
					<BackButton />
					<NextButton onClick={handleSubmit(onSubmit)} />
				</Box>
			</form>
		</Box>
	);
};

export default DatosBasicos;
