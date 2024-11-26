import { Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';

const AntEmision = ({ emisionData }) => {
	const { fechaDocumento, tipoDocumento, nroDocumento, documento } = emisionData;

	return (
		<Grid container spacing={{ xs: 1, sm: 2, md: 2 }} p={1}>
			{[
				{ label: 'Fecha de Documento', value: fechaDocumento },
				{ label: 'Tipo Documento', value: tipoDocumento },
				{ label: 'Nro Documento', value: nroDocumento },
				{ label: 'Documento', value: documento },
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
AntEmision.propTypes = {
	emisionData: PropTypes.shape({
		fechaDocumento: PropTypes.string,
		tipoDocumento: PropTypes.string,
		nroDocumento: PropTypes.number,
		documento: PropTypes.element,
	}).isRequired,
};

export default AntEmision;
