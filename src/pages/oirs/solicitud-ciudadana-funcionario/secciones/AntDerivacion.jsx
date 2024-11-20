import { Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';

const AntDerivacion = ({ derivacionData }) => {
	const { funcionario, fechaDerivacion, fundamentoDervivacion } = derivacionData;

	return (
		<Grid container spacing={{ xs: 1, sm: 2, md: 2 }} p={1}>
			{[
				{ label: 'Funcionario que Deriva', value: funcionario },
				{ label: 'Fecha Derivación', value: fechaDerivacion },
				{ label: 'Fundamento', value: fundamentoDervivacion },
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
AntDerivacion.propTypes = {
	derivacionData: PropTypes.shape({
		funcionario: PropTypes.string,
		fechaDerivacion: PropTypes.string,
		fundamentoDervivacion: PropTypes.string,
	}).isRequired,
};

export default AntDerivacion;
