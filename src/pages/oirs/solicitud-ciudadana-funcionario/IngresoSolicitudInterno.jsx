import { useState } from 'react'
import {
	Button,
	TextField,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
	FormLabel,
	MenuItem,
	Select,
	InputLabel,
	Grid,
	Typography,
	Box,
} from '@mui/material'
import { User, Mail, Phone, MapPin, FileText, Calendar } from 'lucide-react'

export default function IngresoSolicitudInterno() {
	const [tipoSolicitud, setTipoSolicitud] = useState('')
	const [tipoIdentificacion, setTipoIdentificacion] = useState('')
	const [regionResidencia, setRegionResidencia] = useState('')
	const [comunaResidencia, setComunaResidencia] = useState('')
	const [escolaridad, setEscolaridad] = useState('')
	const [etnia, setEtnia] = useState('')
	const [region, setRegion] = useState('')
	const [comuna, setComuna] = useState('')
	const [tipoRecepcion, setTipoRecepcion] = useState('')
	const [responderVia, setResponderVia] = useState('')
	const [institucionPublica, setInstitucionPublica] = useState('')

	const regionsOfChile = [
		'Arica y Parinacota',
		'Tarapacá',
		'Antofagasta',
		'Atacama',
		'Coquimbo',
		'Valparaíso',
		'Metropolitana de Santiago',
		'Libertador General Bernardo O´Higgins',
		'Maule',
		'Ñuble',
		'Biobío',
		'La Araucanía',
		'Los Ríos',
		'Los Lagos',
		'Aysén del General Carlos Ibáñez del Campo',
		'Magallanes y de la Antártica Chilena',
	]

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
	]

	/*const nacionalidades = [
    'Chilena', 'Argentina', 'Peruana', 'Boliviana', 'Colombiana',
    'Venezolana', 'Haitiana', 'Ecuatoriana', 'Brasileña', 'Española'
  ];*/

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
	]

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
	]

	const tiposRecepcion = [
		'Presencial',
		'Correo Electrónico',
		'Teléfono',
		'Carta',
		'Formulario Web',
	]

	const institucionesPublicas = [
		'Ministerio de Educación',
		'Ministerio de Salud',
		'Ministerio del Interior',
		'Servicio de Impuestos Internos',
		'Registro Civil',
		'Ministerio de Vivienda y Urbanismo',
		'Ministerio de Desarrollo Social',
		'Ministerio del Trabajo',
		'Ministerio de Transportes y Telecomunicaciones',
	]
	return (
		<Box sx={{ flex: 1, p: 2, width: '100%' }}>
			<h1 className="text-2xl font-bold text-blue-700 mb-6">Información del formulario</h1>

			<form className="space-y-8">
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<TextField
							id="folio"
							label="Folio"
							variant="outlined"
							fullWidth
							InputProps={{
								startAdornment: <FileText className="mr-2 text-muted-foreground" />,
							}}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							id="fecha"
							label="Fecha"
							type="date"
							variant="outlined"
							fullWidth
							InputLabelProps={{ shrink: true }}
							InputProps={{
								startAdornment: <Calendar className="mr-2 text-muted-foreground" />,
							}}
						/>
					</Grid>
				</Grid>

				<Typography variant="h6" gutterBottom>
					Antecedentes del usuario
				</Typography>
				<FormControl component="fieldset" fullWidth>
					<FormLabel component="legend">Tipo de Persona</FormLabel>
					<RadioGroup row defaultValue="natural">
						<FormControlLabel value="natural" control={<Radio />} label="Natural" />
						<FormControlLabel value="juridica" control={<Radio />} label="Jurídica" />
					</RadioGroup>
				</FormControl>

				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<TextField
							id="nombres"
							label="Nombres"
							variant="outlined"
							fullWidth
							required
							InputProps={{
								startAdornment: <User className="mr-2 text-muted-foreground" />,
							}}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							id="apellido-paterno"
							label="Apellido Paterno"
							variant="outlined"
							fullWidth
							required
							InputProps={{
								startAdornment: <User className="mr-2 text-muted-foreground" />,
							}}
						/>
					</Grid>
				</Grid>

				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<TextField
							id="apellido-materno"
							label="Apellido Materno"
							variant="outlined"
							fullWidth
							InputProps={{
								startAdornment: <User className="mr-2 text-muted-foreground" />,
							}}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<FormControl fullWidth>
							<InputLabel id="tipo-identificacion-label">
								Tipo identificación
							</InputLabel>
							<Select
								labelId="tipo-identificacion-label"
								id="tipo-identificacion"
								value={tipoIdentificacion}
								label="Tipo identificación"
								onChange={(e) => setTipoIdentificacion(e.target.value)}
							>
								<MenuItem value="rut">RUT</MenuItem>
								<MenuItem value="pasaporte">Pasaporte</MenuItem>
								<MenuItem value="dni">DNI</MenuItem>
							</Select>
						</FormControl>
					</Grid>
				</Grid>

				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<TextField
							id="numero-identificacion"
							label="Número de Identificación"
							variant="outlined"
							fullWidth
							required
							InputProps={{
								startAdornment: <FileText className="mr-2 text-muted-foreground" />,
							}}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							id="fecha-nacimiento"
							label="Fecha Nacimiento"
							type="date"
							variant="outlined"
							fullWidth
							InputLabelProps={{ shrink: true }}
							InputProps={{
								startAdornment: <Calendar className="mr-2 text-muted-foreground" />,
							}}
						/>
					</Grid>
				</Grid>

				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<TextField
							id="direccion"
							label="Dirección"
							variant="outlined"
							fullWidth
							InputProps={{
								startAdornment: <MapPin className="mr-2 text-muted-foreground" />,
							}}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<FormControl fullWidth>
							<InputLabel id="region-residencia-label">Región residencia</InputLabel>
							<Select
								labelId="region-residencia-label"
								id="region-residencia"
								value={regionResidencia}
								label="Región residencia"
								onChange={(e) => setRegionResidencia(e.target.value)}
							>
								{regionsOfChile.map((region) => (
									<MenuItem key={region} value={region}>
										{region}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				</Grid>

				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<FormControl fullWidth>
							<InputLabel id="comuna-residencia-label">Comuna residencia</InputLabel>
							<Select
								labelId="comuna-residencia-label"
								id="comuna-residencia"
								value={comunaResidencia}
								label="Comuna residencia"
								onChange={(e) => setComunaResidencia(e.target.value)}
							>
								{comunas.map((comuna) => (
									<MenuItem key={comuna} value={comuna}>
										{comuna}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							id="telefono"
							label="Teléfono"
							variant="outlined"
							fullWidth
							InputProps={{
								startAdornment: <Phone className="mr-2 text-muted-foreground" />,
							}}
						/>
					</Grid>
				</Grid>

				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<TextField
							id="email"
							label="E-mail"
							type="email"
							variant="outlined"
							fullWidth
							InputProps={{
								startAdornment: <Mail className="mr-2 text-muted-foreground" />,
							}}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<FormControl fullWidth>
							<InputLabel id="escolaridad-label">Escolaridad</InputLabel>
							<Select
								labelId="escolaridad-label"
								id="escolaridad"
								value={escolaridad}
								label="Escolaridad"
								onChange={(e) => setEscolaridad(e.target.value)}
							>
								{escolaridades.map((escolaridad) => (
									<MenuItem key={escolaridad} value={escolaridad}>
										{escolaridad}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				</Grid>

				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<FormControl fullWidth>
							<InputLabel id="etnia-label">Etnia</InputLabel>
							<Select
								labelId="etnia-label"
								id="etnia"
								value={etnia}
								label="Etnia"
								onChange={(e) => setEtnia(e.target.value)}
							>
								{etnias.map((etnia) => (
									<MenuItem key={etnia} value={etnia}>
										{etnia}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				</Grid>
				{/* Antecedentes del Requerimiento */}
				<Typography variant="h6" gutterBottom>
					Antecedentes del Requerimiento
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<FormControl fullWidth>
							<InputLabel id="region-label">Región</InputLabel>
							<Select
								labelId="region-label"
								id="region"
								value={region}
								label="Región"
								onChange={(e) => setRegion(e.target.value)}
							>
								{regionsOfChile.map((region) => (
									<MenuItem key={region} value={region}>
										{region}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} md={6}>
						<FormControl fullWidth>
							<InputLabel id="comuna-label">Comuna</InputLabel>
							<Select
								labelId="comuna-label"
								id="comuna"
								value={comuna}
								label="Comuna"
								onChange={(e) => setComuna(e.target.value)}
							>
								{comunas.map((comuna) => (
									<MenuItem key={comuna} value={comuna}>
										{comuna}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				</Grid>

				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<FormControl fullWidth>
							<InputLabel id="tipo-solicitud-label">Tipo Solicitud</InputLabel>
							<Select
								labelId="tipo-solicitud-label"
								id="tipo-solicitud"
								value={tipoSolicitud}
								label="Tipo Solicitud"
								onChange={(e) => setTipoSolicitud(e.target.value)}
							>
								<MenuItem value="consulta">Consulta</MenuItem>
								<MenuItem value="opinion">Opinión</MenuItem>
								<MenuItem value="reclamo">Reclamo</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} md={6}>
						<FormControl fullWidth>
							<InputLabel id="tipo-recepcion-label">
								Tipo de Recepción Requerimiento
							</InputLabel>
							<Select
								labelId="tipo-recepcion-label"
								id="tipo-recepcion"
								value={tipoRecepcion}
								label="Tipo de Recepción Requerimiento"
								onChange={(e) => setTipoRecepcion(e.target.value)}
							>
								{tiposRecepcion.map((tipo) => (
									<MenuItem key={tipo} value={tipo}>
										{tipo}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				</Grid>

				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<FormControl fullWidth>
							<InputLabel id="responder-via-label">Responder Vía</InputLabel>
							<Select
								labelId="responder-via-label"
								id="responder-via"
								value={responderVia}
								label="Responder Vía"
								onChange={(e) => setResponderVia(e.target.value)}
							>
								<MenuItem value="email">Email</MenuItem>
								<MenuItem value="telefono">Teléfono</MenuItem>
								<MenuItem value="carta">Carta</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							id="informacion-adicional"
							label="Requerimiento"
							multiline
							rows={4}
							variant="outlined"
							fullWidth
						/>
					</Grid>
				</Grid>

				<Grid container spacing={2}>
					<Grid item xs={12}>
						<FormControl fullWidth>
							<InputLabel id="institucion-publica-label">
								Institución Pública
							</InputLabel>
							<Select
								labelId="institucion-publica-label"
								id="institucion-publica"
								value={institucionPublica}
								label="Si este requerimiento proviene de otra Institución Pública, indique cual"
								onChange={(e) => setInstitucionPublica(e.target.value)}
							>
								{institucionesPublicas.map((institucion) => (
									<MenuItem key={institucion} value={institucion}>
										{institucion}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Grid>
				</Grid>

				<Grid container spacing={2}>
					{[1, 2, 3, 4].map((num) => (
						<Grid item xs={12} md={6} key={num}>
							<TextField
								id={`adjunto-${num}`}
								type="file"
								variant="outlined"
								fullWidth
							/>
						</Grid>
					))}
				</Grid>
				<Box className="flex justify-end space-x-4">
					<Button variant="outlined">Cancelar</Button>
					<Button variant="contained" type="submit">
						Grabar
					</Button>
				</Box>
			</form>
		</Box>
	)
}
