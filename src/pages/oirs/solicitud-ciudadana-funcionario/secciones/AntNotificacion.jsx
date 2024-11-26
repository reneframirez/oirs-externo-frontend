import { Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';

const AntNotificacion = ({ notificacionData }) => {
	const { fechaNotificacion, documento } = notificacionData;

	return (
		<Grid container spacing={{ xs: 1, sm: 2, md: 2 }} p={1}>
			{[
				{ label: 'Fecha', value: fechaNotificacion },
				{ label: 'Adjunto', value: documento },
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
AntNotificacion.propTypes = {
	notificacionData: PropTypes.shape({
		fechaNotificacion: PropTypes.string,
		documento: PropTypes.element,
	}).isRequired,
};

export default AntNotificacion;
