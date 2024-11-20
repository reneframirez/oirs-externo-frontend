import { Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';

const AntApelacion = ({ apelacionData }) => {
	const {
		fechaApelacion,
		fechaAsignacion,
		quienApela,
		archivo,
		expediente,
		estadoRegistro,
		resumen,
	} = apelacionData;

	return (
		<Grid container spacing={{ xs: 1, sm: 2, md: 2 }} p={1}>
			{[
				{ label: 'Fecha de Apelación', value: fechaApelacion },
				{ label: 'Fecha de Asignación', value: fechaAsignacion },
				{ label: 'Quién Apela', value: quienApela },
				{ label: 'Otro Archivo', value: archivo },
				{ label: 'Expediente Completo', value: expediente },
				{ label: 'Estado Registros', value: estadoRegistro },
				{ label: 'Resumen', value: resumen },
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
AntApelacion.propTypes = {
	apelacionData: PropTypes.shape({
		fechaApelacion: PropTypes.string,
		fechaAsignacion: PropTypes.string,
		quienApela: PropTypes.string,
		archivo: PropTypes.element,
		expediente: PropTypes.element,
		estadoRegistro: PropTypes.string,
		resumen: PropTypes.string,
	}).isRequired,
};

export default AntApelacion;
