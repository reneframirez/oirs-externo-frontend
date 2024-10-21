import { Typography, Grid } from '@mui/material';
import { User, Calendar, GraduationCap, Globe, Gavel } from 'lucide-react';
import PropTypes from 'prop-types';

const AntImputado = ({ imputadoData }) => {
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
		<Grid container spacing={{ xs: 1, sm: 2, md: 2 }} p={1}>
			{[
				{ label: 'RUN', value: run, icon: <User /> },
				{ label: 'Nombre', value: nombreImputado, icon: <User /> },
				{ label: 'Apellido Paterno', value: apellidoPaterno, icon: <User /> },
				{ label: 'Apellido Materno', value: apellidoMaterno, icon: <User /> },
				{ label: 'Fecha Nacimiento', value: fechaNacimiento, icon: <Calendar /> },
				{ label: 'Género', value: genero, icon: <User /> },
				{
					label: 'Nivel de Escolaridad',
					value: nivelEscolaridad,
					icon: <GraduationCap />,
				},
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
					<Typography variant="body2">{field.value || 'N/A'}</Typography>
				</Grid>
			))}
		</Grid>
	);
};
AntImputado.propTypes = {
	imputadoData: PropTypes.shape({
		run: PropTypes.string,
		nombreImputado: PropTypes.string,
		apellidoPaterno: PropTypes.string,
		apellidoMaterno: PropTypes.string,
		fechaNacimiento: PropTypes.string,
		genero: PropTypes.string,
		nivelEscolaridad: PropTypes.string,
		nacionalidad: PropTypes.string,
		rustPeticion: PropTypes.string,
		ruc: PropTypes.string,
		tribunal: PropTypes.string,
		rit: PropTypes.string,
	}).isRequired,
};

export default AntImputado;
