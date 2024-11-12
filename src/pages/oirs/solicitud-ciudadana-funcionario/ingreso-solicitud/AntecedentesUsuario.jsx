import { Mail, Phone } from '@mui/icons-material';
import {
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	InputLabel,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
	TextField,
} from '@mui/material';
import { Calendar, FileText, MapPin, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Regions from '../../../../api/useRegion';

const AntecedentesUsuario = ({ datosIniciales = {} }) => {
	const [tipoIdentificacion, setTipoIdentificacion] = useState('');
	const [regionResidencia, setRegionResidencia] = useState('');
	const [comunaResidencia, setComunaResidencia] = useState('');
	const [escolaridad, setEscolaridad] = useState('');
	const [etnia, setEtnia] = useState('');
	const [genero, setGenero] = useState('');
	const isDisabled = !!Object.keys(datosIniciales).length;

	const comunas = [
		'Santiago',
		'Concepción',
		'Valparaíso',
		'La Serena',
		'Antofagasta',
		'Temuco',
		'Rancagua',
		'Talca',
		'Arica',
		'Chillán',
		'Iquique',
		'Puerto Montt',
	];

	const escolaridades = [
		'Educación Básica Incompleta',
		'Educación Básica Completa',
		'Educación Media Incompleta',
		'Educación Media Completa',
		'Educación Superior Técnica Incompleta',
		'Educación Superior Técnica Completa',
		'Educación Universitaria Incompleta',
		'Educación Universitaria Completa',
		'Postgrado',
	];

	const etnias = [
		'Mapuche',
		'Aymara',
		'Rapa Nui',
		'Lican Antai',
		'Quechua',
		'Colla',
		'Diaguita',
		'Kawésqar',
		'Yagán',
		'No pertenece a ningún pueblo indígena',
	];

	const generos = ['Masculino', 'Femenino', 'Otro'];

	useEffect(() => {
		if (datosIniciales) {
			setTipoIdentificacion(datosIniciales.tipoIdentificacion || '');
			setRegionResidencia(datosIniciales.regionResidencia || '');
			setComunaResidencia(datosIniciales.comunaResidencia || '');
			setEscolaridad(datosIniciales.escolaridad || '');
			setEtnia(datosIniciales.etnia || '');
			setGenero(datosIniciales.genero || '');
		}
	}, [datosIniciales]);
	return (
		<>
			<Grid container spacing={2} pb={1}>
				<Grid item xs={12}>
					<FormControl component="fieldset" fullWidth>
						<Grid container alignItems="center">
							<Grid item xs={3} md={2}>
								<FormLabel component="legend">Tipo de Persona</FormLabel>
							</Grid>
							<Grid item xs={9} md={10}>
								<RadioGroup row defaultValue="natural">
									<FormControlLabel
										value="natural"
										control={<Radio />}
										label="Natural"
									/>
									<FormControlLabel
										value="juridica"
										control={<Radio />}
										label="Jurídica"
									/>
								</RadioGroup>
							</Grid>
						</Grid>
					</FormControl>
				</Grid>
			</Grid>

			<Grid container spacing={2} pb={3}>
				<Grid item xs={12} md={2}>
					<FormControl fullWidth size="small">
						<InputLabel id="tipo-identificacion-label">Tipo identificación</InputLabel>
						<Select
							labelId="tipo-identificacion-label"
							id="tipo-identificacion"
							value={tipoIdentificacion}
							label="Tipo identificación"
							onChange={(e) => setTipoIdentificacion(e.target.value)}
							disabled={isDisabled}
						>
							<MenuItem value="rut">RUT</MenuItem>
							<MenuItem value="pasaporte">Pasaporte</MenuItem>
							<MenuItem value="dni">DNI</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						id="numero-identificacion"
						label="Número de Identificación"
						variant="outlined"
						fullWidth
						required
						size="small"
						value={datosIniciales.numeroIdentificacion}
						disabled={isDisabled}
						InputProps={{
							startAdornment: <FileText className="mr-2 text-muted-foreground" />,
						}}
					/>
				</Grid>
			</Grid>

			<Grid container spacing={2} pb={3}>
				<Grid item xs={12} md={4}>
					<TextField
						id="nombres"
						label="Nombres"
						variant="outlined"
						fullWidth
						required
						size="small"
						value={datosIniciales.nombres}
						disabled={isDisabled}
						InputProps={{
							startAdornment: <User className="mr-2 text-muted-foreground" />,
						}}
						sx={{
							'& .Mui-disabled': {
								color: '#000000', // Cambia el color del texto
								WebkitTextFillColor: '#000000', // Asegura que el color del texto sea negro en todos los navegadores
							},
							'& .MuiInputLabel-root.Mui-disabled': {
								color: '#000000', // Cambia el color del label
							},
							'& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
								{
									borderColor: '#000000', // Cambia el color del borde
								},
						}}
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						id="apellido-paterno"
						label="Apellido Paterno"
						variant="outlined"
						fullWidth
						required
						size="small"
						value={datosIniciales.apellidoPaterno}
						disabled={isDisabled}
						InputProps={{
							startAdornment: <User className="mr-2 text-muted-foreground" />,
						}}
						sx={{
							'& .Mui-disabled': {
								color: '#000000', // Cambia el color del texto
								WebkitTextFillColor: '#000000', // Asegura que el color del texto sea negro en todos los navegadores
							},
							'& .MuiInputLabel-root.Mui-disabled': {
								color: '#000000', // Cambia el color del label
							},
							'& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
								{
									borderColor: '#000000', // Cambia el color del borde
								},
						}}
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						id="apellido-materno"
						label="Apellido Materno"
						variant="outlined"
						fullWidth
						size="small"
						value={datosIniciales.apellidoMaterno}
						disabled={isDisabled}
						InputProps={{
							startAdornment: <User className="mr-2 text-muted-foreground" />,
						}}
						sx={{
							'& .Mui-disabled': {
								color: '#000000', // Cambia el color del texto
								WebkitTextFillColor: '#000000', // Asegura que el color del texto sea negro en todos los navegadores
							},
							'& .MuiInputLabel-root.Mui-disabled': {
								color: '#000000', // Cambia el color del label
							},
							'& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
								{
									borderColor: '#000000', // Cambia el color del borde
								},
						}}
					/>
				</Grid>

				<Grid item xs={12} md={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="genero-label">Genero</InputLabel>
						<Select
							labelId="genero-label"
							id="genero"
							value={genero}
							label="Género"
							onChange={(e) => setGenero(e.target.value)}
							disabled={!!datosIniciales.genero}
						>
							{generos.map((genero) => (
								<MenuItem key={genero} value={genero}>
									{genero}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						id="fecha-nacimiento"
						label="Fecha Nacimiento"
						type="date"
						variant="outlined"
						fullWidth
						size="small"
						value={datosIniciales.fechaNacimiento}
						disabled={isDisabled}
						InputLabelProps={{ shrink: true }}
						InputProps={{
							startAdornment: <Calendar className="mr-2 text-muted-foreground" />,
						}}
						sx={{
							'& .Mui-disabled': {
								color: '#000000', // Cambia el color del texto
								WebkitTextFillColor: '#000000', // Asegura que el color del texto sea negro en todos los navegadores
							},
							'& .MuiInputLabel-root.Mui-disabled': {
								color: '#000000', // Cambia el color del label
							},
							'& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
								{
									borderColor: '#000000', // Cambia el color del borde
								},
						}}
					/>
				</Grid>
			</Grid>

			<Grid container spacing={2} pb={3}>
				<Grid item xs={12} md={4}>
					<TextField
						id="telefono"
						label="Teléfono"
						variant="outlined"
						fullWidth
						size="small"
						value={datosIniciales.telefono}
						disabled={isDisabled}
						InputProps={{
							startAdornment: <Phone className="mr-2 text-muted-foreground" />,
						}}
						sx={{
							'& .Mui-disabled': {
								color: '#000000', // Cambia el color del texto
								WebkitTextFillColor: '#000000', // Asegura que el color del texto sea negro en todos los navegadores
							},
							'& .MuiInputLabel-root.Mui-disabled': {
								color: '#000000', // Cambia el color del label
							},
							'& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
								{
									borderColor: '#000000', // Cambia el color del borde
								},
						}}
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<TextField
						id="email"
						label="E-mail"
						type="email"
						variant="outlined"
						fullWidth
						size="small"
						value={datosIniciales.email}
						disabled={isDisabled}
						InputProps={{
							startAdornment: <Mail className="mr-2 text-muted-foreground" />,
						}}
						sx={{
							'& .Mui-disabled': {
								color: '#000000', // Cambia el color del texto
								WebkitTextFillColor: '#000000', // Asegura que el color del texto sea negro en todos los navegadores
							},
							'& .MuiInputLabel-root.Mui-disabled': {
								color: '#000000', // Cambia el color del label
							},
							'& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
								{
									borderColor: '#000000', // Cambia el color del borde
								},
						}}
					/>
				</Grid>

				<Grid item xs={12} md={4}>
					<TextField
						id="direccion"
						label="Dirección"
						variant="outlined"
						fullWidth
						size="small"
						value={datosIniciales.direccion}
						disabled={isDisabled}
						InputProps={{
							startAdornment: <MapPin className="mr-2 text-muted-foreground" />,
						}}
						sx={{
							'& .Mui-disabled': {
								color: '#000000', // Cambia el color del texto
								WebkitTextFillColor: '#000000', // Asegura que el color del texto sea negro en todos los navegadores
							},
							'& .MuiInputLabel-root.Mui-disabled': {
								color: '#000000', // Cambia el color del label
							},
							'& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline':
								{
									borderColor: '#000000', // Cambia el color del borde
								},
						}}
					/>
				</Grid>

				<Grid item xs={12} md={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="region-residencia-label">Región residencia</InputLabel>
						<Select
							labelId="region-residencia-label"
							id="region-residencia"
							value={regionResidencia}
							label="Región residencia"
							onChange={(e) => setRegionResidencia(e.target.value)}
							disabled={isDisabled}
						>
							<Regions />
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={12} md={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="comuna-residencia-label">Comuna residencia</InputLabel>
						<Select
							labelId="comuna-residencia-label"
							id="comuna-residencia"
							value={comunaResidencia}
							label="Comuna residencia"
							onChange={(e) => setComunaResidencia(e.target.value)}
							disabled={isDisabled}
						>
							{comunas.map((comuna) => (
								<MenuItem key={comuna} value={comuna}>
									{comuna}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={12} md={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="escolaridad-label">Escolaridad</InputLabel>
						<Select
							labelId="escolaridad-label"
							id="escolaridad"
							value={escolaridad}
							label="Escolaridad"
							onChange={(e) => setEscolaridad(e.target.value)}
							disabled={isDisabled}
						>
							{escolaridades.map((nivel) => (
								<MenuItem key={nivel} value={nivel}>
									{nivel}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="etnia-label">Etnia</InputLabel>
						<Select
							labelId="etnia-label"
							id="etnia"
							value={etnia}
							label="Etnia"
							onChange={(e) => setEtnia(e.target.value)}
							disabled={isDisabled}
						>
							{etnias.map((grupo) => (
								<MenuItem key={grupo} value={grupo}>
									{grupo}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
			</Grid>
		</>
	);
};
AntecedentesUsuario.propTypes = {
	datosIniciales: PropTypes.shape({
		tipoIdentificacion: PropTypes.string,
		regionResidencia: PropTypes.string,
		comunaResidencia: PropTypes.string,
		escolaridad: PropTypes.string,
		etnia: PropTypes.string,
		numeroIdentificacion: PropTypes.string,
		nombres: PropTypes.string,
		apellidoPaterno: PropTypes.string,
		apellidoMaterno: PropTypes.string,
		fechaNacimiento: PropTypes.string,
		telefono: PropTypes.string,
		email: PropTypes.string,
		direccion: PropTypes.string,
	}),
};

export default AntecedentesUsuario;
