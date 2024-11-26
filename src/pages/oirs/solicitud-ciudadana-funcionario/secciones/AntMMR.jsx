import { Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';

const AntMMR = ({ mmrData }) => {
	const { fechaMMR, documento, observacion } = mmrData;

	return (
		<Grid container spacing={{ xs: 1, sm: 2, md: 2 }} p={1}>
			{[
				{ label: 'Fecha', value: fechaMMR },
				{ label: 'Archivo', value: documento },
				{ label: 'Observacion', value: observacion },
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
AntMMR.propTypes = {
	mmrData: PropTypes.shape({
		fechaMMR: PropTypes.string,
		documento: PropTypes.element,
		observacion: PropTypes.string,
	}).isRequired,
};

export default AntMMR;
