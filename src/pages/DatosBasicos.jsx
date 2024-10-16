import { TextField, Select, MenuItem, Button, InputLabel, FormControl, Box } from '@mui/material'
import { Person, Badge, Cake, Phone, Email, Home } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Component() {
	const [tipoIdentificacion, setTipoIdentificacion] = useState('')
	const [genero, setGenero] = useState('')
	const [regionResidencia, setRegionResidencia] = useState('')
	const [comunaResidencia, setComunaResidencia] = useState('')
	const [nacionalidad, setNacionalidad] = useState('')
	const [escolaridad, setEscolaridad] = useState('')
	const [etnia, setEtnia] = useState('')

	const handlerTipoIdentificacion = (event) => {
		setTipoIdentificacion(event.target.value)
	}

	const handlerGenero = (event) => {
		setGenero(event.target.value)
	}

	const handlerRegionResidencia = (event) => {
		setRegionResidencia(event.target.value)
	}

	const handlerComunaResidencia = (event) => {
		setComunaResidencia(event.target.value)
	}

	const handlerNacionalidad = (event) => {
		setNacionalidad(event.target.value)
	}

	const handlerEscolaridad = (event) => {
		setEscolaridad(event.target.value)
	}

	const handlerEtnia = (event) => {
		setEtnia(event.target.value)
	}

	return (
		<Box className="flex bg-gray-100">
			{/* Main content */}
			<Box className="flex-1 p-10">
				<h1 className="text-2xl font-bold text-blue-700 mb-6">
					Formulario de Ingreso de Solicitudes Ciudadanas
				</h1>
				<p className="text-sm text-gray-600 mb-8">
					Para que la Defensoría trámite sus solicitudes, es obligatorio que llene los
					espacios con asteriscos *
				</p>

				<form className="space-y-6">
					<h2 className="text-xl font-semibold text-blue-700 mb-4">
						Antecedentes personales
					</h2>

					<Box className="grid grid-cols-3 gap-4">
						<TextField
							label="Nombres *"
							variant="outlined"
							fullWidth
							InputProps={{
								startAdornment: <Person className="text-gray-400 mr-2" />,
							}}
						/>
						<TextField
							label="Apellido Paterno *"
							variant="outlined"
							fullWidth
							InputProps={{
								startAdornment: <Person className="text-gray-400 mr-2" />,
							}}
						/>
						<TextField
							label="Apellido Materno *"
							variant="outlined"
							fullWidth
							InputProps={{
								startAdornment: <Person className="text-gray-400 mr-2" />,
							}}
						/>
					</Box>

					<Box className="grid grid-cols-3 gap-4">
						<FormControl fullWidth>
							<InputLabel id="tipo-identificacion-select-label">
								Tipo de identificación
							</InputLabel>
							<Select
								labelId="tipo-identificacion-select-label"
								id="tipo-identificacion-select"
								value={tipoIdentificacion}
								onChange={handlerTipoIdentificacion}
								label="Tipo de identificación *"
							>
								<MenuItem value="dni">DNI</MenuItem>
								<MenuItem value="passport">Pasaporte</MenuItem>
							</Select>
						</FormControl>
						<TextField
							id="outlined-basic"
							label="Número de identificación *"
							variant="outlined"
						/>
						<TextField
							label="Número de identificación *"
							variant="outlined"
							fullWidth
							InputProps={{
								startAdornment: <Badge className="text-gray-400 mr-2" />,
							}}
						/>
					</Box>

					<Box className="grid grid-cols-4 gap-4">
						<TextField
							label="Edad *"
							variant="outlined"
							fullWidth
							InputProps={{ startAdornment: <Cake className="text-gray-400 mr-2" /> }}
						/>

						<FormControl fullWidth>
							<InputLabel id="genero-select-label">Genero</InputLabel>
							<Select
								labelId="genero-select-label"
								id="genero-select"
								value={genero}
								onChange={handlerGenero}
								label="Genero *"
							>
								<MenuItem value="male">Masculino</MenuItem>
								<MenuItem value="female">Femenino</MenuItem>
								<MenuItem value="other">Otro</MenuItem>
							</Select>
						</FormControl>

						<TextField
							label="Teléfono *"
							variant="outlined"
							fullWidth
							InputProps={{
								startAdornment: <Phone className="text-gray-400 mr-2" />,
							}}
						/>
						<TextField
							label="Email"
							variant="outlined"
							fullWidth
							InputProps={{
								startAdornment: <Email className="text-gray-400 mr-2" />,
							}}
						/>
					</Box>

					<Box className="grid grid-cols-3 gap-4">
						<TextField
							label="Dirección *"
							variant="outlined"
							fullWidth
							InputProps={{ startAdornment: <Home className="text-gray-400 mr-2" /> }}
						/>

						<FormControl fullWidth>
							<InputLabel id="region-residencia-label">
								Region de residencia
							</InputLabel>
							<Select
								labelId="region-residencia-select-label"
								id="region-residencia-select"
								value={regionResidencia}
								onChange={handlerRegionResidencia}
								label="Region de residencia *"
							>
								<MenuItem value="male">Hay que rellenar</MenuItem>
							</Select>
						</FormControl>

						<FormControl fullWidth>
							<InputLabel id="comuna-residencia-label">
								Comuna de residencia
							</InputLabel>
							<Select
								labelId="comuna-residencia-select-label"
								id="comuna-residencia-select"
								value={comunaResidencia}
								onChange={handlerComunaResidencia}
								label="Comuna de residencia *"
							>
								<MenuItem value="male">Hay que rellenar</MenuItem>
							</Select>
						</FormControl>
					</Box>

					<Box className="grid grid-cols-3 gap-4">
						<FormControl fullWidth>
							<InputLabel id="nacionalidad-label">Nacionalida</InputLabel>
							<Select
								labelId="nacionalidad-select-label"
								id="nacionalidad-select"
								value={nacionalidad}
								onChange={handlerNacionalidad}
								label="Nacionalidad *"
							>
								<MenuItem value="male">Hay que rellenar</MenuItem>
							</Select>
						</FormControl>

						<FormControl fullWidth>
							<InputLabel id="escolaridad-label">Escolaridad</InputLabel>
							<Select
								labelId="escolaridad-select-label"
								id="escolaridad-select"
								value={escolaridad}
								onChange={handlerEscolaridad}
								label="Escolaridad *"
							>
								<MenuItem value="male">Hay que rellenar</MenuItem>
							</Select>
						</FormControl>

						<FormControl fullWidth>
							<InputLabel id="etnia-label">Etnia</InputLabel>
							<Select
								labelId="etnia-select-label"
								id="etnia-select"
								value={etnia}
								onChange={handlerEtnia}
								label="Etnia *"
							>
								<MenuItem value="male">Hay que rellenar</MenuItem>
							</Select>
						</FormControl>
					</Box>

					<Box className="flex justify-between items-center mt-8">
						<Box className="text-sm text-gray-600">Paso 1 de 3</Box>
						<Button
							variant="contained"
							component={Link}
							to="/datoscausa"
							color="primary"
							endIcon={<span>→</span>}
						>
							Siguiente
						</Button>
					</Box>
				</form>
			</Box>
		</Box>
	)
}
