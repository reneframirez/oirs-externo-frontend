import { Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';

const AntRespuesta = ({ respuestaData }) => {
	const { funcionario, tipoRespuesta, fechaDocumento, nroDocumento, documento, respuesta } =
		respuestaData;

	return (
		<Grid container spacing={{ xs: 1, sm: 2, md: 2 }} p={1}>
			{[
				{ label: 'Funcionario', value: funcionario },
				{ label: 'Tipo Respuesta', value: tipoRespuesta },
				{ label: 'Fecha de Documento', value: fechaDocumento },
				{ label: 'Nro Documento', value: nroDocumento },
				{ label: 'Documento', value: documento },
				{ label: 'Respuesta', value: respuesta },
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
AntRespuesta.propTypes = {
	respuestaData: PropTypes.shape({
		funcionario: PropTypes.string,
		tipoRespuesta: PropTypes.string,
		fechaDocumento: PropTypes.string,
		nroDocumento: PropTypes.number,
		documento: PropTypes.element,
		respuesta: PropTypes.string,
	}).isRequired,
};

export default AntRespuesta;
