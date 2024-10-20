import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import AntecedentesUsuario from './AntecedentesUsuario';
import AntecedentesRequerimiento from './AntecedentesRequerimiento';
import { Grid, TextField } from '@mui/material';
import { CalendarMonth } from '@mui/icons-material';
import InformacionAdicional from './InformacionAdicional';

/*const datosIniciales = {
	tipoIdentificacion: 'RUT',
	regionResidencia: 'Metropolitana de Santiago',
	comunaResidencia: 'Santiago',
	escolaridad: 'Educación Básica Incompleta',
	etnia: 'Mapuche',
	numeroIdentificacion: '12345678-9',
	nombres: 'Juanito',
	apellidoPaterno: 'Pérez',
	apellidoMaterno: 'González',
	fechaNacimiento: '1990-01-01',
	telefono: '+56912345678',
	email: 'prueba@prueba.cl',
	direccion: 'Calle Falsa 123',
};*/

const Finalizacion = () => {
	return <Typography>¡Gracias por ingresar la solicitud! Se ha creado con éxito.</Typography>;
};
const steps = [
	{
		label: 'Antecedentes del Usuario',
		content: <AntecedentesUsuario />,
	},
	{
		label: 'Antecedentes del Requerimiento',
		content: <AntecedentesRequerimiento />,
	},
	{
		label: 'Información Adicional',
		content: <InformacionAdicional />,
	},
	{
		label: 'Finalizado',
		content: <Finalizacion />,
	},
];

export default function IngresoSolicitudInterno() {
	const [activeStep, setActiveStep] = useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Box sx={{ width: '100%' }}>
			<Box
				sx={{
					display: 'grid',
					gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
					gap: 2,
					pb: 2,
				}}
			>
				<Grid container spacing={2} pb={2}>
					<Grid item xs={12} md={4}>
						<TextField label="Folio" variant="outlined" fullWidth size="small" />
					</Grid>
					<Grid item xs={12} md={5}>
						<TextField
							id="fecha"
							label="Fecha"
							type="date"
							variant="outlined"
							fullWidth
							size="small"
							InputLabelProps={{ shrink: true }}
							InputProps={{
								startAdornment: (
									<CalendarMonth className="mr-2 text-muted-foreground" />
								),
							}}
						/>
					</Grid>
				</Grid>
			</Box>
			<Stepper activeStep={activeStep} orientation="vertical">
				{steps.map((step, index) => (
					<Step key={step.label}>
						<StepLabel>{step.label}</StepLabel>
						<StepContent>
							<Box sx={{ m: 2 }}>
								{step.content}
								<Box sx={{ mb: 2 }}>
									<Button
										variant="contained"
										onClick={handleNext}
										sx={{ mt: 1, mr: 1 }}
									>
										{index === steps.length - 1 ? 'Terminar' : 'Continuar'}
									</Button>
									<Button
										disabled={index === 0}
										onClick={handleBack}
										sx={{ mt: 1, mr: 1 }}
									>
										Volver
									</Button>
								</Box>
							</Box>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length && (
				<Paper square elevation={0} sx={{ p: 3 }}>
					<Typography>Solicitud ciudadana creada con exito</Typography>
					<Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
						Ingresar nueva solicitud
					</Button>
				</Paper>
			)}
		</Box>
	);
}
