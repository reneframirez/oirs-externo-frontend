import { Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';

const AntAnulacion = ({ anulacionData }) => {
	const { funcionario, fechaAnulacion, fundamentoAnulacion } = anulacionData;

	return (
		<Grid container spacing={{ xs: 1, sm: 2, md: 2 }} p={1}>
			{[
				{ label: 'Funcionario', value: funcionario },
				{ label: 'Fecha', value: fechaAnulacion },
				{ label: 'Fundamento', value: fundamentoAnulacion },
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
AntAnulacion.propTypes = {
	anulacionData: PropTypes.shape({
		funcionario: PropTypes.string,
		fechaAnulacion: PropTypes.string,
		fundamentoAnulacion: PropTypes.string,
	}).isRequired,
};

export default AntAnulacion;
