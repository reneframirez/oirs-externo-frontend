import { useForm, Controller } from 'react-hook-form'
import { Select, MenuItem, TextField, Button, FormControl, InputLabel } from '@mui/material'
import { LocationOn, Home, Assignment, Email } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setFormularioData } from '../store/actions'
import { useEffect } from 'react'

export default function CitizenRequestForm() {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const formularioData = useSelector((state) => state.formularioData)

	const {
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm()

	const onSubmit = (data) => {
		console.log(data)
		dispatch(setFormularioData(data))
		navigate('/encuesta')
	}

	useEffect(() => {
		reset(formularioData)
	}, [formularioData, reset])

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

				<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
					<div className="grid grid-cols-2 gap-6">
						{/* Región a la cual dirige su solicitud */}
						<FormControl fullWidth error={!!errors.regionSolicitud}>
							<InputLabel>Región a la cual dirige su solicitud *</InputLabel>
							<Controller
								name="regionSolicitud"
								control={control}
								defaultValue=""
								rules={{ required: 'Este campo es obligatorio' }}
								render={({ field }) => (
									<Select
										{...field}
										label="Región a la cual dirige su solicitud *"
										startAdornment={<LocationOn className="mr-2" />}
									>
										<MenuItem value="">Seleccione</MenuItem>
										<MenuItem value="region1">Región 1</MenuItem>
										<MenuItem value="region2">Región 2</MenuItem>
									</Select>
								)}
							/>
							{errors.regionSolicitud && (
								<p className="text-red-600">{errors.regionSolicitud.message}</p>
							)}
						</FormControl>

						{/* Comuna a la cual dirige su solicitud */}
						<FormControl fullWidth error={!!errors.comunaSolicitud}>
							<InputLabel>Comuna a la cual dirige su solicitud *</InputLabel>
							<Controller
								name="comunaSolicitud"
								control={control}
								defaultValue=""
								rules={{ required: 'Este campo es obligatorio' }}
								render={({ field }) => (
									<Select
										{...field}
										label="Comuna a la cual dirige su solicitud *"
										startAdornment={<Home className="mr-2" />}
									>
										<MenuItem value="">Seleccione</MenuItem>
										<MenuItem value="comuna1">Comuna 1</MenuItem>
										<MenuItem value="comuna2">Comuna 2</MenuItem>
									</Select>
								)}
							/>
							{errors.comunaSolicitud && (
								<p className="text-red-600">{errors.comunaSolicitud.message}</p>
							)}
						</FormControl>

						{/* Tipo solicitud */}
						<FormControl fullWidth error={!!errors.tipoSolicitud}>
							<InputLabel>Tipo solicitud *</InputLabel>
							<Controller
								name="tipoSolicitud"
								control={control}
								defaultValue=""
								rules={{ required: 'Este campo es obligatorio' }}
								render={({ field }) => (
									<Select
										{...field}
										label="Tipo solicitud *"
										startAdornment={<Assignment className="mr-2" />}
									>
										<MenuItem value="">Seleccione</MenuItem>
										<MenuItem value="consulta">Consulta</MenuItem>
										<MenuItem value="opinion">Opinión</MenuItem>
										<MenuItem value="peticion">Petición</MenuItem>
										<MenuItem value="felicitacion">Felicitación</MenuItem>
										<MenuItem value="reclamo">Reclamo</MenuItem>
									</Select>
								)}
							/>
							{errors.tipoSolicitud && (
								<p className="text-red-600">{errors.tipoSolicitud.message}</p>
							)}
						</FormControl>

						{/* Cómo desea recibir la respuesta */}
						<FormControl fullWidth error={!!errors.respuestaSolicitud}>
							<InputLabel>¿Cómo desea recibir la respuesta? *</InputLabel>
							<Controller
								name="respuestaSolicitud"
								control={control}
								defaultValue=""
								rules={{ required: 'Este campo es obligatorio' }}
								render={({ field }) => (
									<Select
										{...field}
										label="¿Cómo desea recibir la respuesta? *"
										startAdornment={<Email className="mr-2" />}
									>
										<MenuItem value="">Seleccione</MenuItem>
										<MenuItem value="email">Correo Electrónico</MenuItem>
										<MenuItem value="fisico">Correo Físico</MenuItem>
									</Select>
								)}
							/>
							{errors.respuestaSolicitud && (
								<p className="text-red-600">{errors.respuestaSolicitud.message}</p>
							)}
						</FormControl>
					</div>

					{/* Detalle solicitud */}
					<Controller
						name="detalleSolicitud"
						control={control}
						defaultValue=""
						rules={{ required: 'Este campo es obligatorio' }}
						render={({ field }) => (
							<TextField
								{...field}
								fullWidth
								multiline
								rows={4}
								label="Detalle solicitud *"
								variant="outlined"
								error={!!errors.detalleSolicitud}
								helperText={
									errors.detalleSolicitud ? errors.detalleSolicitud.message : ''
								}
								inputProps={{
									spellCheck: true,
								}}
							/>
						)}
					/>

					{/* Botones de navegación */}
					<div className="flex justify-between">
						<Button
							variant="contained"
							color="inherit"
							onClick={() => navigate('/datos-basicos')}
						>
							Volver
						</Button>
						<Button variant="contained" color="primary" type="submit">
							Siguiente
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}
