import { Select, MenuItem, TextField, Button, FormControl, InputLabel } from '@mui/material'
import { LocationOn, Home, Assignment, Email } from '@mui/icons-material'

export default function CitizenRequestForm() {
	return (
		<div className="flex bg-gray-100">
			<div className="flex-1 p-8">
				<h1 className="text-2xl font-bold text-blue-700 mb-2">
					Formulario de Ingreso de Solicitudes Ciudadanas.
				</h1>
				<p className="text-sm text-gray-600 mb-6">
					Para que la Defensoría trámite sus solicitudes, es obligatorio que llene los
					espacios con asteriscos *
				</p>

				<h2 className="text-xl font-semibold text-blue-700 mb-4">
					Antecedentes del requerimiento
				</h2>

				<form className="space-y-6">
					<div className="grid grid-cols-2 gap-6">
						<FormControl fullWidth>
							<InputLabel>Región a la cual dirige su solicitud *</InputLabel>
							<Select
								label="Región a la cual dirige su solicitud *"
								startAdornment={<LocationOn className="mr-2" />}
							>
								<MenuItem value="">Seleccione</MenuItem>
							</Select>
						</FormControl>

						<FormControl fullWidth>
							<InputLabel>Comuna a la cual dirige su solicitud *</InputLabel>
							<Select
								label="Comuna a la cual dirige su solicitud *"
								startAdornment={<Home className="mr-2" />}
							>
								<MenuItem value="">Seleccione</MenuItem>
							</Select>
						</FormControl>

						<FormControl fullWidth>
							<InputLabel>Tipo solicitud *</InputLabel>
							<Select
								label="Tipo solicitud *"
								startAdornment={<Assignment className="mr-2" />}
							>
								<MenuItem value="">Seleccione</MenuItem>
							</Select>
						</FormControl>

						<FormControl fullWidth>
							<InputLabel>¿Cómo desea recibir la respuesta? *</InputLabel>
							<Select
								label="¿Cómo desea recibir la respuesta? *"
								startAdornment={<Email className="mr-2" />}
							>
								<MenuItem value="">Seleccione</MenuItem>
							</Select>
						</FormControl>
					</div>

					<TextField
						fullWidth
						multiline
						rows={4}
						label="Detalle solicitud *"
						variant="outlined"
					/>

					<div className="flex justify-between">
						<Button variant="contained" color="inherit" to="/datosbasicos">
							Volver
						</Button>
						<Button variant="contained" color="primary">
							Siguiente
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}
