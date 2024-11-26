import { Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';

const AntEntrevista = ({ entrevistaData }) => {
	const { entrevista, fechaEntrevista, forma, resumen } = entrevistaData;

	return (
		<Grid container spacing={{ xs: 1, sm: 2, md: 2 }} p={1}>
			{[
				{ label: '¿Se realizo la entrevista?', value: entrevista },
				{ label: 'Fecha de Documento', value: fechaEntrevista },
				{ label: 'Forma que se realiza', value: forma },
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
AntEntrevista.propTypes = {
	entrevistaData: PropTypes.shape({
		entrevista: PropTypes.string,
		fechaEntrevista: PropTypes.string,
		forma: PropTypes.string,
		resumen: PropTypes.string,
	}).isRequired,
};

export default AntEntrevista;
