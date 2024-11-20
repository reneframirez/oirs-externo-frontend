import { Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';

const AntResolver = ({ resolverData }) => {
	const { fechaSolicitud, profesional } = resolverData;

	return (
		<Grid container spacing={{ xs: 1, sm: 2, md: 2 }} p={1}>
			{[
				{ label: 'Fecha Solicitud de MMR', value: fechaSolicitud },
				{ label: 'Solicitud a', value: profesional },
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
AntResolver.propTypes = {
	resolverData: PropTypes.shape({
		fechaSolicitud: PropTypes.string,
		profesional: PropTypes.string,
	}).isRequired,
};

export default AntResolver;
