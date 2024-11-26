import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';

const AntecedentesRequerimiento = ({ datosRequerimiento }) => {
	return (
		<Grid container spacing={{ xs: 1, sm: 2, md: 2 }} p={1}>
			{/* Región */}
			<Grid item xs={12} md={6} lg={4}>
				<Typography variant="subtitle2" color="primary">
					Región
				</Typography>
				<Typography variant="body2">{datosRequerimiento.region || 'N/A'}</Typography>
			</Grid>

			{/* Comuna */}
			<Grid item xs={12} md={6} lg={4}>
				<Typography variant="subtitle2" color="primary">
					Comuna
				</Typography>
				<Typography variant="body2">{datosRequerimiento.comuna || 'N/A'}</Typography>
			</Grid>

			{/* Tipo de Solicitud */}
			<Grid item xs={12} md={6} lg={4}>
				<Typography variant="subtitle2" color="primary">
					Tipo de Solicitud
				</Typography>
				<Typography variant="body2">{datosRequerimiento.tipoSolicitud || 'N/A'}</Typography>
			</Grid>

			{/* Tipo de Recepción */}
			<Grid item xs={12} md={6} lg={4}>
				<Typography variant="subtitle2" color="primary">
					Tipo de Recepción
				</Typography>
				<Typography variant="body2">{datosRequerimiento.tipoRecepcion || 'N/A'}</Typography>
			</Grid>

			{/* Responder Vía */}
			<Grid item xs={12} md={6} lg={4}>
				<Typography variant="subtitle2" color="primary">
					Responder Vía
				</Typography>
				<Typography variant="body2">{datosRequerimiento.responderVia || 'N/A'}</Typography>
			</Grid>

			{/* Institución Pública */}
			<Grid item xs={12} md={6} lg={4}>
				<Typography variant="subtitle2" color="primary">
					Institución Pública
				</Typography>
				<Typography variant="body2">
					{datosRequerimiento.institucionPublica || 'N/A'}
				</Typography>
			</Grid>

			{/* Requerimiento */}
			<Grid item xs={12} md={6} lg={4}>
				<Typography variant="subtitle2" color="primary">
					Requerimiento
				</Typography>
				<Typography variant="body2">{datosRequerimiento.requerimiento || 'N/A'}</Typography>
			</Grid>
			{/* Especificación */}
			<Grid item xs={12} md={6} lg={4}>
				<Typography variant="subtitle2" color="primary">
					Especificación
				</Typography>
				<Typography variant="body2">
					{datosRequerimiento.especificacion || 'N/A'}
				</Typography>
			</Grid>
			{/* Justificación */}
			<Grid item xs={12}>
				<Typography variant="subtitle2" color="primary">
					Justificacion de la Especificación
				</Typography>
				<Typography variant="body2">{datosRequerimiento.justificacion || 'N/A'}</Typography>
			</Grid>
		</Grid>
	);
};

AntecedentesRequerimiento.propTypes = {
	datosRequerimiento: PropTypes.shape({
		region: PropTypes.string,
		comuna: PropTypes.string,
		tipoSolicitud: PropTypes.string,
		tipoRecepcion: PropTypes.string,
		responderVia: PropTypes.string,
		institucionPublica: PropTypes.string,
		requerimiento: PropTypes.string,
		especificacion: PropTypes.string,
		justificacion: PropTypes.string,
	}),
};

export default AntecedentesRequerimiento;
