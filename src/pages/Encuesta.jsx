import { Select, MenuItem, TextField, Button, FormControl, InputLabel } from '@mui/material'
import { Person, Description, LocationOn, Home, Assignment, Email } from '@mui/icons-material'

export default function CitizenRequestForm() {
	return (
		<div className="flex bg-gray-100">
			{/* Sidebar */}
			<div className="w-64 bg-blue-700 text-white p-6">
				<div className="mb-8">
					<img src="/placeholder.svg" alt="Defensoría Logo" className="w-32 h-32" />
					<h2 className="text-xl font-bold mt-4">Defensoría</h2>
					<p className="text-sm">Sin defensa no hay Justicia</p>
				</div>
				<nav>
					<ul className="space-y-4">
						<li className="flex items-center space-x-2">
							<Person />
							<span>Antecedentes personales</span>
						</li>
						<li className="flex items-center space-x-2 font-bold">
							<Description />
							<span>Antecedentes del requerimiento</span>
						</li>
						<li className="flex items-center space-x-2 text-blue-300">
							<Assignment />
							<span>Evalúe nuestra atención</span>
						</li>
					</ul>
				</nav>
				<div className="mt-auto">
					<div className="bg-blue-600 h-2 w-full rounded-full mt-8">
						<div className="bg-blue-400 h-full w-2/3 rounded-full"></div>
					</div>
					<p className="text-sm mt-2">Paso 2 de 3</p>
				</div>
			</div>

			{/* Main Content */}
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
						<Button variant="contained" color="inherit">
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
