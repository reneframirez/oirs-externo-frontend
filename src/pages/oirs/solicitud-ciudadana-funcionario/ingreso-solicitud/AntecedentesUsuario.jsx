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
import axios from 'axios';
import useRegions from '../../../../api/useRegion';

const AntecedentesUsuario = ({ datosIniciales = {} }) => {
	const [formValues, setFormValues] = useState({ ...datosIniciales });
	const regiones = useRegions();
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

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};

	const commonTextFieldStyles = {
		'& .Mui-disabled': {
			color: '#000000',
			WebkitTextFillColor: '#000000',
		},
		'& .MuiInputLabel-root.Mui-disabled': {
			color: '#000000',
		},
		'& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
			borderColor: '#000000',
		},
	};

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
								<RadioGroup
									row
									defaultValue={formValues.tipoPersona || 'natural'}
									onChange={handleInputChange}
									name="tipoPersona"
								>
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
							label="Tipo identificación"
							name="tipoIdentificacion"
							value={formValues.tipoIdentificacion || ''}
							onChange={handleInputChange}
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
						name="numeroIdentificacion"
						value={formValues.numeroIdentificacion || ''}
						onChange={handleInputChange}
						disabled={isDisabled}
						InputProps={{
							startAdornment: <FileText className="mr-2 text-muted-foreground" />,
						}}
						sx={commonTextFieldStyles}
					/>
				</Grid>
			</Grid>

			<Grid container spacing={2} pb={3}>
				{['nombres', 'apellidoPaterno', 'apellidoMaterno'].map((field, index) => (
					<Grid item xs={12} md={4} key={field}>
						<TextField
							id={field}
							label={
								field === 'nombres'
									? 'Nombres'
									: field === 'apellidoPaterno'
									? 'Apellido Paterno'
									: 'Apellido Materno'
							}
							variant="outlined"
							fullWidth
							required={field !== 'apellidoMaterno'}
							size="small"
							name={field}
							value={formValues[field] || ''}
							onChange={handleInputChange}
							disabled={isDisabled}
							InputProps={{
								startAdornment: <User className="mr-2 text-muted-foreground" />,
							}}
							sx={commonTextFieldStyles}
						/>
					</Grid>
				))}

				<Grid item xs={12} md={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="genero-label">Genero</InputLabel>
						<Select
							labelId="genero-label"
							id="genero"
							label="Género"
							name="genero"
							value={formValues.genero || ''}
							onChange={handleInputChange}
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
						name="fechaNacimiento"
						value={formValues.fechaNacimiento || ''}
						onChange={handleInputChange}
						disabled={isDisabled}
						InputLabelProps={{ shrink: true }}
						InputProps={{
							startAdornment: <Calendar className="mr-2 text-muted-foreground" />,
						}}
						sx={commonTextFieldStyles}
					/>
				</Grid>
			</Grid>

			<Grid container spacing={2} pb={3}>
				{['telefono', 'email', 'direccion'].map((field, index) => (
					<Grid item xs={12} md={4} key={field}>
						<TextField
							id={field}
							label={
								field === 'telefono'
									? 'Teléfono'
									: field === 'email'
									? 'E-mail'
									: 'Dirección'
							}
							type={field === 'email' ? 'email' : 'text'}
							variant="outlined"
							fullWidth
							size="small"
							name={field}
							value={formValues[field] || ''}
							onChange={handleInputChange}
							disabled={isDisabled}
							InputProps={{
								startAdornment:
									field === 'telefono' ? (
										<Phone className="mr-2 text-muted-foreground" />
									) : field === 'email' ? (
										<Mail className="mr-2 text-muted-foreground" />
									) : (
										<MapPin className="mr-2 text-muted-foreground" />
									),
							}}
							sx={commonTextFieldStyles}
						/>
					</Grid>
				))}

				<Grid item xs={12} md={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="region-residencia-label">Región residencia</InputLabel>
						<Select
							labelId="region-residencia-label"
							id="region-residencia"
							label="Región residencia"
							name="regionResidencia"
							value={formValues.regionResidencia || ''}
							onChange={handleInputChange} // Añadir onChange
							disabled={isDisabled}
						>
							{regiones.map((region, index) => (
								<MenuItem key={index} value={region.name}>
									{region.name}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>

				{[
					{ id: 'comuna-residencia', label: 'Comuna residencia', options: comunas },
					{ id: 'escolaridad', label: 'Escolaridad', options: escolaridades },
					{ id: 'etnia', label: 'Etnia', options: etnias },
				].map(({ id, label, options }) => (
					<Grid item xs={12} md={4} key={id}>
						<FormControl fullWidth size="small">
							<InputLabel id={`${id}-label`}>{label}</InputLabel>
							<Select
								labelId={`${id}-label`}
								id={id}
								label={label}
								name={id}
								value={formValues[id] || ''}
								onChange={handleInputChange}
								disabled={isDisabled}
							>
								{options.map((option) => (
									<MenuItem key={option} value={option}>
										{option}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				))}
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
