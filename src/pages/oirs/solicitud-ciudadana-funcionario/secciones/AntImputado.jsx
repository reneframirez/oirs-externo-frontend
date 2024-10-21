import React from 'react';
import {
	Card,
	CardContent,
	Typography,
	Grid,
} from '@mui/material';
import {
	User,
	Calendar,
	GraduationCap,
	Globe,
	Gavel,
} from 'lucide-react';

const AntImputado = ({ imputadoData }) => {
	// Desestructurar datos de imputado
	const {
		run,
		nombreImputado,
		apellidoPaterno,
		apellidoMaterno,
		fechaNacimiento,
		genero,
		nivelEscolaridad,
		nacionalidad,
		rustPeticion,
		ruc,
		tribunal,
		rit,
	} = imputadoData;

	return (
		<Card elevation={3} sx={{ borderRadius: 3, p: { xs: 1, sm: 2, md: 3 } }}>
			<CardContent>

				<Grid container spacing={{ xs: 1, sm: 2, md: 2 }}>
					{[
						{ label: 'RUN', value: run, icon: <User /> },
						{ label: 'Nombre', value: nombreImputado, icon: <User /> },
						{ label: 'Apellido Paterno', value: apellidoPaterno, icon: <User /> },
						{ label: 'Apellido Materno', value: apellidoMaterno, icon: <User /> },
						{ label: 'Fecha Nacimiento', value: fechaNacimiento, icon: <Calendar /> },
						{ label: 'Género', value: genero, icon: <User /> },
						{ label: 'Nivel de Escolaridad', value: nivelEscolaridad, icon: <GraduationCap /> },
						{ label: 'Nacionalidad', value: nacionalidad, icon: <Globe /> },
						{ label: 'RUD / Petición', value: rustPeticion, icon: <Gavel /> },
						{ label: 'RUC', value: ruc, icon: <Gavel /> },
						{ label: 'Tribunal', value: tribunal, icon: <Gavel /> },
						{ label: 'RIT', value: rit, icon: <Gavel /> },
					].map((field, index) => (
						<Grid item xs={12} md={6} lg={4} key={index}>
							<Typography variant="subtitle2" color="primary">
								{field.label}
							</Typography>
							<Typography variant="body2">
								{field.value || 'N/A'}
							</Typography>
						</Grid>
					))}
				</Grid>
			</CardContent>
		</Card>
	);
};

export default AntImputado;
